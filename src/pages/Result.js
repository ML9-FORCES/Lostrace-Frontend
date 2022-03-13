import React, { useEffect, useState } from 'react'
import { fetchPerson } from '../services/fetchPerson'
import img from "../images/temp.jpg"

const Result = () => {
    const [name, setName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [currentAge, setCurrentAge] = useState('');
    const [gender, setGender] = useState('');
    // const [img, setImg] = useState('');
    const [placeOfMissing, setPlaceOfMissing] = useState('');
    const [reportLink, setReportLink] = useState('');
    const [profileLink, setProfileLink] = useState('')



    useEffect(() => {
        fetchPerson()
            .then((res) => {
                console.log(res.data)
                setCurrentAge(res.data.Current_Age);
                setName(res.data.Name)
                setFatherName(res.data.Father_Name)
                setGender(res.data.Gender)
                // setImg(res.data.Img)
                setPlaceOfMissing(res.data.Place_of_Missing)
                setReportLink(res.data.Report_link)
                setProfileLink(res.data.Profile_link)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <p>Name: {name}</p>
            <p>Father Name: {fatherName}</p>
            <p>Gender: {gender}</p>
            <p>Current Age: {currentAge}</p>
            <img src={img} />
            <p>Place of missing : {placeOfMissing}</p>
            <a href={reportLink}><button className='border border-white text-white bg-teal-800'>Report</button></a>
            <a href={profileLink}><button className='border border-white text-white bg-teal-800'>Profile</button></a>
        </div>
    )
}

export default Result