import React, { useEffect, useRef, useState } from "react";
import PageBgLayout from "../../components/modules/PageBgLayout/PageBgLayout";

import { useSelector } from "react-redux";

function Products() {
  const data = useSelector((state) => state);
  const [showModal, setIsShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const products = [
    { img: "./banner7.jpg", title: "test title" },
    { img: "./banner8.jpg", title: "test title" },
    { img: "./banner4.jpg", title: "test title" },
    { img: "./banner5.jpg", title: "test title" },
    { img: "./banner4.jpg", title: "test title" },
  ];
  const categories = [
    { id: 1, name: "All" },
    { id: 2, name: "Oil And Gas" },
    { id: 3, name: "Petrochemical" },
    { id: 4, name: "Non Fuel Products" },
  ];

  const closeModalHandler = (e) => {
    e.target.dataset.name && setIsShowModal(false);
  };

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <>
      <PageBgLayout
        title={"Products"}
        height={"h-[50vh]"}
        img={"./banner1.jpg"}
      />
      <div className="bg-slate-800 py-10 h-auto grid grid-cols-1 lg:grid-cols-4">
        <div className="w-3/4 md:w-5/6 mx-auto lg:col-span-1 bg-[#d3d4d834] mt-10  rounded-lg pt-5 h-[30vh]">
          <form>
            {categories.map((category) => (
              <>
                <label key={category.id} className="flex gap-2 px-5 text-white text-lg font-semibold">
                  <input
                    type="checkbox"
                    name={category.name}
                    checked={selectedOption === category.name}
                    onChange={() => handleCheckboxChange(category.name)}
                    
                  />
                  {category.name}
                </label>
                <br />
              </>
            ))}
          </form>
        </div>
        <div className="lg:col-span-3  lg:h-[90vh] lg:overflow-y-scroll">
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 px-4">
        {products.map((product, index) => (
            <div
              key={index}
              className="w-60 h-64 lg:w-56 md:w-72  lg:h-56  my-10 pb-4 overflow-hidden mx-auto rounded-lg  relative"
              onClick={() => {
                setIsShowModal(true);
              }}
            >
              <img
                src={product.img}
                className="w-full h-full absolute top-0 left-0"
                alt=""
              />
              <div className="text-white w-full left-0 py-2 mt-2 px-3 z-10 absolute productBoxText  bottom-0 capitalize">
                {product.title}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
 

      {showModal && (
        <div
          className="Modal fixed h-[100vh] w-full left-0 top-0 bg-[#302f2fd3] flex justify-center items-center z-[51]"
          onClick={closeModalHandler}
          data-name="modalContainer"
        >
          <div className=" w-4/5 h-3/5 bg-slate-100  rounded-lg grid grid-cols-1 lg:grid-cols-2 overflow-hidden relative">
            <div className="modalImgContainer">
              <img src="./banner1.jpg" className="w-full lg:h-full" alt="" />
            </div>
            <div className="modalTextContainer overflow-y-scroll">
              <h1 className="text-4xl ms-5 mt-5 font-semibold">sajjad</h1>
              <p className="px-4 my-5 text-gray-500 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                provident vel laborum accusantium facilis nam cupiditate iusto
                id itaque cum, sequi perferendis deleniti temporibus
                perspiciatis molestiae ipsa qui ab illo. Suscipit, a dicta animi
                et commodi aut explicabo necessitatibus facere placeat qui,
                temporibus minima sit iste laborum fugit dolor repudiandae
                nesciunt dolorum aperiam voluptas? In eum, amet aperiam tempore
                veritatis ad suscipit iure molestias culpa, asperiores, ipsa
                recusandae quibusdam natus! Error vero voluptatum reprehenderit
                eius magni voluptatibus ducimus ex non iste molestias dicta
                quis, aliquid eligendi esse libero repellendus incidunt! Natus
                quia placeat eaque soluta et quisquam distinctio animi
                explicabo! lorem500
              </p>
            </div>

            <div
              className="closeModal absolute top-2 right-2"
              onClick={() => {
                setIsShowModal(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white lg:text-gray-700 lg:w-10 lg:h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
