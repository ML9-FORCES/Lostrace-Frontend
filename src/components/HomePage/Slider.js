import React from 'react'

const Slider = ({ toggled }) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <p className='text-xs p-1 text-teal-700'>{toggled === "camera" ? <>Camera</> : <>File</>}</p>
            <span className={`flex cursor-pointer w-12 h-6 rounded-full bg-teal-500 relative duration-75 before:content-[""] before:absolute before:top-0 ${toggled === "camera" ? 'before:left-0' : 'before:left-6'}  before:w-6 before:h-6 before:rounded-full before:duration-75 before:bg-slate-500 before:shadow-xl`}></span>
        </div>
    )
}

export default Slider