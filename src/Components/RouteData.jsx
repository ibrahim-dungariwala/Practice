import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Blog} from "./pages/Blog"
import {Contact} from "./pages/Contact"
import { NavBar } from "./nav/NavBar"

export  const RouteData =()=>
 {
    return(
        <div>
            
            <BrowserRouter>
              <NavBar/>
            <Routes>

                <Route path="/" element={<Home/>} />
                <Route path="/about"  element={<About/>}/>
                <Route path="/blog"  element={<Blog/>}/>
                <Route path="/contact"  element={<Contact/>}/>
              
              </Routes>
            </BrowserRouter>
        </div>
    )
} 