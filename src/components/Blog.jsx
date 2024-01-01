import React from 'react';
import Header from './Header';

const Blog = () => {
    return (
        <>
            <Header />
            <section className='my-container'>
                <div className='my-5'>
                    <h1 className='text-3xl font-semibold mb-2'><span className='font-bold text-blue-500'>Question : </span>When should you use context API?</h1>
                    <p className='text-xl text-gray-500'><span className='font-bold text-blue-500'>Answer : </span>The best use of context APi is when you need to share data across multiple components at different levels of the component tree, especially when passing props becomes cumbersome and difficult to manage.</p>
                </div>
                <div className='my-5'>
                    <h1 className='text-3xl font-semibold mb-2'><span className='font-bold text-blue-500'>Question : </span>What is a custom hook?</h1>
                    <p className='text-xl text-gray-500'><span className='font-bold text-blue-500'>Answer : </span>A custom hook in react is a reusable function that a React JS developer can use to add special and unique functionality to the React applications.</p>
                </div>
                <div className='my-5'>
                    <h1 className='text-3xl font-semibold mb-2'><span className='font-bold text-blue-500'>Question : </span>What is useRef?</h1>
                    <p className='text-xl text-gray-500'><span className='font-bold text-blue-500'>Answer : </span>useRef is a React Hook that lets you reference a value that's not needed for rendering.</p>
                </div>
                <div className='my-5'>
                    <h1 className='text-3xl font-semibold mb-2'><span className='font-bold text-blue-500'>Question : </span>What is useMemo?</h1>
                    <p className='text-xl text-gray-500'><span className='font-bold text-blue-500'>Answer : </span>useMemo is a React Hook that lets you cache the result of a calculation between re-renders.</p>
                </div>
            </section>
        </>
    );
};

export default Blog;