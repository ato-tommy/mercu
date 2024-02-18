import React, { useEffect } from "react";
import HomeBanner from "../../components/Template/Home/HomeBanner/HomeBanner";
import HomeOverWrite from "../../components/Template/Home/HomeOverWrite/HomeOverWrite";
import HomeServices from "../../components/Template/Home/HomeServices/HomeServices";
import HomeProducts from "../../components/Template/Home/HomeProducts/HomeProducts";
import AOS from 'aos';
import HomeNews from "../../components/Template/Home/HomeNews/HomeNews";
function Home() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
   <>
   <HomeBanner/>
   <HomeOverWrite/>
   <HomeProducts/>
   <HomeServices/>
   <HomeNews/>
   </>
  );
}

export default Home;
