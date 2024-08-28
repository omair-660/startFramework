import React from "react";

export default function About() {
  return (
    <>
      <div className="bg-emerald-500 absolute top-0 left-0 right-0 bottom-0 text-slate-50 flex items-center justify-center flex-col">
        <div className="text-center">
          <div className="heading relative w-fit mx-auto">
            <h1 className="my-5 uppercase font-bold text-4xl ">
            ABOUT COMPONENT
            </h1>
            <i className="fa-solid fa-star absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 rounded-full w-7 h-7 flex justify-center items-center z-10 " />
          </div>
          <div className="flex justify-center flex-wrap items-center m-9  mt-14 gap-7">
            <div className="w-full md:w-1/3">
              <p className=" text-center md:text-start">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <p className=" text-center md:text-start">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
