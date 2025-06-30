import react from '../assets/react.svg'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate

    return (
        <div className='navbar'>
            <img src={react} alt="" width="{130px}" />
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/product"><li>Products</li></NavLink>
                <NavLink to="/about"><li>About</li></NavLink>
                <NavLink to="/contact"><li>Contact</li></NavLink>
                <NavLink to="/jobs"><li>jobs</li></NavLink>

            </ul>
            <button onClick={() => navigate('/about')}>Get Started</button>
        </div>
    )
}

export default Navbar