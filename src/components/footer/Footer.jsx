import React from "react";

export default function Footer() {
  return (
    <div className="bg-slate-700 px-4 py-10 ">
    <div className="flex flex-col md:flex-row justify-center text-slate-50">
      <div className="text-center w-full md:w-1/3 mb-4 md:mb-0">
        <h2 className="uppercase font-bold">location</h2>
        <p>2215 John Daniel Drive</p>
        <br />
        Clark, MO 65243
      </div>
      <div className="text-center w-full md:w-1/3 mb-4 md:mb-0">
        <h2 className="uppercase font-bold">AROUND THE WEB</h2>
        <div className="icon flex gap-6 justify-center mt-3">
        <i className=" w-10 h-10 rounded-full border border-white flex items-center justify-center transition duration-500 hover:bg-white hover:text-gray-900 cursor-pointer fa-brands fa-facebook-f"></i>
        <i className=" w-10 h-10 rounded-full border border-white flex items-center justify-center transition duration-500 hover:bg-white hover:text-gray-900 cursor-pointer fa-brands fa-twitter"></i>
        <i className=" w-10 h-10 rounded-full border border-white flex items-center justify-center transition duration-500 hover:bg-white hover:text-gray-900 cursor-pointer fa-brands fa-linkedin-in"></i>
        <i className=" w-10 h-10 rounded-full border border-white flex items-center justify-center transition duration-500 hover:bg-white hover:text-gray-900 cursor-pointer fa-solid fa-globe"></i>
        </div>
      </div>
      <div className="text-center w-full md:w-1/3">
        <h2 className="uppercase font-bold">ABOUT FREELANCER</h2>
        <p>
          Freelance is a free to use, licensed Bootstrap theme created by
          Route
        </p>
      </div>
    </div>
  </div>
  );
}
