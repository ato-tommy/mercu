import React from 'react'
import PageBgLayout from '../../components/modules/PageBgLayout/PageBgLayout'
import HomeServices from '../../components/Template/Home/HomeServices/HomeServices'

function Services() {

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
     <PageBgLayout height={'h-[45vh]'} img={'./service/serviceDesktopBg.jfif'} title={'Services'}  />
     <div className='bg-slate-800 w-full'>
     <HomeServices  allServices={services} showBg={false} showTitle={false}   />
     </div>
    </>
  )
}

export default Services