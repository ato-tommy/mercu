import { lazy } from "react";
import Upload from "../pages/Upload/Upload";
// import AboutUs from "../pages/AboutUs/AboutUs";
// import ContactUS from "../pages/ContactUs/ContactUS";
// // import Home from "../pages/Home/Home";
// import Products from "../pages/Products/Products";
// import Projects from "../pages/Projects/Projects";
// import Services from "../pages/Services/Services";

const Home = lazy(()=> import('../pages/Home/Home'))
const AboutUs = lazy(()=> import('../pages/AboutUs/AboutUs'))
const ContactUS = lazy(()=> import('../pages/ContactUs/ContactUS'))
const Products = lazy(()=> import('../pages/Products/Products'))
const Services = lazy(()=> import('../pages/Services/Services'))

const router = [
   {path:'/',element:<Home/>},
   {path:'/products',element:<Products/>},
   {path:'/services',element:<Services/> },
   {path:'/about-us',element:<AboutUs/> },
   {path:'/contact-us',element:<ContactUS/> },
   {path:'/Upload',element:<Upload/> },
]
export default router