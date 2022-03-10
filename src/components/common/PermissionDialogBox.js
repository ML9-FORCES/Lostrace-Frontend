import React from 'react'
import CheckBrowserPermission from '../utilities/CheckBrowserPermission'

const PermissionDialogBox = () => {
    const showPrompt = CheckBrowserPermission();

    return (
        <>
            {
                showPrompt ?
                    <div className='flex flex-col p-6 shadow-lg'>
                        <span className='font-semibold text-xl'>Please allow camera access</span>
                    </div>
                    : ''
            }
        </>
    )
}

export default PermissionDialogBox