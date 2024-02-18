import logo from './logo.svg';
import './App.css';
import Navbar from './components/modules/navbar/Navbar';
import { useRoutes } from 'react-router-dom';
import router from './router/router';
import 'aos/dist/aos.css';
import Footer from './components/modules/Footer/Footer';

function App() {
  const routes = useRoutes(router)
  return (

  <>
  <section className='relative'>
  <Navbar />
  {routes}
  <Footer/>
  </section>
 
</>
  );
}

export default App;
