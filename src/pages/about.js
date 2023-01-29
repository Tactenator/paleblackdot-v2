import { motion as m } from 'framer-motion'
import Circle from '../components/circlesvg'
import Mobile from '../components/mobile';
import Frontend from '../components/frontend'
import Ideas from '../components/ideas'

// Need intersection observer here to give rid of title + subtitle and lower the opacity of the circle.

// Need to figure out SVG for this page. Need something with a sky, stars, the circle logo, and a hill or something.
const About = () => {
    return ( 
    <m.div 
        id="about"
        initial={{opacity: 0}}
        animate={{ opacity: 1,  transition: {duration: 1, transition: "easeOut" }}}
        exit={{ opacity: 0, transition: {duration: 0.6 } }}>
        <Circle />
        <m.h1
            initial={{ opacity: 0}}
            animate={{ opacity: "100%" }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut"}}>
            Better Experiences <br></br>
            Better Services
        </m.h1>
        <m.p>
            Your business deserves the best. We strive to provide you and your customers the best digital experience possible.
        </m.p>
        <div className='services-container'>
            <div className='service'>
                <h4>Front End Development</h4>
                <span>Design meets development providing your customers a great experience.</span>
                <Frontend />
            </div>
            <div className='service'>
                <h4>Mobile Focused</h4>
                <span>Android or iPhone, your site will accessible on all platforms</span>
                <Mobile />
            </div>
            <div className='service'>
                <h4>Creating Your Ideas</h4>
                <span>Looking to add a store? Maybe something else? We got your back</span>
                <Ideas />
            </div>
        </div>
    </m.div> );
}
 
export default About;