import { Outlet } from "react-router-dom"
import Contact from "../pages/contact"

const ContactLayout = () => {
  return (
    <div>
        <Contact/>
        <Outlet/>
    </div>
  )
}

export default ContactLayout