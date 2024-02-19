import React, { useState } from 'react'

function MobileCategory() {
       const [isShowMobileCategory,setIsShowMobileCategory] = useState(false)
  return (
    <>
    <div className='cp w-1/2 bg-white rounded-md text-center px-2 py-2 font-semibold mx-auto relative lg:hidden' onClick={()=>{
          setIsShowMobileCategory(prev=>!prev)
        }}>
          Choose Type Of Product
          <div className={`absolute top-[90%] bg-slate-500 w-full ${isShowMobileCategory ? 'h-auto overflow-hidden':'h-2 overflow-hidden'}  left-0 t07 rounded-b-lg z-50`}>
            <div className='py-2 hover:text-white cp'>All</div>
            <div className='py-2 hover:text-white cp'>Oil</div>
            <div className='py-2 hover:text-white cp'>Gas</div>
          </div>
        </div>
    </>
  )
}

export default MobileCategory