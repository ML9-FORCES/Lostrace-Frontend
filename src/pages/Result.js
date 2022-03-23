import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Result = () => {
    const { state } = useLocation();
    const { res } = state;

    const [result, setResult] = useState({
        name: '',
        fatherName: '',
        currentAge: '',
        gender: '',
        img: '',
        placeOfMissing: '',
        reportLink: '',
        profileLink: '',
    })

    const setData = () => {
        setResult((prevState) => ({
            ...prevState,
            name: res.Name,
            fatherName: res.Father_Name,
            currentAge: res.Current_Age,
            gender: res.Gender,
            img: res.Img,
            placeOfMissing: res.Place_of_Missing,
            reportLink: res.Report_link,
            profileLink: res.Profile_link
        }))
    }
    useEffect(() => {
        setData();
    }, [])

    const { name, fatherName, currentAge, gender, img, placeOfMissing, reportLink, profileLink } = result;
    return (
        <div className='container mx-auto p-2 md:p-10 flex flex-col justify-center h-[100vh]'>
            <Helmet>
                <title>Loading</title>
            </Helmet>
            <div className="shadow-xl rounded-lg  justify-center p-2">
                <h1 className=' text-center text-teal-600 text-bold text-3xl text-underline mb-4'>Person Found</h1>
                <div className="lg:mt-8 mt-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        {
                            img ?
                                <img className='rounded-lg border-2 border-teal-800 w-full max-w-[250px] mx-auto' src={img} alt="person" />
                                : ''
                        }
                        <div className=" lg:col-span-2 lg:grid lg:grid-cols-2">
                            <p className='my-2 text-xl'><span className='font-semibold'>Name:</span> {name}</p>
                            <p className='my-2 text-xl'><span className='font-semibold'>Father Name:</span> {fatherName}</p>
                            <p className='my-2 text-xl'><span className='font-semibold'>Gender:</span> {gender}</p>
                            <p className='my-2 text-xl'><span className='font-semibold'>Current Age:</span> {currentAge}</p>
                            <p className='my-2 text-xl'><span className='font-semibold'>Place of missing:</span> {placeOfMissing}</p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4 lg:mt-8">
                        <a href={reportLink} className="mx-2 my-1"><button className='font-bold rounded-lg px-6 py-2 border border-white text-white bg-teal-800'>Report</button></a>
                        <a href={profileLink} className="mx-2 my-1"><button className='font-bold rounded-lg px-6 py-2 border border-white text-white bg-teal-800'>Profile</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result