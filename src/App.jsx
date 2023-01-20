import { useState } from 'react'
import AboutUs from './AboutUs/AboutUs'

import './App.css'

import Footer from './footer/Footer'
import Manage from './Manage/Manage'
import NavBar from './navbar/navbar'
import Simplify from './Simplify/SImplify'
import WhatTheySaid from './WhatTheySaid/WhatTheySaid'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  
<NavBar/>
<AboutUs />
<Manage />
<  WhatTheySaid />
<Simplify />
<Footer />
   </>
  )
}

export default App
