
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div id='nav-links'>

            <Link to='/'>Home</Link>
            <Link to='/artists'>Artist</Link>
            <Link to='/precheck-list'>Precheck List</Link>
            <Link to='/aftercare'>Aftercare</Link>
            <Link to='/faq'>FAQ's</Link>


        </div >
    )
}

export default Navbar