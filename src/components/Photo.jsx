import image from "../assets/a.jpg";
import "../components/photo.css";
import React from "react";

function Photo() {
  return (
    <div>
      <div class="pmain">
        <img src={image} class="pimg" alt="hi" />
      </div>
      <div>
        <h2 class="ptext">MADHAV SINGH</h2>
      </div>
    </div>
  );
}

export default Photo;
