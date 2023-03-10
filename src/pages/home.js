import { Link } from 'react-router-dom'
import Logo from '../components/svgs/svglogo'
import { motion as m } from 'framer-motion'
import { useRef } from 'react'

const Home = () => {
    
  const homeRef = useRef()

  const scrollHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" }) 
  }

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delay: 0.5, 
            staggerChildren: 1
          }
        }
      }
      
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }

    return ( 
        <m.div ref={homeRef} id='home'
        initial={{opacity: 0}}
        animate={{ opacity: 1,  transition: {duration: 1, transition: "easeOut" }}}
        exit={{ opacity: 0, transition: {duration: 0.5, delay: 0.5 } }}
        >
            <Logo />
            <m.div className='home-welcome' variants={container} initial="hidden" animate="show">
                <m.h1 variants={item}>Reliable</m.h1>
                <m.h1 variants={item}>Professional</m.h1>
                <m.h1 variants={item}>Local</m.h1>
                <m.p variants={item}>Pale Black Dot is a locally owned, Omaha based Web Development Service Company</m.p>
                <m.p variants={item}>We provide local businesses with the services they need to stay relevant online </m.p>
                <Link to="/services">
                  <m.button onClick={(() => scrollHome())} variants={item}>Our Services</m.button>
                </Link>
            </m.div>
        </m.div>
     );
}
 
export default Home;