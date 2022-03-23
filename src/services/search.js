import axios from "axios"

export const search = (img, database) => {
    const formData = new FormData();
    formData.append("Image", img);
    formData.append("Mode", database);
    const config = {
        method: 'post',
        url: 'https://lostrace-data-api.herokuapp.com/search',
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
