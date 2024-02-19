import React from 'react'

function DesktopCategory() {
  return (
    <>
    <div className='hidden lg:grid grid-cols-4 gap-5 px-16'>
          <div className='bg-slate-400 hover:bg-slate-600 t07 rounded-lg text-center py-2 cp'>All</div>
          <div className='bg-slate-400 hover:bg-slate-600 t07 rounded-lg text-center py-2 cp'>Oil</div>
          <div className='bg-slate-400 hover:bg-slate-600 t07 rounded-lg text-center py-2 cp'>Gas</div>
          <div className='bg-slate-400 hover:bg-slate-600 t07 rounded-lg text-center py-2 cp'>All</div>
        </div>
    </>
  )
}

export default DesktopCategory