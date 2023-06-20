import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Home/Home";
// import About from "../components/About/About";
// import Resume from "../components/Resume/Resume";
// import Contact from "../components/Contact/Contact";


 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      // children: [
      //   {
      //     path: 'about',
      //     element: <About></About>
      //   },
      //   {
      //     path: 'resume',
      //     element: <Resume></Resume>
      //   },
      //   {
      //     path: 'contact',
      //     element: <Contact></Contact>
      //   }
      // ]
    },
  ]);