import { useState, useEffect } from 'react'

const CheckBrowserPermission = () => {
    const [showPrompt, setPrompt] = useState(true);
    useEffect(() => {

        navigator.mediaDevices.getUserMedia({
            audio: true,
            video: { width: 1280, height: 720 }
        },
            navigator.permissions
                .query({ name: 'camera' })
                .then((result) => {
                    if (result.state === 'prompt') {
                        setPrompt(true);
                    } else if (result.state === 'denied') {
                        setPrompt(true);
                    }
                    else setPrompt(false)
                })
        )
            .then((res) => {
                console.log(res)
            })
    }, [])

    return showPrompt;
}

export default CheckBrowserPermission