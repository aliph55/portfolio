import React from "react";

const Contact = () => {
  return (
    <div
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white "
      name="contact"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Contact
          </p>
          <p className="py-6">Submit the form to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            method="POST"
            action="https://getform.io/f/581c2e0b-62c3-40ce-a171-764ecfe29876"
            className="flex flex-col md:w-1/2  "
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none "
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none "
            />
            <textarea
              placeholder="Enter your message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              name="message"
              rows="10"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 py-3 mx-auto my-8 flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
