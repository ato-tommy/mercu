import React from "react";
import SectionsTitle from "../../../modules/SectionsTitle/SectionsTitle";

function HomeServices({allServices,showBg,showTitle}) {
  
  return (
    <div className={`${showBg ? 'HomeServicesContainer':''} py-7`}>
      {
        showTitle && <SectionsTitle title={'Services'}/>
      }
      <div className="px-4 md:px-16">
      <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 rounded-3xl px-5 servicesItemsContainer`}>
        {allServices.map((sevice, index) => (
          <div key={index} className="mx-auto w-72 my-5 px-5" data-aos={sevice.aos} >
            <img src={sevice.icon} alt="" />
            <h3 className="text-2xl my-5 font-semibold text-gray-95000">{sevice.title}</h3>
            <p className="font-semibold text-gray-300">{sevice.subTitle}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default HomeServices;
