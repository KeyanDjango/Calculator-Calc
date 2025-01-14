import React from 'react';
import Home from './Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './About';

export default function App(){
    return(
        <>
          <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
          </BrowserRouter>
        </>
    )
}