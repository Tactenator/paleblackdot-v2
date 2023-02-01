import { Link } from 'react-router-dom'

const AboutContact = () => {
    return ( 
        <div className='services-contact'>
            <h1>Ready to get started? Let's get to work</h1>
            <Link to="/contact">
                <button>Contact Information</button>
            </Link>
        </div>
     );
}
 
export default AboutContact;