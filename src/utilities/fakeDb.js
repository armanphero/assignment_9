import toast from 'react-hot-toast';

const getJobCategory = async () => {
    const res = await fetch('jobCategory.json');
    const jobCategories = await res.json();
    return jobCategories;
}

const getAllJobs = async () => {
    const res = await fetch('https://raw.githubusercontent.com/armanphero/jobsData/master/allJobsData.json');
    const allJobs = res.json();
    return allJobs;
}

const saveIdInDb = (id) => {
    const previousJobs = getPreviousjobFromDb();
    const existedId = previousJobs.find(jobId => jobId === id);
    if (existedId) {
        toast('Already applied this job🔥 ');
    }
    else {
        previousJobs.push(id);
        localStorage.setItem('appliedJobs', JSON.stringify(previousJobs));
        toast('successfully applied✅');
    }
}

const getPreviousjobFromDb = () => {
    let appliedJobs = [];
    const previousJobs = localStorage.getItem('appliedJobs');
    if (previousJobs) {
        appliedJobs = JSON.parse(previousJobs);
    }

    return appliedJobs;

}

const getAppliedJobs = () => {
    const previousJobs = getPreviousjobFromDb();
    previousJobs.filter(job => {

    })

}


const getData = async () => {
    const response = await fetch('jobCategory.json');
    const jobCategories = await response.json();
    // 
    const res = await fetch('https://raw.githubusercontent.com/armanphero/jobsData/master/allJobsData.json');
    const allJobs = await res.json();

    const previousJobs = getPreviousjobFromDb();
    const appliedJobsArr = previousJobs.map(jobId => {
        const job = allJobs.find(singleJob => singleJob.id === jobId);
        return job;
    })
    // console.log(appliedJobs);

    return [jobCategories, allJobs, appliedJobsArr];
}

export { getData, saveIdInDb };