import React from 'react';
import logoHuara from '../assets/images/logo-texto-cromatico-PhotoRoom.png'
import '../assets/css/Footer.css'
import {Link} from 'react-router-dom';

function Footer() {
  return (
   
    <React.Fragment>
<footer>
    <div className="box-footer">
        
        <div className="logo-footer">
        <img src= {logoHuara} alt="logo-huara" className="logo-footer-img"/>
        </div>
            
        
    </div>
</footer>
</React.Fragment>
  )
}

export default Footer;