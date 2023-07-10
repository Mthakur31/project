import React from 'react'
import image from '../assets/b.jpg';
import '../components/banner.css';

function Banner(){
  return (
    <div class="main">
        <div>
            <img class="image" src={image} alt="hi"/>
        </div>;
        <div class ="m2">
            <h1 class = "name">
                Madhav Singh
            </h1>
            <p class="p">I AM <span class ="span">DEVELOPER</span></p>

        </div>

    </div>
  )
}

export default Banner