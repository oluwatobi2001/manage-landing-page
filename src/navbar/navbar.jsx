import React , {useEffect, useState} from 'react';
import logo from '../assets/logo.svg'
import hamburger from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'
import './navbar.css'
const NavBar = () => {
  
  const [click, setClick] = useState(false);
  const [button, setButton]= useState(true);  
  const [mobileOpen,  setMobileOpen] = useState(false)
  const handleClick = () => setClick(!click);
const closeMobileMenu =() => {
  setMobileOpen(!mobileOpen);
  setClick(true);
}

const showButton = () => {
  if (window.innerWidth <= 960) {
      setButton(false);
      setMobileOpen(false);
  }
  else {
      setButton(true);

  }
}

  window.addEventListener('resize', showButton)

  useEffect(() => { showButton();
setClick(false);
setMobileOpen(false)
  }, [])


return (
    <>
    <div className={ button ? "navbar-container" : "navbar-container-mobile"} >
        <div className={ button ? "logo" : "logo-mobile"}>
<img src={logo} className="logo-nav" />
        </div> 
         <div className={ mobileOpen ? "navbar-section-mobile" :  "navbar-section" }>
        
<div className="a-text">
    <a href="/" className="link">Pricing</a>
</div>
<div  className="a-text">
  <a href="about" className="link">Product</a>
</div>
<div  className="a-text">
    <a href="features" className="link">About Us</a>
</div>
<div  className="a-text" >
  <a className="link">Careers</a>
</div>
<div  className="a-text" >
  <a className="link">Community</a> 
</div>

        </div>           
        <div className="hamburger" onClick={closeMobileMenu}>
          <img src={ !mobileOpen ? hamburger : close } />

        </div>
        <div className={ button ? "navbar-button" : "navbar-button-mobile"}>
          <button>Get Started</button>
        </div> 

    </div>

    </>
)
}
export default NavBar