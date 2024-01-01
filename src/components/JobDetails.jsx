import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AllJobsContext, AppliedJobsContext } from '../App';
import Header2 from './Header2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingDollar, faMoneyCheck, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { saveIdInDb } from '../utilities/fakeDb';

const JobDetails = () => {
    const _id = useLoaderData();
    const [appliedjobs, setAppliedjobs] = useContext(AppliedJobsContext);
    const allJobs = useContext(AllJobsContext);
    const jobData = allJobs.find(job => job.id === _id);
    // console.log(jobData);
    const { jobDescription, jobResponsibility, educationalRequirements, experiences, salary, jobTitle, contactInformation, location, companyName, id } = jobData;
    const { phone, email } = contactInformation;
    const handleApplyNow = (id) => {
        saveIdInDb(id);
        const existedJob = appliedjobs.find(job => job.id === id);
        if(!existedJob){
            setAppliedjobs([...appliedjobs, jobData])
        }
    }
    return (
        <>
            <Header2>Job Details</Header2>
            <section className='my-container my-10 py-5'>
                <div className='grid lg:grid-cols-4 gap-5'>
                    <div className='lg:col-span-3 text-gray-500'>
                        <p className=''><span className='font-bold'>Job Description: </span>{jobDescription}</p>
                        <p className='my-6'><span className='font-bold'>Job Responsibility: </span>{jobResponsibility}</p>
                        <h5 className='font-bold my-6'>Educational Requirements:</h5>
                        <p>{educationalRequirements}</p>
                        <h5 className='font-bold my-6'>Experiences:</h5>
                        <p className='my-6'>{experiences}</p>
                        <p className=''><span className='font-bold'>Company Name : </span>{companyName}</p>
                    </div>
                    <div>
                        <div className='p-4 bg-[#f4f2ff] flex flex-col justify-center gap-2 text-gray-500 rounded-md'>
                            <h2 className='font-bold text-gray-800'>Job Details</h2>
                            <hr className='my-2' />
                            <p><FontAwesomeIcon icon={faHandHoldingDollar} className='mr-1 font-bold' /><span className='font-bold'>Salary : </span>{salary.replace('(Per Month)', '')}</p>
                            <p><FontAwesomeIcon icon={faMoneyCheck} className='mr-1 font-bold' /><span className='font-bold'>Job Title : </span> {jobTitle}</p>
                            <h2 className='font-bold text-gray-800 mt-2'>Contact Information</h2>
                            <hr className='my-2' />
                            <p><FontAwesomeIcon icon={faPhone} className='mr-1 font-bold' /><span className='font-bold'>Phone : </span> {phone}</p>
                            <p><FontAwesomeIcon icon={faEnvelope} className='mr-1 font-bold' /><span className='font-bold'>Email : </span> {email}</p>
                            <p><FontAwesomeIcon icon={faLocationDot} className='mr-1 font-bold' /><span className='font-bold'>Address : </span> {location}</p>

                        </div>
                        <button className='btn-style w-[100%] mt-5' onClick={() => handleApplyNow(id)}>Apply Now</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default JobDetails;