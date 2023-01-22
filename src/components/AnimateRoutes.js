import About from '../pages/about';
import Home from '../pages/home'
import Contact from '../pages/contact'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion';

const AnimateRoutes = () => {
    const location = useLocation(); 
    return ( 
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' exact element={<Home />} />
                <Route path='/about' element={<About />} /> 
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </AnimatePresence>
     );
}
 
export default AnimateRoutes;