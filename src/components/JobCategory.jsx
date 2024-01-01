import React from 'react';

const JobCategory = ({job}) => {
    // console.log(job);
    const {img, jobCategory, availableJobs} = job;
    return (
        <div className='bg-[#faf8ff] p-5 rounded-md'>
            <img src={img} alt="" />
            <h4 className='font-bold mt-3'>{jobCategory}</h4>
            <p className='text-gray-400'>{availableJobs}</p>
        </div>
    );
};

export default JobCategory;