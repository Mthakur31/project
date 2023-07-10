import React from 'react'
import '../components/resume.css';
import Technical from './Technical';
import Banner from './Banner';


function ResumeComponent(){
  return (
    <div class ="main">
        <div>
            <Technical/>
        </div>
        <div className="">
            <Banner/>
            
        </div>
    </div>
  );
}

export default ResumeComponent