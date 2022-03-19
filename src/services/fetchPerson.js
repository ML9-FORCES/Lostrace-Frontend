import axios from "axios"

export const fetchPerson = (img) => {
    const formData = new FormData();
    formData.append("img", img);
    formData.append("flag", '1');
    const config = {
        method: 'post',
        url: 'https://lostrace-data-api.herokuapp.com/result',
        data: formData
    }

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
