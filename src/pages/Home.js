import React from 'react'
import PermissionDialogBox from '../components/common/PermissionDialogBox'
import Footer from '../components/HomePage/Footer'
import TopBar from '../components/HomePage/TopBar'
import WebCam from '../components/HomePage/WebCam'
import CheckBrowserPermission from '../components/utilities/CheckBrowserPermission'

const Home = () => {
    const showPrompt = CheckBrowserPermission();
    return (
        <div className='flex flex-col w-full h-screen'>
            <TopBar />
            <div className='flex justify-center'>
                {
                    showPrompt ?
                        <PermissionDialogBox /> :
                        <WebCam />
                }
            </div>
            <Footer />
        </div>
    )
}

export default Home