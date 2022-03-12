import React, { useState, useRef, useCallback, useEffect } from "react";
import Webcam from "react-webcam";

const WebCam = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState("");
  const [camera, setCamera] = useState("back");

  const videoConstraints = {
    width: 220,
    height: 200,
    facingMode: camera === "back" ? { exact: "environment" } : "user",
  };

  useEffect(() => {
    const initialiseCamera = async () => await
      navigator
        .mediaDevices
        .getUserMedia({ audio: false, video: true });

    initialiseCamera().then((res) => {
      console.log(res)
    })
    // navigator.permissions.query({ name: 'camera' })
    //   .then((permissionObj) => {
    //     console.log(permissionObj.state);
    //   })
    //   .catch((error) => {
    //     console.log('Got error :', error);
    //   })

    // navigator.getMedia = (navigator.getUserMedia || // use the proper vendor prefix
    //   navigator.webkitGetUserMedia ||
    //   navigator.mozGetUserMedia ||
    //   navigator.msGetUserMedia);

    // navigator.getMedia({ video: true }, function (res) {
    //   // webcam is available
    //   console.log('webcam is available', res)
    // }, function () {
    //   // webcam is not available
    //   console.log('webcam is unavailable')
    // });
  }, [])

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);


  // console.log(webcamRef);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col space-y-3 justify-center items-center p-3">
          <div className="flex space-x-3">
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
            webcamRef.current ? ''
              :
              <p className="p-3 text-orange-600 text-xs shadow-[0_0_0px_3px_rgba(255,149,42,0.3)] font-semibold rounded border-[1px] border-customorange">
                No camera found, either switch the camera or check your camera settings
              </p>
          }
          <button
            className="flex space-x-2 border-[1px] rounded-md text-xs p-1 duration-75 hover:shadow-md"
            onClick={() => {
              setCamera(camera === "back" ? "front" : "back");
            }}
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
