import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/navbar';
import AnimateRoutes from './components/AnimateRoutes';


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <AnimateRoutes />
      </Router>
    </div>
  );
}

export default App;
