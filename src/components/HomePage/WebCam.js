import React, { useState, useRef, useCallback, useEffect } from 'react'
import Webcam from 'react-webcam';


const WebCam = () => {
    const webcamRef = useRef(null);
    const [image, setImage] = useState('');
    const [camera, setCamera] = useState('back');

    const videoConstraints = {
        width: 220,
        height: 200,
        facingMode: camera === 'back' ? { exact: 'environment' } : 'user'
    };

    const capture = useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc)
        },
        [webcamRef]
    );


    return (
        <div>
            <Webcam
                audio={false}
                height={200}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={220}
                videoConstraints={videoConstraints}
            />
            {
                image ?
                    <img src={image} alt="capturedimg" /> : ''
            }
            <button onClick={() => { setCamera(camera === 'back' ? 'front' : 'back') }}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg></button>
            <button onClick={(e) => { e.preventDefault(); capture(); }}>Capture</button>
        </div>
    )
}

export default WebCam