import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Header2 from './Header2';

const data = [
    {
        name: 'Assignment 1',
        number: 60,
    },
    {
        name: 'Assignment 2',
        number: 60,
    },
    {
        name: 'Assignment 3',
        number: 48,
    },
    {
        name: 'Assignment 4',
        number: 30,
    },
    {
        name: 'Assignment 5',
        number: 30,
    },
];



const Statistic = () => {
    return (
        <>
            <Header2>Assignment Statistics</Header2>
            <section className='my-container my-10 flex justify-center'>
                <BarChart
                    width={800}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="name" padding={{ left: 10, right: 10 }} />
                    <YAxis margin={{right: 40}} />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="number" fill="#8884d8" background={{ fill: '#eee' }} />
                </BarChart>
            </section>
        </>
    );
};

export default Statistic;