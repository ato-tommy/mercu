import logo from './logo.svg';
import './App.css';
import Navbar from './components/modules/navbar/Navbar';
import { useRoutes } from 'react-router-dom';
import router from './router/router';
import 'aos/dist/aos.css';
import Footer from './components/modules/Footer/Footer';
import { Suspense, useEffect } from 'react';
import PageLoader from './components/modules/PageLoader/PageLoader';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  const routes = useRoutes(router)
  return (

  <>
  <section className='relative'>
  <Navbar  />
  <Suspense fallback={<PageLoader/>}>
  {routes}
  </Suspense>
  <Footer/>
  </section>
 
</>
  );
}

export default App;
