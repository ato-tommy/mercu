import React from "react";

function HomeOverWrite() {
  return (
    <>
     
      <section className="bg-slate-900 w-full ">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto pt-32 w-3/4"  data-aos="zoom-in">
        <div className="flex flex-col gap-10">
          <h2 className="text-white text-4xl md:text-7xl">Overview</h2>
          <p className="w-full md:w-3/4 text-white text-lg md:text-xl">
            The Maxwell Oil & Gas company is a renown leader, proof-tested at
            working in extremely difficult environments, both onshore and
            offshore. We have major operations set up in some of the world’s
            most important oil and gas regions. Our upstream business combines
            technological and environmentally-friendly innovations and the
            effective use of technology to maximize mature fields, discover new
            resources and meet the world’s growing demand for energy.
          </p>
        </div>

        <div className="!mx-auto w-[300px] h-[300x] md:w-[400px]  lg:w-[500px] md:h-[400px] lg:h-[500px] !overflow-hidden rounded-lg flex justify-center items-center">
         <img src="./pic1.jpg" alt="" className="rounded-lg my-7 md:my-0 hover:scale-125 t07 cp shadow-md shadow-slate-600" />
        </div>
      </div>
      </section>
      
    </>
  );
}

export default HomeOverWrite;
