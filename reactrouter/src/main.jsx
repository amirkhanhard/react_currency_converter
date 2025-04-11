import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import AboutInner from './components/About/AboutInner.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, {githubInfoLoader} from './components/Github/Github.jsx'

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Layout />,
//       children:[
//         {
//           path: "/",// after above [path string]/
//           element: <Home />
//         },
//         {
//           path: "about",// after above [path string]/about
//           element: <About />
//         },
//         {
//           path: "contact",
//           element: <Contact />
//         }
//       ]
//     }
//   ]
// );
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} >
        <Route path="aboutinner" element={<AboutInner />} />  
      </Route>
      <Route path="contact" element={<Contact />} />
      <Route 
      
      loader={githubInfoLoader}
      path="github/:username" element={<Github />} />
      
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
