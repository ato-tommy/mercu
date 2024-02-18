import React from 'react'

function PageBgLayout({title,height,img}) {
  return (
       <div className={`w-full h-[${height}vh] relative`}>
       <img src={img} className='w-full h-full' alt="" />
       <div className='w-full h-full absolute top-0 left-0 text-white flex justify-center items-center text-6xl font-semibold tracking-wider pageBgLayout'>
         {title}
       </div>
     </div>
  )
}

export default PageBgLayout