import axios from "axios";

export const updateState = (url) => {
    const config = {
        method: 'get',
        url: url
    }
    try {
        const data = axios(config)
        return new Promise((res, rej) => {
            res(data)
        })
    }
    catch (err) {
        console.log(err)
    }
}