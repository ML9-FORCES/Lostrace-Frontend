import React, { useEffect, useState } from 'react'

const Modal = ({ error, state }) => {
    const [toggle, setToggle] = useState(1)
    useEffect(() => {
        if (toggle) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            setToggle(0)
        }
    }, [toggle])

    return (
        <div tabIndex={-1} aria-hidden="true" className={`${toggle ? 'visible' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-48 right-0 left-0 z-50 w-full md:inset-y-1/4 md:inset-x-1/4 h-modal md:h-full`}>
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                {/* Modal content */}
                <div className="relative bg-white rounded-lg shadow dark:bg-slate-700">
                    {/* Modal header */}
                    <div className="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                            Error
                        </h3>
                        <button onClick={() => { setToggle(0); delete state.errorMsg; }} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </button>
                    </div>
                    {/* Modal body */}
                    <div className="p-6 space-y-6">
                        <p className="text-base leading-relaxed text-gray-200">
                            {error}
                        </p>
                    </div>
                    {/* Modal footer */}
                    <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        <button onClick={() => { setToggle(0); delete state.errorMsg; }} data-modal-toggle="defaultModal" type="button" className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Okay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal