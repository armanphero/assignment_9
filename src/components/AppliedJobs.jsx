import React, { createContext, useContext, useState } from 'react';
import Header2 from './Header2';
import { AppliedJobsContext } from '../App';
import SingleAppliedJobsCard from './SingleAppliedJobsCard';
import MyDropdown from './MyDropdown';

export const FilteredJobsContext = createContext([]);
const AppliedJobs = () => {
    const [appliedJobs] = useContext(AppliedJobsContext);
    const [filteredJobs, setFilteredJobs] = useState(appliedJobs);
    return (
        <>
            <FilteredJobsContext.Provider value={[setFilteredJobs]}>
                <Header2>Applied Jobs</Header2>
                <section className='my-container my-10 py-5'>
                    {
                        appliedJobs.length ? <MyDropdown /> : ''
                    }
                    <div className='flex flex-col gap-5'>
                        {
                            appliedJobs.length ? '' : <div>
                                <h1 className='text-3xl font-semibold text-red-400 text-center'>You haven't applied for any job yet!!</h1>
                                <h1 className='text-3xl font-semibold text-red-400 text-center'>What are you waiting for!!</h1>
                            </div>
                        }
                        {
                            appliedJobs.length && filteredJobs.length === 0 ? <h1 className='text-3xl font-semibold text-red-400 text-center'>No jobs for this filteration</h1> : ''
                        }
                        {
                            filteredJobs.map(job => <SingleAppliedJobsCard key={job.id} job={job}></SingleAppliedJobsCard>)
                        }
                    </div>
                </section>
            </FilteredJobsContext.Provider>
        </>
    );
};

export default AppliedJobs;