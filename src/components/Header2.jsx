import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header2 = ({ children }) => {
    // console.log(children);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className='bg-[#f9f9ff] header2-style'>
            <header className='my-container flex justify-between relative pt-5'>
                <Link to='/' className='font-bold text-2xl tracking-wide flex items-center'>DigitalCareer</Link>
                <ul className='gap-5 items-center font-semibold hidden lg:flex'>
                    <li>
                        <NavLink
                            to='/statistics'
                            className={({ isActive }) => isActive ? 'activeStyle' : ''}>
                            Statistics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/appliedjobs'
                            className={({ isActive }) => isActive ? 'activeStyle' : ''}>
                            Applied Jobs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/blog'
                            className={({ isActive }) => isActive ? 'activeStyle' : ''}>
                            Blog
                        </NavLink>
                    </li>
                </ul>
                <Link
                    to='/'
                    className='btn-style hidden lg:block'>
                    Start Applying
                </Link>
                {/* mobail header */}
                <div className={`absolute top-3 w-[100%] shadow-md z-10 bg-[#f9f9ff] border p-4 justify-between ${isOpen ? 'flex' : 'hidden'}`}>
                    <div>
                        <Link to='/' className='font-bold text-2xl tracking-wide text-blue-500'>DC</Link>
                        <ul className='flex flex-col gap-5 my-5 font-semibold'>
                            <li>
                                <NavLink
                                    to='/statistics'
                                    className={({ isActive }) => isActive ? 'activeStyle' : ''}>
                                    Statistics
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/appliedjobs'
                                    className={({ isActive }) => isActive ? 'activeStyle' : ''}>
                                    Applied Jobs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/blog'
                                    className={({ isActive }) => isActive ? 'activeStyle' : ''}>
                                    Blog
                                </NavLink>
                            </li>
                            <li>
                                <Link
                                    to='/'
                                    className='btn-style'>
                                    Start Applying
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <FontAwesomeIcon icon={faXmark} className='text-2xl cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
                </div>
                <FontAwesomeIcon icon={faBarsStaggered} className='text-xl lg:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
            </header>
            <h1 className='text-center font-bold text-3xl py-14'>{children}</h1>
        </section>
    );
};

export default Header2;