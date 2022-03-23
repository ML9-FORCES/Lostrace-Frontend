import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className='flex p-3 bg-teal-600 justify-center bottom-0 right-0 left-0'>
            <span className='text-white'>Copyright &copy; {date} </span>
        </div>
    )
}

export default Footer