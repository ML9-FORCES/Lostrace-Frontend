import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useLocation, useNavigate } from 'react-router-dom'

import sendingImage from "../images/vectors/loadingpage/sendingImage.png"
import reterving from "../images/vectors/loadingpage/reteriving.png"
import faceRecogination from "../images/vectors/loadingpage/faceRecogination.png"
import flexSearch from "../images/vectors/loadingpage/flexSearch.png"

import ProgressBar from '../components/LoadingPage/ProgressBar'
import Status from '../components/LoadingPage/Status'

import { search } from '../services/search'
import { updateState } from '../services/updateState'

const states = {
    0: "Fetching New Data",
    1: "Encoding New Data",
    2: "Updating Database State",
    3: "Flex Searching Image",
}

const phases = {
    200: "Success",
    201: "Process",
    404: "Failure",
}
const images = [sendingImage, reterving, faceRecogination, flexSearch]


const Loading = () => {
    const navigate = useNavigate();
    let { state } = useLocation();

    const [value, setValue] = useState(0)
    const [image, setImage] = useState(0)
    const [loadingState, setLoadingState] = useState(0)

    const checkPhaseAndInfo = (Phase, Info) => {
        // success
        if (Phase === phases[200]) {
            navigate('/result', { state: { res: Info }, replace: true })
        }

        //failure
        else if (Phase === phases[404]) {
            navigate('/', { state: { errorMsg: Info }, replace: true })
        }

        //processing
        else {
            if (Info === states[1]) {
                setLoadingState(1)
            }
            else if (Info === states[2]) {
                setLoadingState(2)
            }
            else {
                setLoadingState(3)
            }
        }
    }

    useEffect(() => {
        if (!state) {
            navigate('/', { replace: true })
        }

        else {
            let interval;
            search(state.pic, state.database)
                .then((res) => {
                    const taskLink = res.data.Task
                    console.log(taskLink)
                    return taskLink;
                })
                .then((taskLink) => {
                    interval = setInterval(() => {
                        updateState(taskLink)
                            .then((result) => {
                                const Phase = result.data.Phase;
                                const Info = result.data.Info;
                                checkPhaseAndInfo(Phase, Info)
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    }, 1000)
                })
            return () => {
                clearInterval(interval);
            }
        }
    }, [state, navigate])

    useEffect(() => {
        setImage((prevState) => {
            return prevState + 1;
        })
    }, [loadingState])

    useEffect(() => {
        setValue((prevState) => {
            return prevState + 25;
        })
    }, [image])


    return (
        <>
            <Helmet>
                <title>Loading</title>
            </Helmet>
            <div className="flex justify-center items-center flex-col bg-white w-[100%] h-[100vh]">
                <div className="flex flex-col justify-center items-center m-2 w-[90%] max-w-xl" >
                    <img className="w-40 animate-scale" src={images[image]} alt="icon" />
                    <Status status={states[loadingState]} />
                    <ProgressBar bgcolor={"#fff5be"} value={value <= 100 ? value : 100} />
                </div>
            </div>

        </>
    )
}

export default Loading