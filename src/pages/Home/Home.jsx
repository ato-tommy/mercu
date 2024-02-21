import React, { useEffect } from "react";
import HomeBanner from "../../components/Template/Home/HomeBanner/HomeBanner";
import HomeOverWrite from "../../components/Template/Home/HomeOverWrite/HomeOverWrite";
import HomeServices from "../../components/Template/Home/HomeServices/HomeServices";
import HomeProducts from "../../components/Template/Home/HomeProducts/HomeProducts";
import HomeNews from "../../components/Template/Home/HomeNews/HomeNews";
 

function Home() {

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
   <>
   <HomeBanner/>
   <HomeOverWrite/>
   <HomeProducts/>
   <HomeServices  allServices={services} showBg={true} showTitle={true}   />
   <HomeNews/>
   </>
  );
}

export default Home;
