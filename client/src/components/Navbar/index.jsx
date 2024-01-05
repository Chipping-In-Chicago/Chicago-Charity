import { Link } from 'react-router-dom'
import './navbar.scss'
// import Auth from '../../utils/auth';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            {/* <Link to='/location'>More Drop-off Locations</Link> */}
            <Link to='/login'>Login</Link>
        </nav>
    )
}