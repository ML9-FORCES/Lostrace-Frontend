import React, { useEffect, useState } from 'react'
import { fetchPerson } from '../services/fetchPerson'

const Result = () => {
    const [currentAge, setCurrentAge] = useState('');

    useEffect(() => {
        fetchPerson()
            .then((res) => {
                setCurrentAge(res.data.Current_Age);
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <p>Current Age: {currentAge}</p>
        </div>
    )
}

export default Result