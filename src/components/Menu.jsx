import React from 'react'
import {Icons} from "./Icons";
import '../components/menu.css'

function Menu(){
  return (
    <div class="rmain">
        <ul>
        {Icons.map((val,index)=><li key={index} class="micons">
        <div class ="rm2">
            <span class="sp">{val.icon}</span>
        </div>
        <div>{val.title}</div>
        </li>)}
        </ul>
    </div>
  )
}

export default Menu;