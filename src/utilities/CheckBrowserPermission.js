import { useState, useEffect } from 'react'

const CheckBrowserPermission = () => {
    const [showPrompt, setPrompt] = useState(true);

    function manageStates(result) {
        if (result.state === 'prompt') {
            setPrompt(true);
        } else if (result.state === 'denied') {
            setPrompt(true);
        }
        else setPrompt(false)
    }

    useEffect(() => {
        navigator.permissions
            .query({ name: 'camera' })
            .then((result) => {
                manageStates(result);
                result.onchange = () => manageStates(result)
            })
    }, [])

    return showPrompt;
}

export default CheckBrowserPermission