import axios from "axios"

const config = {
    method: 'post',
    url: ''
}

export const fetchPerson = () => {
    axios
        .post()
        .then(() => {

        })
        .catch((err) => {
            console.log(err)
        })
}
