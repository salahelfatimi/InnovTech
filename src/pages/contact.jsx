import { useState } from "react";
import { Send, XOctagon } from "react-feather";
import toast, { Toaster } from "react-hot-toast";
import Loading from "./components/loading";
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
    if (conditionValidation) {
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
            style: {
              zIndex: 30,
            },
          }
        );
      }
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const conditionValidation =
    formData.message &&
    formData.email &&
    formData.fullName &&
    formData.subject &&
    formData.tele;

  return (
    <div className=" relative z-10 pt-12">
      <Loading />
      <div className="container">
        <div className="dark:bg-[#1c1f24] rounded-2xl drop-shadow-2xl  lg:rounded-xl shadow-xl relative z-10 border-8  border-white  dark:border-[#1c1f24]  bg-white   ">
          <div className=" flex flex-col lg:flex-row w-full  gap-4 items-center">
            <div className="w-full lg:w-1/2 ">
              <iframe
                className=" rounded-t-lg lg:rounded-xl l  w-full h-[20rem] lg:h-[40rem] "
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d568.7895780896672!2d-8.019320767251982!3d31.642312460088707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafeff360f00771%3A0x7163612040e32812!2sLa%20cit%C3%A9%20d&#39;innovation!5e1!3m2!1sen!2sma!4v1699610451787!5m2!1sen!2sma"
              ></iframe>
            </div>
            <div className="lg:w-1/2 w-full p-8">
              <form className="flex-col flex gap-6 " onSubmit={sendEmail}>
                <span
                  className={`font-bold lg:text-start text-center text-3xl lg:text-4xl duration-700  text-[#ff9825] `}
                >
                  Contact Us
                </span>

                <div className="flex gap-4 w-full items-start ">
                  <input
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`border-2 dark:border-[#23272f] py-2 w-1/2 px-4 rounded-md placeholder:italic placeholder:text-sm   `}
                    type="text"
                    name="fullName"
                    placeholder="Nom et Prénom"
                  />
                  <input
                    value={formData.tele}
                    onChange={handleInputChange}
                    className={`border-2 dark:border-[#23272f] py-2 w-1/2 px-4 rounded-md placeholder:italic placeholder:text-sm  `}
                    type="tele"
                    name="tele"
                    placeholder="Téléphone"
                  />
                </div>
                <input
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`border-2 dark:border-[#23272f]  py-2  px-4 rounded-md w-full  placeholder:italic placeholder:text-sm`}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />

                <input
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`border-2 dark:border-[#23272f]  py-2  px-4 rounded-md w-full  placeholder:italic placeholder:text-sm`}
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Sujet"
                />
                <textarea
                  value={formData.message}
                  onChange={handleInputChange}
                  className={`border-2 dark:border-[#23272f]  py-2  px-4 rounded-md w-full  placeholder:italic placeholder:text-sm`}
                  name="message"
                  id="message"
                  cols="40"
                  rows="8"
                  placeholder="Message"
                ></textarea>
                <button
                  disabled={!conditionValidation}
                  className={`${
                    conditionValidation
                      ? "bg-[#ff9825]  border-[#ff9825] hover:text-[#ff9825] dark:hover:bg-[#1c1f24] hover:bg-[#ffffff] "
                      : "border-red-500 bg-red-500 "
                  }    font-bold border-4    duration-700     text-white rounded-md drop-shadow-2xl  items-center justify-center flex gap-2 py-1 px-4 `}
                >
                  <span>Envoyer</span>
                  <div className="relative overflow-hidden ">
                    <Send
                      size={20}
                      className={`flex transition-transform ease-out duration-1000 ${
                        conditionValidation
                          ? ""
                          : "transform -translate-x-full h-0 w-0"
                      }`}
                    />

                    <XOctagon
                      size={20}
                      className={`flex transition-transform ease-out duration-1000 ${
                        conditionValidation
                          ? "transform -translate-x-full h-0 w-0"
                          : " "
                      }`}
                    />
                  </div>
                </button>
              </form>
            </div>
          </div>
          <Toaster
            toastOptions={{
              className:
                "dark:bg-[#121212] relative z-20 dark:text-white bg-white text-black  ",
            }}
          />
        </div>
      </div>
    </div>
  );
}
