import React, { useEffect } from 'react'
import PageBgLayout from '../../components/modules/PageBgLayout/PageBgLayout'
import MobileCategory from '../../components/Template/Products/MobileCategory/MobileCategory'
import DesktopCategory from '../../components/Template/Products/DesktopCategory/DesktopCategory'
import { useSelector } from 'react-redux'



function Products() {
  const data = useSelector(state => state)
  useEffect(() => {
    console.log(data)
  }, [])
  const products = [
    { img: './banner7.jpg', title: 'test title' },
    { img: './banner8.jpg', title: 'test title' },
    { img: './banner4.jpg', title: 'test title' },
    { img: './banner5.jpg', title: 'test title' },
    { img: './banner4.jpg', title: 'test title' },
  ]

  return (
    <>
      <PageBgLayout title={'Products'} height={'h-[50vh]'} img={'./banner1.jpg'} />
      <div className='bg-slate-800 py-10'>
        <MobileCategory />
        <DesktopCategory />
        <div className='grid px-16 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4'>
          {
            products.map((product, index) => (
              <div key={index} className='w-60 h-64 my-10 pb-4 overflow-hidden mx-auto rounded-lg  relative'>
                <img src={product.img} className='w-full h-full absolute top-0 left-0' alt="" />
                <div className='text-white w-full left-0 py-2 mt-2 px-3 z-10 absolute productBoxText  bottom-0 capitalize'>
                  {product.title}
                </div>
              </div>
            ))
          }

        </div>
      </div>
      
     
    </>
  )
}

export default Products