import React from 'react'
import { BsInstagram,BsTwitter,BsFacebook,BsGithub,BsLinkedin } from 'react-icons/bs';
import '../components/social.css'


function SocialLinks(){
  return (
    <div class="smain">
        <div class="sicons"><BsInstagram/></div>
        <div class="sicons"><BsTwitter/></div>
        <div class="sicons"><BsFacebook/></div>
        <div class="sicons"><BsGithub/></div>
        <div class="sicons"><BsLinkedin/></div>
    </div>

  );
}

export default SocialLinks;