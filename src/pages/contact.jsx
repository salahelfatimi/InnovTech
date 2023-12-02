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
    if(conditionValidation){
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
  }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const conditionValidation=formData.message && formData.email && formData.fullName && formData.subject && formData.tele

  return (
    <div className=" relative z-10 pt-12">
          <img className=' absolute z-0 -top-[3.6rem] hidden lg:block' src='/icon/waveSaction.svg' alt='' />
          <img className=" absolute z-0 -top-[3.6rem] sm:block lg:hidden" src="/icon/waveSactionTablet.svg" alt="" />
          <img className=" absolute z-0 -top-[3.6rem] block sm:hidden" src="/icon/waveSactionPhone.svg" alt="" />
      <div className="container">
        <div className="dark:bg-[#1c1f24]  rounded-3xl shadow-2xl relative z-10  bg-[white]   ">
          <div className=" flex flex-col lg:flex-row w-full  gap-4 items-center">
            <div className="w-full lg:w-1/2 ">
              <iframe
                className=" rounded-t-3xl lg:rounded-t-none rounded-l-none lg:rounded-l-3xl  w-full h-[20rem] lg:h-[40rem] "
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d568.7895780896672!2d-8.019320767251982!3d31.642312460088707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafeff360f00771%3A0x7163612040e32812!2sLa%20cit%C3%A9%20d&#39;innovation!5e1!3m2!1sen!2sma!4v1699610451787!5m2!1sen!2sma"
              ></iframe>
            </div>
            <div className="lg:w-1/2 w-full p-8">
              <form
                className="flex-col flex gap-6 "
                onSubmit={sendEmail}
              >
                <span className={`font-bold lg:text-start text-center text-3xl lg:text-4xl duration-700 ${conditionValidation?" text-[#0066ff]":"text-red-500"} `}>Contact Us</span>

                <div className="flex gap-4 w-full items-start ">
                  <input
                    value={formData.fullName}
                    
                    onChange={handleInputChange}
                    className={`border-4  py-2 w-1/2 px-4 rounded-xl placeholder:italic placeholder:font-semibold   ${formData.fullName?"border-[#0066ff]":"border-red-500 "} `}
                    type="text"
                    name="fullName"
                    placeholder="Nom et Prénom"
                  />
                  <input
                    value={formData.tele}
                    
                    onChange={handleInputChange}
                    className={`border-4  py-2 w-1/2 px-4 rounded-xl placeholder:italic placeholder:font-semibold  ${formData.tele?"border-[#0066ff]":"border-red-500 "}`}
                    type="tele"
                    name="tele"
                    placeholder="Téléphone"
                  />
                </div>
                <input
                  value={formData.email}
                  
                  onChange={handleInputChange}
                  className={`border-4 ${formData.email?"border-[#0066ff]":"border-red-500 "} py-2  px-4 rounded-xl w-full  placeholder:italic placeholder:font-semibold`}
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                
                <input
                  value={formData.subject}
                  
                  onChange={handleInputChange}
                  className={`border-4 ${formData.subject?"border-[#0066ff]":"border-red-500 "} py-2  px-4 rounded-xl w-full  placeholder:italic placeholder:font-semibold`}
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Sujet"
                />
                <textarea
                  value={formData.message}
                  
                  
                  onChange={handleInputChange}
                  className={`border-4 ${formData.message?"border-[#0066ff]":"border-red-500   "} py-2  px-4 rounded-xl w-full  placeholder:italic placeholder:font-semibold`}
                  name="message"
                  id="message"
                  cols="40"
                  rows="8"
                  placeholder="Message"
                ></textarea>
                <button
                  disabled={!conditionValidation}
                  className={`${conditionValidation?"bg-[#0066ff] border-[#0066ff] hover:text-[#0066ff] dark:hover:bg-[#1c1f24] hover:bg-[#ffffff] ":"border-red-500 bg-red-500 "}    font-bold border-4    duration-700     text-white rounded-3xl drop-shadow-2xl  py-2 px-12 `}
                > 
                  Envoyer
                </button>
              </form>
            </div>
          </div>
          <Toaster
            toastOptions={{
              className: "dark:bg-[#121212] dark:text-white bg-white text-black  ",
            }}
          />
        </div>
      </div>
    </div>
  );
}
