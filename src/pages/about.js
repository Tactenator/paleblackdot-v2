import { motion as m } from 'framer-motion'
import Mobile from '../components/svgs/mobile';
import Frontend from '../components/svgs/frontend'
import Circle from '../components/svgs/circlesvg'
import Ideas from '../components/svgs/ideas'
import Principles from '../components/principles';
import { Link } from 'react-router-dom';
import AboutContact from '../components/aboutContact';

// Need intersection observer here to give rid of title + subtitle and lower the opacity of the circle.

// Need to figure out SVG for this page. Need something with a sky, stars, the circle logo, and a hill or something.
const About = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delay: 0.5, 
            staggerChildren: 0.8
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }
    return ( 
    <m.div 
        id="about"
        initial={{opacity: 0}}
        animate={{ opacity: 1,  transition: {duration: 1, transition: "easeOut" }}}
        exit={{ opacity: 0, transition: {duration: 0.6 } }}>
        <div className='about'>
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
        <m.div className='services-container' variants={container} initial="hidden" animate="show">
            <m.div className='service' variants={item}>
                <h2>Front End Development</h2>
                <span>Design meets development providing your customers a great experience.</span>
                <Frontend />
            </m.div>
            <m.div className='service' variants={item}>
                <h2>Mobile Focused</h2>
                <span>Android or iPhone, your site will accessible on all platforms</span>
                <Mobile />
                <Circle />
            </m.div>
            <m.div className='service' variants={item}>
                <h2>Creating Your Ideas</h2>
                <span>Looking to add a store? Maybe something else? We got your back</span>
                <Ideas />
            </m.div>
        </m.div>
        </div>
        
        <Principles />
        <AboutContact />
    </m.div> );
}
 
export default About;