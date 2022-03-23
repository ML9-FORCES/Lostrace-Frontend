import React from 'react'
import Logo from '../common/Logo'

const TopBar = ({ database, handleDatabase }) => {
    return (
        <div className='flex justify-between items-center border-none shadow-md p-2'>
            <Logo />
            <label className='relative flex items-center justify-center' htmlFor="toggleDatabase">
                <p className='text-teal-700 text-sm underline'>Database: </p>
                <div className='flex space-x-2 items-center justify-center'>
                    <input className='absolute left-[-9999px] top-[-9999px] checked:' onChange={() => { handleDatabase(database === 0 ? 1 : 0) }} type="checkbox" name="toggleDatabase" id="toggleDatabase" />
                    <p className='text-xs text-teal-700'>{database === 0 ? <>Real</> : <>Dummy</>}</p>
                    <span className={`flex cursor-pointer w-12 h-6 rounded-full bg-teal-500 relative duration-75 before:content-[""] before:absolute before:top-0 ${database === 0 ? 'before:left-0' : 'before:left-6'}  before:w-6 before:h-6 before:rounded-full before:duration-75 before:bg-slate-500 before:shadow-xl`}></span>
                </div>
            </label>
        </div>
    )
}

export default TopBar