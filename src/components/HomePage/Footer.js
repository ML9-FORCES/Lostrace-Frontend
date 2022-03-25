import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className='flex p-3 bg-teal-600 justify-center self-end w-full'>
            <span className='text-white'>Copyright &copy; {date} </span>
        </div>
    )
}

export default Footer