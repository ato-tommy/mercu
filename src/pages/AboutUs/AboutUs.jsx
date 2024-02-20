import React from "react";
import PageBgLayout from "../../components/modules/PageBgLayout/PageBgLayout";
import SectionsTitle from "../../components/modules/SectionsTitle/SectionsTitle";
import CounterItems from "../../components/Template/aboutUs/CounterItems/CounterItems";

function AboutUs() {
  return (
    <>
      <PageBgLayout
        height={"h-[45vh]"}
        img={"./aboutus/aboutUs3.jpg"}
        title={"About Us"}
      />
      <div className="w-full bg-slate-800 pt-10">
        <div className="w-3/4 py-5 px-3 mx-auto mb-10 text-white bg-[#83c3de25] rounded-lg">
          <h1 className="text-3xl mb-5">Strong Infrastructure</h1>
          <p>
            Mercurio was established in 2020. Our story stretches back more than
            5 years ago and encompasses several predecessor companies and the
            inspiring work of 30 people. It is a highly recognized and
            successful conglomerate. Founded in February 2020, Mercurio manages
            wide range or chain and resale supplies under management on behalf
            of over international and institutional clients and suppliers across
            the world and specially Asia. The business is a fully private
            company that is led by a solid core of professional managers and
            staffs. We draw on over 5 years of successful management insight
            into providing goods and services for different markets. Over 30
            employees spread across the company activities which are divided in
            different companies and supplies. We trade in a wide variety of
            sectors, including those aligned with Mercurio businesses: Food
            Products and Supplements, Sea Foods and Shrimps, Saffron, Grains,
            Petrochemicals, Raw Materials of different industries, rubbers and
            etc.
          </p>
          <br />
          <p className="text-blue-300">
            Mercurio is not politically affiliated with any group or
            organization.
          </p>
          <br />
          <p className="text-blue-300">
            We maintain a strong degree of independence and believe in
            delivering results. Consequently, we have become a trusted third
            party between successive companies within the countries and partners
            around the world.
          </p>
        </div>
        <div className="abotUsProps py-10">
          <h2 className=" text-center text-4xl font-semibold py-16 text-white">
            About Company
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 w-3/4 mx-auto gap-4 pb-9">
            <p
              className="bg-[#83c3de25] px-4 rounded-lg text-blue-400 py-2"
              data-aos="fade-down"
              data-aos-delay="0"
            >
              Mercurio International Limited (HK) is a company that operates on
              a global and diverse scale in most of the various collections in
              industries and trades.
            </p>
            <p
              className="bg-[#83c3de25] px-4 rounded-lg text-blue-300 py-2"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              We strive to be environmentally and socially responsible. Our
              employees remain as the key to our success and global expansion.{" "}
            </p>
            <p
              className="bg-[#83c3de25] px-4 rounded-lg text-blue-200 py-2"
              data-aos="fade-down"
              data-aos-delay="1000"
            >
              We are building a smarter, safer, and more sustainable world with
              close connection between needs of customer and suppliers. That’s
              the power of connection!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10">
            <CounterItems title={'Years of work experience'} count={100} percent={false} />
            <CounterItems title={'Customer Satisfaction'} count={94} percent={true} />
            <CounterItems title={'Project done'} count={28} percent={false} />
            <CounterItems title={'Staff Members'} count={120} percent={false} />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
