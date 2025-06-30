import { useLoaderData } from 'react-router-dom'

const JobDeatils = () => {
    const JobDeatils = useLoaderData();
    return (
        <div className='job-details'>
            <p><b>Job Title : </b> {JobDeatils.title}</p>
            <p><b>Salary : </b> {JobDeatils.salary}</p>
            <p><b>Job Location : </b> {JobDeatils.location}</p>
            <p><b>Description : </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, labore eius officia distinctio rerum perferendis maiores dolores consequuntur molestias at dolor. Suscipit facere dolore perferendis, iste quae ab eum modi?</p>
            <button>Apply Now</button>
        </div>
    )
}

export default JobDeatils;

export const jobsDetailsLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch("http://localhost:5000/jobs/" + id);
    if(!res.ok) throw Error("Could Not found job details")
    return res.json();
}