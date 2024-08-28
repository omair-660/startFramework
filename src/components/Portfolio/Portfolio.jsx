import React, { useState } from "react";
import image1 from '../../assets/poert1.png'
import image2 from '../../assets/port2.png'
import image3 from '../../assets/port3.png'
import style from '../Contact/style.module.css'

export default function Portfolio() {
  const [images, setImages] = useState([
    { image: image1, id: "image1" },
    { image: image2, id: "image2" },
    { image: image3, id: "image3" },
    { image: image1, id: "image4" },
    { image: image2, id: "image5" },
    { image: image3, id: "image6" },
  ]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section>
      <div className="text-center mb-6">
          <div className={`${style.heading}  relative w-fit mx-auto`}>
            <h1 className="my-5 uppercase font-bold text-4xl text-slate-700">
            PORTFOLIO COMPONENT
            </h1>
            <i className="fa-solid fa-star absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-50 rounded-full w-7 h-7 flex justify-center items-center z-10 " />
          </div>
        </div>
        <div className="flex flex-wrap">
          {images.map((item) => (
            <div key={item.id} className="w-full md:w-1/2 lg:w-1/3">
              <div className="m-3 box relative">
                <img
                  src={item.image}
                  alt={item.id}
                  className="w-full rounded-lg"
                  onClick={() => openModal(item.image)}
                />
                <div 
                  className="plus absolute top-0 left-0 right-0 bottom-0 bg-opacity-40 bg-emerald-500 rounded-lg flex items-center justify-center transition duration-500 opacity-0 hover:opacity-100 z-10 cursor-pointer"
                  onClick={() => openModal(item.image)}
                >
                  <i className="fa-solid fa-plus w-10 h-10 rounded-full text-7xl text-white "></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isModalOpen && (
          <div
            id="static-modal"
            data-modal-backdrop="static"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center w-full h-full bg-blue-500 bg-opacity-15 "
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full transition duration-500">
              <div className="relative  rounded-lg shadow ">
                <div className="flex items-center justify-between p-4 md:p-5 ">
                
                  <button
                    type="button"
                    className="text-gray-200 transition duration-500 bg-slate-500 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={closeModal}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full rounded-lg"
                  />
                </div>
               
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
