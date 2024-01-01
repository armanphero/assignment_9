import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png'

const HeroSction = () => {
    return (
        <section className='bg-[#f9f9ff]'>
            <div className='my-container pb-0 grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[calc(100vh-88px)]'>
                <div className='h-[100%] flex flex-col justify-center'>
                    <div className='2xl:w-[80%]'>
                        <h1 className='text-4xl sm:text-6xl md:text-7xl font-semibold'>One Step Closer To Your <span className='animate-text bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-black'>Dream Job</span></h1>
                        <p className='text-gray-500 my-7 sm:my-10 sm:text-xl'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <span><Link to='/' className='btn-style'>Get Started</Link></span>
                    </div>
                </div>
                <div className='h-[100%]'>
                    <img src={user} alt="" className='h-[100%] w-[100%] object-cover' />
                </div>
            </div>
        </section>
    );
};

export default HeroSction;