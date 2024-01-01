import { Outlet, useLoaderData } from 'react-router-dom'
import './App.css'
import { createContext, useState } from 'react'
import { Toaster } from 'react-hot-toast';

export const JobCategoryContext = createContext([]);
export const AllJobsContext = createContext([]);
export const AppliedJobsContext = createContext([]);

function App() {
  const jobsData = useLoaderData();
  const [jobCategories, allJobs, appliedJobsArr] = jobsData;
  const [appliedJobs, setAppliedJobs] = useState(appliedJobsArr);
  // console.log(jobsData);
  // console.log(jobCategories);
  // console.log(allJobs);

  return (
    <>
      <JobCategoryContext.Provider value={jobCategories}>
        <AllJobsContext.Provider value={allJobs}>
          <AppliedJobsContext.Provider value={[appliedJobs, setAppliedJobs]}>
            <Outlet />
            <Toaster />
          </AppliedJobsContext.Provider>
        </AllJobsContext.Provider>
      </JobCategoryContext.Provider>
    </>
  )
}

export default App
