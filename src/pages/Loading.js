import React, { useEffect, useState } from 'react'

import { useLocation, useNavigate } from 'react-router-dom'

import sendingImage from "../images/vectors/loadingpage/sendingImage.png"
import reterving from "../images/vectors/loadingpage/reteriving.png"
import faceRecogination from "../images/vectors/loadingpage/faceRecogination.png"
import ProgressBar from '../components/LoadingPage/ProgressBar'
import Status from '../components/LoadingPage/Status'

import { fetchPerson } from '../services/fetchPerson'

const Loading = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { pic } = state;

    const [value, updateValue] = useState(0)
    const images = [sendingImage, reterving, faceRecogination]

    const steps = [
        'Model Loading',
        'Retrieving images from Data API',
        'AI Model identifying the match person',
    ]

    const [step, setStep] = useState(steps[0])
    const [image, setImage] = useState(images[0])

    useEffect(() => {
        fetchPerson(pic)
            .then((result) => {
                navigate('/result', { state: { res: result.data } })
            })
            .catch((err) => {
                console.log(err)
            })
    }, [pic, navigate])

    useEffect(() => {
        const interval = setInterval(() => {
            updateValue(oldValue => {
                const newValue = oldValue + 10;
                if (newValue === 100) {
                    clearInterval(interval)
                }
                return newValue
            })
        }, 900)

        let i = 0;
        const imageInterval = setInterval(() => {
            i = i + 1;
            if (steps.length === i) {
                clearInterval(imageInterval)
                return 1
            }
            setStep(steps[i], setImage(images[i]))
        }, 3000)
    }, []);

    return (
        <>
            {
                value === 100 ?
                    ''
                    :
                    <div className="flex justify-center items-center flex-col bg-white w-[100%] h-[100vh]">
                        <div className="flex flex-col justify-center items-center m-2 w-[90%] max-w-xl" >
                            <img className="w-40 animate-scale" src={image} alt="icon" />
                            <Status status={step} />
                            <ProgressBar bgcolor={"#f3f2c9"} value={value} />
                        </div>
                    </div>
            }
        </>
    )
}

export default Loading