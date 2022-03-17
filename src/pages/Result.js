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
        <div className='container mx-auto p-2 md:p-10 flex flex-col justify-center h-[100vh]'>
            <div className="shadow-xl rounded-lg  justify-center p-2">
                <h1 className=' text-center text-teal-600 text-bold text-3xl text-underline mb-4'>Person Found</h1>

                <div className="lg:mt-8 mt-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3">

                        <img className='rounded-lg border-2 border-teal-800 w-full max-w-[250px] mx-auto' src={img} />
                        <div className=" lg:col-span-2 lg:grid lg:grid-cols-2">
                            <p className='my-2 text-xl'>Name: Prateek{name}</p>

                            <p className='my-2 text-xl'>Father Name: Somethings{fatherName}</p>
                            <p className='my-2 text-xl'>Gender: {gender}</p>
                            <p className='my-2 text-xl'>Current Age: {currentAge}</p>
                            <p className='my-2 text-xl'>Place of missing : {placeOfMissing}</p>

                        </div>
                    </div>


                    <div className="flex justify-center mt-4 lg:mt-8">

                        <a href={reportLink} className="mx-2 my-1"><button className='font-bold rounded-lg px-6 py-2 border border-white text-white bg-teal-800'>Report</button></a>
                        <a href={profileLink} className="mx-2 my-1"><button className='font-bold rounded-lg px-6 py-2 border border-white text-white bg-teal-800'>Profile</button></a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Result