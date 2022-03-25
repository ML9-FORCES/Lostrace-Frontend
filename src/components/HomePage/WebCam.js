import React, { useState, useRef, useCallback, useEffect } from "react";
import Webcam from "react-webcam";

const WebCam = ({ handleCapture }) => {
  const FACING_MODE_USER = "user";
  const FACING_MODE_ENVIRONMENT = "environment";

  const webcamRef = useRef(null);
  const [image, setImage] = useState("");
  const [facingMode, setFacingMode] = useState(FACING_MODE_ENVIRONMENT);
  const [showMessage, setMessage] = useState(false)

  const switchCamera = useCallback(() => {
    setFacingMode(
      prevState =>
        prevState === FACING_MODE_USER
          ? FACING_MODE_ENVIRONMENT
          : FACING_MODE_USER
    );
  }, []);

  const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: facingMode,
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  useEffect(() => {
    if (!webcamRef) {
      setMessage(true)
    }
    else {
      setMessage(false)
    }
  }, [webcamRef])

  useEffect(() => {
    if (image) {
      handleCapture(image)
    }
  }, [image, handleCapture])

  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col space-y-3 justify-center items-center p-3">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-3 space-x-0 md:space-x-3 md:space-y-0">
            <Webcam
              audio={false}
              height={200}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={220}
              videoConstraints={videoConstraints}
            />
            {image ? <img src={image} alt="capturedimg" /> : ""}
          </div>
          {/* 255,149,42 shadow-[0px_0px_4px_2px_rgb(83 184 187)] */}
          {
            showMessage ?
              <p className="p-3 text-orange-600 text-xs shadow-[0_0_0px_3px_rgba(255,149,42,0.3)] font-semibold rounded border-[1px] border-customorange">
                No camera found, either switch the camera or check your camera settings
              </p>
              :
              ''
          }
          <button
            className="flex space-x-2 border-[1px] rounded-md text-xs p-1 duration-75 hover:shadow-md"
            onClick={switchCamera}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span className="font-semibold">Switch Camera</span>
          </button>
        </div>
        <button
          className="rounded-lg p-1 bg-teal-600 text-white duration-75 hover:bg-teal-500"
          onClick={(e) => {
            e.preventDefault();
            capture();
          }}
        >
          Capture
        </button>
      </div>
    </>
  );
};

export default WebCam;
