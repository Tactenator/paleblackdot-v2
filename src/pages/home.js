import Logo from '../components/svglogo'
import { motion as m } from 'framer-motion'

const Home = () => {
    return ( 
        <m.div id='home'
        initial={{opacity: 0}}
        animate={{ opacity: 1,  transition: {duration: 1, transition: "easeOut" }}}
        exit={{ opacity: 0, transition: {duration: 0.5, delay: 0.5 } }}
        >
            <Logo />
        </m.div>
     );
}
 
export default Home;