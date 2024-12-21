import React from 'react'

import lal from '../assets/img/Lal.jpg'
import  deep from '../assets/img/NAIK.jpg'
import  ven from '../assets/img/ven.jpg'
import  milk from '../assets/img/milk.jpg'

       

import '../css/my.css'
export default function Profile() {
  return (
    <div>

<div className="container d-flex align-items-center justify-content-center position-relative flex-wrap">
        <div className="card d-flex position-relative flex-column">
            <div className='imgContainer'>
                <img src={lal}/>
            </div>
            <div className="content">
                <h2>Card One</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbir.</p>
            </div>
        </div>
        <div className="card d-flex position-relative flex-column">
            <div className='imgContainer'>
                <img src={deep}/>
            </div>
            <div className="content">
                <h2>Card Two</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo r.</p>
            </div>
        </div>
        <div className="card d-flex position-relative flex-column">
            <div className='imgContainer'>
                <img src={ven}/>
            </div>
            <div className="content">
                <h2>Card Three</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in eros commodo volutr.</p>
            </div>
        </div>
        <div className="card d-flex position-relative flex-column">
            <div className='imgContainer'>
                <img src={milk}/>
            </div>
            <div className="content">
                <h2>Card Three</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh.  Morbi in leo in.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

