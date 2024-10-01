import React from 'react';
import { useLocation } from 'react-router-dom';

export default function About(){
    const location = useLocation();
    const {message,message1} = location.state || {};
    return(
        <>
          <h1>About</h1>
          {message}
          {message1}
        </>
    )
}