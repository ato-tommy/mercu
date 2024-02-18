import React, { useEffect } from "react";
import SectionsTitle from "../../../modules/SectionsTitle/SectionsTitle";
import { Link } from "react-router-dom";


function HomeProducts() {
  const categories = [
    { title: "Chemicals Oilfield Trading", img: "./category1.jpg",aos:'fade-right' },
    { title: "Grease & Lubricants Trading", img: "./category2.jpg",aos:'fade-right' },
    { title: "Tar & Asphalt Trading ", img: "./category3.jpg",aos:'fade-left' },
    { title: "Tar & Asphalt Trading ", img: "./category4.jpg",aos:'fade-left' },
  ];

 

  return (
    <div className="w-full bg-slate-800 py-12 homeCategories">
      <SectionsTitle title={"Categories"} />
      <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-36 my-7 mx-auto py-16">
         {
            categories.map((category,index)=>(
               <Link className="w-60 h-60 bg-white overflow-hidden relative homeCategrieBox rounded-lg mx-auto mt-5 xl:mt-0" data-aos={category.aos} to={'products'}>
               <img src={category.img} className="w-full h-full" alt="" />
               <div className="absolute top-[70%] w-full h-full flex  justify-center items-start homeCategrieBoxTextsContainer t07" >
                 <h2 className="text-white text-2xl mb-5 px-3">
                  {category.title}
                 </h2>
               </div>
             </Link>
            ))
         }
      
      </div>
    </div>
  );
}

export default HomeProducts;
