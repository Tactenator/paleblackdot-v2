import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <ul className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </ul>
     );
}
 
export default Navbar;