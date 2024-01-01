import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    const {status, data} = error;
    return (
        <div className='my-container min-h-[100vh] flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-bold mb-5 text-red-600'>{status}</h1>
            <h1 className='text-5xl font-semibold'>{error.message || data}</h1>
        </div>
    );
};

export default ErrorPage;