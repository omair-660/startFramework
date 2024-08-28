import React from "react";
import myImage from "../../assets/avataaars.svg";

export default function Home() {
  return (
    <>
      <div className="bg-emerald-500 absolute top-0 left-0 right-0 bottom-0 text-slate-50 flex items-center justify-center flex-col">
        <div className="">
          <img src={myImage} className="w-full rounded" alt="Avatar" />
        </div>
        <div className="text ">
          <div className="heading relative">
            <h1 className="my-5 uppercase font-bold text-2xl">
              start framework
            </h1>
            <i className="fa-solid fa-star absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-500 rounded-full w-7 h-7 flex justify-center items-center z-10 " />
          </div>
          <p className="text-sm my-8">
            Graphic Artist - Web Designer - Illustrator
            
          


          </p>
        </div>
      </div>
    </>
  );
}
