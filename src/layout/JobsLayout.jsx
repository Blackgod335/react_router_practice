import { Outlet } from "react-router-dom"


const JobsLayout = () => {
  return (
    <div>
        <h1>Jobs Openings</h1>
        <p>List of current job opening in our company</p>
        <Outlet/>
    </div>
  )
}

export default JobsLayout