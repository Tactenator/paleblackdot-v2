import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navlogo from './svgs/navlogo.js'
import Logo from './svgs/svglogo.js'

const Navbar = () => {

    const [ open, setOpen ] = useState(false)
    
    return ( 
        <nav>
            <ul className='navbar'>
                <Link to='/'>Home</Link>
                <Link to='/services'>Services</Link>
                <Link to='/contact'>Contact</Link>
            </ul>
        <div className={open? "open" : ""} id="hamburger-icon" onClick={(() => setOpen(value => !value))}>
            <span className="bar1"></span><br></br>
            <span className="bar2"></span><br></br>
            <span className="bar3"></span>
            <div className="mobile-menu">
                <Navlogo />
                <Link to="/">Home</Link>
                <Link to="/services">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
        </nav>
     );
}
 
export default Navbar;