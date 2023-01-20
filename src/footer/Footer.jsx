import React from 'react';
import {FaWhatsapp, FaPinterest,FaInstagram,  FaInstagramSquare, FaFacebook, FaTwitter} from 'react-icons/fa'
import './Footer.css';
import Logo from '../assets/logo.svg'
const Footer =() => {
    return (
        <div className="footer-container">
<div className="footer-logos-icons">
    <div className="footer-logo">
      <img src={Logo} />  
    </div>
<div className="footer-icons">
<div className="media-icons">
    <FaWhatsapp />

</div>
<div className="media-icons">
    <FaInstagram />
    
</div>
<div className="media-icons">
    <FaFacebook/>
    
</div>
<div className="media-icons">
    <FaPinterest/>
    
</div>
<div className="media-icons">
    <FaTwitter />
    
</div>
</div>
</div>
<div className="footer-links-1">
    <div className="row-1">
        <p>Home</p>
        <p>Pricing</p>
        <p>Products</p>
        <p>About Us</p>
    </div>
    
    
    <div className="row-2">
        <p> Careers</p>
        <p>  Community</p>
        <p>Privacy Policy</p>
    </div>
</div>

<div className="copyright">
    <div className="email-button">
         <input type="text " placeholder="Updates in your inbox…"  className="email-button-input" />
         <button> Go</button>
    </div>
    <div className="copyright-message">
        <p> Copyright 2020. All Rights Reserved </p>
    </div>
   

</div>

        </div>
    )
}

export default Footer