// import { Link } from 'react-router-dom'
import './footer.scss'
import Login from '../../pages/Login'

export default function Footer() {
    return (
        <footer className="footer">
            <button onClick={Login}> I need to help </button>
        </footer>

    )
}