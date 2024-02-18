import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUS from "../pages/ContactUs/ContactUS";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Projects from "../pages/Projects/Projects";
import Services from "../pages/Services/Services";

const router = [
   {path:'/',element:<Home/>},
   {path:'/products',element:<Products/>},
   // {path:'/projects',element:<Projects/>},
   {path:'/services',element:<Services/> },
   {path:'/aboutus',element:<AboutUs/> },
   {path:'/contactus',element:<ContactUS/> },
]
export default router