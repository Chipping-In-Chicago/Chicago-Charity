import { Link } from 'react-router-dom'
import './Navbar.scss'
// import Auth from '../../utils/auth';

export default function Navbar() {
    return (
        <> 
        <nav className="navbar">
         <h1> Chipping In Chicago</h1>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            {/* <Link to='/location'>More Drop-off Locations</Link> */}
            <Link to='/login'>Login</Link>
            <Link to ='/donations'>Donations</Link>
        </nav>
        </>
    )
}