import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';

const Jobs = () => {

    const jobsData = useLoaderData();

    return (
        <div className='jobs'>
            {jobsData.map((job) => {
                return <Link to={job.id.toString()} key={job.id}>
                    <h6>{job.title}</h6>
                    <p>{job.location}</p>
                </Link>
            })}
        </div>
    )
}

export default Jobs;

export const JobsLoader = async () => {
    const res = await fetch("http://localhost:5000/jobs")
    return res.json()
}