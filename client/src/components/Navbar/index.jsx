import { Link } from 'react-router-dom'
import './Navbar.scss'
import Auth from '../../utils/auth';

export default function Navbar() {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <>
            <nav className="navbar">
                <h1> Chipping In Chicago</h1>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                {/* <Link to='/location'>More Drop-off Locations</Link> */}
                <div>
                    {Auth.loggedIn()
                        ? (<a onClick={logout}> Logout </a>)
                        : (<Link to='/login'>Login</Link>)
                    }
                </div>
                <Link to='/donations'>Donations</Link>
            </nav>
        </>
    )
}