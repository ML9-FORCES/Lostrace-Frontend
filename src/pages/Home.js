import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

import PermissionDialogBox from '../components/common/PermissionDialogBox'
import Footer from '../components/HomePage/Footer'
import Slider from '../components/HomePage/Slider'
import TopBar from '../components/HomePage/TopBar'
import WebCam from '../components/HomePage/WebCam'
import CheckBrowserPermission from '../utilities/CheckBrowserPermission'
import { dataURItoBlob } from '../utilities/dataURItoBlob'

const Home = () => {
    const navigate = useNavigate();
    const showPrompt = CheckBrowserPermission();
    const [toggled, setToggle] = useState("camera");
    const [selectedImageFile, setImageFile] = useState(null);

    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return
        }
        navigate('/loading', { state: { pic: selectedImageFile } })
    }, [selectedImageFile, navigate])

    const handleCapture = (img) => {
        const resultImg = dataURItoBlob(img);
        setImageFile(resultImg);
    }
    const handleImageInput = (e) => {
        const file = e.target.files[0];
        setImageFile(file)
    }
    return (
        <div className='flex flex-col w-full h-screen'>
            <Helmet>
                <title>Lostrace | Home</title>
            </Helmet>
            <TopBar />
            <div className='flex flex-col items-center h-screen pt-24 space-y-12'>
                <label className='relative' htmlFor="toggle">
                    <input className='absolute left-[-9999px] top-[-9999px] checked:' onChange={() => { setToggle(toggled === "camera" ? "upload" : "camera") }} type="checkbox" name="toggle" id="toggle" />
                    <Slider toggled={toggled} />
                </label>
                {
                    toggled === "camera" ?
                        <div className='flex justify-center'>
                            {
                                showPrompt ?
                                    <PermissionDialogBox /> :
                                    <WebCam handleCapture={handleCapture} />
                            }
                        </div>
                        :
                        <label className='flex flex-col items-center justify-center border-2 space-y-4 shadow-sm rounded p-6' htmlFor="image">
                            <input onChange={handleImageInput} className='hidden' type="file" accept="image/*" name="image" id="image" />
                            <p className='text-sm'>Select image from the device</p>
                            <span className='p-2 bg-teal-500 cursor-pointer rounded text-xs'>Upload Image</span>
                        </label>
                }
            </div>
            <Footer />
        </div>
    )
}

export default Home