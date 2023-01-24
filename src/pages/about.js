import { motion as m } from 'framer-motion'
import Circle from '../components/circlesvg'

// Need intersection observer here to give rid of title + subtitle and lower the opacity of the circle.

// Need to figure out SVG for this page. Need something with a sky, stars, the circle logo, and a hill or something.
const About = () => {
    return ( 
    <m.div 
        id="about"
        initial={{opacity: 0}}
        animate={{ opacity: 1,  transition: {duration: 1, transition: "easeOut" }}}
        exit={{ opacity: 0, transition: {duration: 0.6 } }}>
        <div className='sky'>
            <Circle />
            <span className='stars'></span>
            <span className='stars'></span>
            <span className='stars'></span>
            <span className='stars'></span>
            <span className='stars'></span>
        </div>
        <div>
            <m.h1
                initial={{ y: '100%'}}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut"}}>
                Who We Are
            </m.h1>
        </div>
        <p>
            Pale Black Dot is a local software development company that specializes in working with small businesses. We provide local businesses the means
            to develop a powerful online presence as well provide their customers a great online experience. 
        </p>
    </m.div> );
}
 
export default About;