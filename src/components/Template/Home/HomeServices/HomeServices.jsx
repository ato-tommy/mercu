import React from "react";
import SectionsTitle from "../../../modules/SectionsTitle/SectionsTitle";

function HomeServices() {
  const services = [
    {
      icon: "./icon1.png",
      title: "Pipeline Services",
      subTitle: `Throughout all these years in the business, we've gotten an extensive experience when it comes to the construction of 2 in. to 60 in. pipelines. Our expertise includes…`,
      aos:'fade-up'
    },
    {
      icon: "./icon2.png",
      title: "Geoscience Research",
      subTitle: `At Maxwell Oil & Gas Services, we always offer a complete range of services, from geoscience data collection and analytics to data management to geological and reservoir 3D.`,
      aos:'fade-down'
    },
    {
      icon: "./icon3.png",
      title: "Engineering",
      subTitle: `Our natural resources engineering expertise has standards, best practices, processes and requirements much higher than the industry-standard ones...`,
      aos:'fade-up'
    },
    {
      icon: "./icon4.png",
      title: "Drilling",
      subTitle: `When it comes to having the ability to access the best Liner Hangers, Drilling Bits, Production and Wellheads, we have an exclusive cooperation going on.`,
      aos:'fade-down'
    },
  ];
  return (
    <div className="HomeServicesContainer py-7">
      <SectionsTitle title={'Services'}/>
      <div className="px-4 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 servicesItemsContainer rounded-3xl px-5">
        {services.map((sevice, index) => (
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
