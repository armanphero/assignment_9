import React, { useContext } from 'react';
import { JobCategoryContext } from '../App';
import JobCategory from './JobCategory';

const JobCategories = () => {
    const jobCategories = useContext(JobCategoryContext);
    // console.log(jobCategories);
    return (
        <section className='my-container my-10 py-5'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold mb-4'>Job Category List</h1>
                <p className='text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10'>
                {
                    jobCategories.map(job => <JobCategory key={job.id} job={job}></JobCategory>)
                }
            </div>
        </section>
    );
};

export default JobCategories;