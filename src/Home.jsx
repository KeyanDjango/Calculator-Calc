import React from 'react';
import './App.css';

export default function Home() {
    return (
        <div className='parent_calc'>
            <div className='calc_card'>
                
                <div className='calc_display'>
                    <input type='text' className='input_display'/>
                </div>
                <div className='keyboard_keys'>
                    <div className="con1 con">%</div>
                    <div className="con2 con">?</div>
                    <div className="con3 con">CE</div>
                    <div className="con4 con" style={{backgroundColor:'#1F2B54',color:'white',fontWeight:'blod',fontSize:15}}>C</div>
                    <div className="con5 con">7</div>
                    <div className="con6 con">8</div>
                    <div className="con7 con">9</div>
                    <div className="con8 con">-</div>
                    <div className="con9 con">4</div>
                    <div className="con10 con">5</div>
                    <div className="con11 con">6</div>
                    <div className="con12 con">/</div>
                    <div className="con13 con">1</div>
                    <div className="con14 con">2</div>
                    <div className="con15 con">3</div>
                    <div className="con16 con">X</div>
                    <div className="con17 con">.</div>
                    <div className="con18 con">0</div>
                    <div className="con19 con">=</div>
                    <div className="con20 con">+</div>
                </div>
            </div>
        </div>
    )
}