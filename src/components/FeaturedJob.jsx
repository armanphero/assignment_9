import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'

const FeaturedJob = ({ job }) => {
    // console.log(job);
    const { companyLogo, companyName, jobTitle, location, salary, id, remoteOrOnsite, fulltimeOrPartTime } = job;
    return (
        <div className='shadow-sm p-5 border border-gray-300 rounded-sm'>
            <img src={companyLogo} alt="" className='h-[40px]' />
            <h3 className='font-bold mt-2'>{jobTitle}</h3>
            <p className='text-gray-400'>{companyName}</p>
            <div className='flex gap-3 my-2'>
                <p className='border border-blue-500 text-blue-500 px-2 rounded-sm'>{remoteOrOnsite}</p>
                <p className='border border-blue-500 text-blue-500 px-2 rounded-sm'>{fulltimeOrPartTime}</p>
            </div>
            <div className='flex gap-5 text-gray-500 mb-4'>
                <p><FontAwesomeIcon icon={faLocationDot} className='mr-1' />{location}</p>
                <p><FontAwesomeIcon icon={faHandHoldingDollar} className='mr-1' />{salary}</p>
            </div>
            <Link 
            to={`/job/${id}`}
            className='job-btn-style'>
                View Details
            </Link>
        </div>
    );
};

export default FeaturedJob;