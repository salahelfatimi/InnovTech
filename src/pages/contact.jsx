"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    tele: "",
    email: "",
    subject: "",
    message: "",
  });
  const sendEmail = async (e) => {
    e.preventDefault();

    if (!formData.fullName) {
      return toast.error("S'il vous plait entrez votre nom entier");
    }
    if (!formData.tele) {
      return toast.error("Veuillez entrer votre numéro de téléphone");
    }
    if (!formData.email) {
      return toast.error("Veuillez entrer votre email");
    }

    if (!formData.subject) {
      return toast.error("Veuillez entrer un sujet");
    }
    if (!formData.message) {
      return toast.error("Veuillez entrer un message");
    }

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.status === 200) {
      setFormData({
        fullName: "",
        tele: "",
        email: "",
        subject: "",
        message: "",
      });
      toast.success(
        `Hey ${formData.fullName}, your message was sent successfully! I Will Contact you soon! 👋`,
        {
          position: "bottom-right",
          duration: 7000,
        }
      );
    } else {
      toast.error(
        `Hello ${formData.fullName}, it appears that your previous message was not sent successfully. Please try sending it again later. `,
        {
          position: "bottom-right",
          duration: 7000,
        }
      );
    }
  };

  return (
    <>
      <div className="dark:bg-[#1c1f24] rounded-lg shadow-2xl  bg-white   ">
        <div className=" flex flex-col lg:flex-row w-full  gap-4 items-center">
          <div className="w-full lg:w-1/2 ">
            <iframe
              className=" rounded-t-lg lg:rounded-t-none rounded-l-none lg:rounded-bl-lg lg:rounded-tl-lg w-full h-[20rem] lg:h-[35rem] "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d568.7895780896672!2d-8.019320767251982!3d31.642312460088707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafeff360f00771%3A0x7163612040e32812!2sLa%20cit%C3%A9%20d&#39;innovation!5e1!3m2!1sen!2sma!4v1699610451787!5m2!1sen!2sma"
            ></iframe>
          </div>
          <div className="lg:w-1/2 w-full p-8">
            <form
              className="flex-col items-start flex gap-4 "
              onSubmit={sendEmail}
            >
              <span className="font-bold text-2xl">Contact Us</span>

              <div className="flex gap-2 w-full ">
                <input
                 value={formData.fullName}
                  onChange={(e) =>
                    setFormData((data) => ({
                      ...data,
                      fullName: e.target.value,
                    }))
                  }
                  className="  border-2 border-[#1A60A1] py-2 w-1/2 px-4 rounded "
                  type="text"
                  name="fullName"
                  placeholder="Nom et Prénom"
                />
                <input
                    value={formData.tele}
                  onChange={(e) =>
                    setFormData((data) => ({ ...data, tele: e.target.value }))
                  }
                  className=" border-2 border-[#1A60A1] py-2 w-1/2 px-4 rounded"
                  type="tele"
                  name="tele"
                  placeholder="Téléphone"
                />
              </div>
              <input
                  value={formData.email}
                onChange={(e) =>
                  setFormData((data) => ({ ...data, email: e.target.value }))
                }
                className="border-2 border-[#1A60A1]  py-2  px-4 w-full  rounded"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
              />
              <input
                  value={formData.subject}
                onChange={(e) =>
                  setFormData((data) => ({ ...data, subject: e.target.value }))
                }
                className="border-2 border-[#1A60A1]  py-2  px-4 w-full  rounded"
                type="text"
                name="subject"
                id="subject"
                placeholder="Sujet"
              />
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData((data) => ({ ...data, message: e.target.value }))
                }
                className=" border-2 border-[#1A60A1] px-4 w-full rounded py-2"
                name="message"
                id="message"
                cols="40"
                rows="8"
                placeholder="Message"
              ></textarea>
              <button
                className="   bg-[#1A60A1] font-semibold border-2 border-[#1A60A1] hover:bg-[#ffffff] hover:text-[#1A60A1] dark:hover:text-[#fff]   dark:hover:bg-[#1c1f24]  text-white rounded-md  py-2 px-12 "
                type="submit"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
        <Toaster
          toastOptions={{
            className: "dark:bg-[#121212] dark:text-white bg-white text-black ",
          }}
        />
      </div>
    </>
  );
}
