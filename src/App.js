import './App.scss'
import {BrowserRouter as Router, useRoutes, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import './Styling/index.css';
import About from './components/About';
import Contact from './components/Contacts';




function App() {
  let routes = useRoutes([
   { path: "/", 
     element: 
<>
     <Home/>
     <Layout>
      <Sidebar/>
     </Layout>
     </>
    },
    {
    path: '/home',
    element: 
<>
     <Home/>
     <Layout>
      <Sidebar/>
     </Layout>
     </>
    },
    {
      path: '/about',
      element: 
<>
     <About/>
     <Layout>
      <Sidebar/>
     </Layout>
     </>
    },
    {
      path: '/contact',
      element: 
<>
     <Contact/>
     <Layout>
      <Sidebar/>
     </Layout>
     </>
         } 
  ])

  return routes;
};

const AppWrapper = () => {
   return(
     <Router>
         <App/>
     </Router>
   )
};


export default AppWrapper;
