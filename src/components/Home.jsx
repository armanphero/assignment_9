import React, { useContext } from 'react';
import Header from './Header';
import HeroSction from './HeroSction';
import JobCategory from './JobCategory';
import { JobCategoryContext } from '../App';
import JobCategories from './jobCategories';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    return (
        <>
            <Header />
            <HeroSction />
            <JobCategories />
            <FeaturedJobs />
        </>
    );
};

export default Home;