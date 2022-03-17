import axios from "axios"

const config = {
    method: 'get',
    url: 'http://lostrace-data-api.herokuapp.com/result'
}

export const fetchPerson = () => {
    try {
        const data = axios(config);
        return new Promise((res, rej) => {
            res(data)
        })
    }
    catch (err) {
        console.log(err)
    }
}