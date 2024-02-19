import React from "react";
import PageBgLayout from "./../../components/modules/PageBgLayout/PageBgLayout";
import Map from './../../components/modules/Map/Map'
function ContactUS() {
  return (
    <>
      <PageBgLayout
        title={"Contact Us"}
        height={"h-[50vh]"}
        img={"./contactUs.jpg"}
      />
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 my-20"> */}
      <div className="lg:flex justify-center items-center w-full  my-20">
        <div className="w-full px-4 pb-7 lg:pb-0 lg:border-0 lg:px-0 mx-auto border-b-2 border-gray-700  lg:w-[40%]  flex justify-center items-start lg:ps-[5%]  gap-7 flex-col">
          <div className="contact-title text-2xl lg:text-5xl font-semibold mb-10">
            Contacts
          </div>

          <div className="flex justify-center items-center contactUs-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 me-1 text-gray-600"
            >
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>

            <div className="text-2xl font-semibold text-nowrap">Address :</div>
            <div className="text-xl mt-1 ms-3 text-gray-500">Gholhak</div>
          </div>

          <div className="flex justify-center items-center contactUs-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 me-1 text-gray-600"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>

            <div className="text-2xl font-semibold text-nowrap">Phone:</div>
            <a
              href="tel:+989195805686"
              className="text-xl mt-1 ms-3 text-blue-500 font-semibold"
            >
              09195805686
            </a>
          </div>

          <div className="flex justify-center items-center contactUs-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 me-1 text-gray-600"
            >
              <path
                fillRule="evenodd"
                d="M6.912 3a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H6.912Zm13.823 9.75-2.213-7.191A1.5 1.5 0 0 0 17.088 4.5H6.912a1.5 1.5 0 0 0-1.434 1.059L3.265 12.75H6.11a3 3 0 0 1 2.684 1.658l.256.513a1.5 1.5 0 0 0 1.342.829h3.218a1.5 1.5 0 0 0 1.342-.83l.256-.512a3 3 0 0 1 2.684-1.658h2.844Z"
                clipRule="evenodd"
              />
            </svg>

            <div className="text-2xl font-semibold text-nowrap">Fax:</div>
            <a
              href="fax:+989195805686"
              className="text-xl mt-1 ms-3 text-blue-500 font-semibold"
            >
              09195805686
            </a>
          </div>

          <div className="flex justify-center items-center contactUs-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 me-1 text-gray-600"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>

            <div className="text-2xl font-semibold text-nowrap">E-mail:</div>
            <a
              href="mailto:sajjadmoeini97@gmail.com"
              className="text-xl mt-1 ms-3 text-blue-500 font-semibold"
            >
              sajjadmoeini97@gmail.com
            </a>
          </div>
        </div>

        <div className="w-11/12 mx-auto mt-10 lg:mt-0 lg:w-[45%]">
          <div className="text-xl lg:text-5xl font-semibold capitalize">
            Send us a message
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
            <div className="">
              <div className="text-xl font-semibold  mb-2">Name : </div>
              <input
                type="text"
                placeholder="Name"
                className="w-3/4 border border-t-slate-500 rounded-lg px-1 py-2 outline-none focus:border-blue-400 focus:border-2 focus:bg-[#0963ea19]"
              />
            </div>
            <div className="">
              <div className="text-xl font-semibold  mb-2">Email : </div>
              <input
                type="email"
                placeholder="Email"
                className="w-3/4 border border-t-slate-500 rounded-lg px-1 py-2 outline-none focus:border-blue-400 focus:border-2 focus:bg-[#0963ea19]"
              />
            </div>
          </div>
          <div className="text-xl font-semibold mt-5 mb-2">Message :</div>
          <div className="w-[88%] ">
            <textarea
              className="w-full  border border-t-slate-500 rounded-lg px-1 py-2 outline-none focus:border-blue-400 focus:border-2 focus:bg-[#0963ea19]"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex justify-end items-center pe-[12%] mt-10">
            <button className="ms-auto bg-blue-500 hover:bg-blue-700 t07 text-white px-4 py-2 rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="w-[85%] h-[40vh]  mb-[10vh] mx-auto">
        <Map height='h-[40vh]' />
      </div>
    </>
  );
}

export default ContactUS;
