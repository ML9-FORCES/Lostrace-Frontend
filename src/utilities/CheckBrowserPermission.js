import { useState, useEffect } from 'react'

const CheckBrowserPermission = () => {
    const [showPrompt, setPrompt] = useState(true);

    function manageStates(state) {
        if (state === 'prompt') {
            setPrompt(false);
        } else if (state === 'denied') {
            setPrompt(true);
        }
        else setPrompt(false)
    }

    useEffect(() => {
        navigator.permissions
            .query({ name: 'camera' })
            .then((result) => {
                manageStates(result.state);
                // result.onchange = () => manageStates(result)
            })
    }, [])

    return showPrompt;
}

export default CheckBrowserPermission