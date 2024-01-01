import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'

const SingleAppliedJobsCard = ({ job }) => {
    // console.log(job);
    const { companyLogo, companyName, jobTitle, location, salary, id, remoteOrOnsite, fulltimeOrPartTime } = job;
    return (
        <div className='shadow-sm p-5 border border-gray-300 rounded-sm flex flex-col md:flex-row gap-5'>
            <div className='bg-[#f4f4f4] flex items-center justify-center w-[150px] py-1 md:py-0 rounded'>
                <img src={companyLogo} alt="" className='w-[80%]' />
            </div>
            <div className='flex flex-col md:flex-row md:items-center w-[100%]'>
                <div>
                    <h3 className='font-bold'>{jobTitle}</h3>
                    <p className='text-gray-400'>{companyName}</p>
                    <div className='flex gap-3 my-2'>
                        <p className='border border-blue-500 text-blue-500 px-2 rounded-sm'>{remoteOrOnsite}</p>
                        <p className='border border-blue-500 text-blue-500 px-2 rounded-sm'>{fulltimeOrPartTime}</p>
                    </div>
                    <div className='lg:flex gap-5 text-gray-500'>
                        <p><FontAwesomeIcon icon={faLocationDot} className='mr-1' />{location}</p>
                        <p><FontAwesomeIcon icon={faHandHoldingDollar} className='mr-1 mt-3 md:mt-0' />{salary}</p>
                    </div>
                </div>
                <div className='md:ml-auto mt-5 md:mt-0'>
                    <Link
                        to={`/job/${id}`}
                        className='job-btn-style'>
                        View Details
                    </Link>
                </div>
            </div>
            {/* <div className='md:ml-auto flex items-center'>
                
            </div> */}
        </div>
    );
};

export default SingleAppliedJobsCard;