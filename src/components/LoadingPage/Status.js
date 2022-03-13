import React from 'react'


function Status({ status }) {
    return (
        <div className="flex justify-center items-center p-2">
            <p className="text-black text-2xl font-bold">{status}</p>
        </div>
    )
}

export default Status
