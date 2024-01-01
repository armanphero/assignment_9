import React, { useContext, useState } from 'react';
import { AllJobsContext } from '../App';
import FeaturedJob from './FeaturedJob';

const FeaturedJobs = () => {
    const allJobs = useContext(AllJobsContext);
    const [seeAllJobs, setSeeAllJobs] = useState(false);
    // console.log(allJobs);
    return (
        <section className='my-container my-10 py-5'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold mb-4'>Featured Jobs</h1>
                <p className='text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
                {
                    !seeAllJobs &&
                    allJobs.slice(0, 4).map(job => <FeaturedJob job={job} key={job.id}></FeaturedJob>)
                }
                {
                    seeAllJobs &&
                    allJobs.map(job => <FeaturedJob job={job} key={job.id}></FeaturedJob>)
                }
            </div>
            {
                !seeAllJobs &&
                <div className='text-center mt-5'>
                    <button className='btn-style' onClick={() => setSeeAllJobs(true)}>See All Jobs</button>
                </div>
            }
            {
                seeAllJobs &&
                <div className='text-center mt-5'>
                    <button className='btn-style' onClick={() => setSeeAllJobs(false)}>See less Jobs</button>
                </div>
            }
        </section>
    );
};

export default FeaturedJobs;