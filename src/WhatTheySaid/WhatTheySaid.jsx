import React from 'react';
import './WhatTheySaid.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import  avatarAli from '../assets/avatar-ali.png'
import  avatarAnisha from '../assets/avatar-anisha.png'
import  avatarRichard from '../assets/avatar-richard.png'
import  avatarShanai from '../assets/avatar-shanai.png'

import 'swiper/css'

const WhatTheySaid = () => {
return (
    <div className="WhatTheySaid-section">
<div className="WhatTheySaid-textHeader">
    <h2>  What they've said</h2>
</div>
<div className="WhatTheySaid-carousel">
    <Swiper spaceBetween={70}  breakpoints={{600: {
        slidesPerView : 1
    }, 780 : {
        slidesPerView: 3
    }}} onSlideChange={()=> {console.log("hello")}}>
    <SwiperSlide> <div className="person-1">
        <div className="person-img">
            <img src={avatarShanai } className="images-div" />
        </div>
        <div className="person-name">
            <h4>Shanai Gough</h4>
        </div>
        <div className="person-info">
            <p>   “Their software allows us to track, manage and collaborate on our projects 
  from anywhere. It keeps the whole team in-sync without being intrusive.”
</p>
        </div>
    </div>
    </SwiperSlide>
    
   <SwiperSlide>
       <div className="person-1">
        <div className="person-img">
            <img src={avatarAnisha} className="images-div" />
        </div>
        <div className="person-name">
            <h4>Anisha Li</h4>
        </div>
        <div className="person-info">
            <p>  “Manage has supercharged our team’s workflow. The ability to maintain 
  visibility on larger milestones at all times keeps everyone motivated.”</p>
        </div>
    </div>
   </SwiperSlide>
    <SwiperSlide>
         <div className="person-1">
        <div className="person-img">
            <img src={avatarAli} className="images-div" />
        </div>
        <div className="person-name">
            <h4> Ali Bravo</h4>
        </div>
        <div className="person-info">
            <p> “We have been able to cancel so many other subscriptions since using 
  Manage. There is no more cross-channel confusion and everyone is much 
  more focused.”</p>
        </div>
    </div>
    </SwiperSlide>
   <SwiperSlide>
          <div className="person-1">
        <div className="person-img">
            <img src={avatarRichard} className="images-div" />
        </div>
        <div className="person-name">
            <h4>Richard Watts</h4>
        </div>
        <div className="person-info">
            <p>  “Manage allows us to provide structure and process. It keeps us organized 
  and focused. I can’t stop recommending them to everyone I talk to!”</p>
        </div>
    </div>
   </SwiperSlide>
 
    </Swiper>
    
</div>
<div className="WhatTheySaid-button">
    <button> Get Started</button>
</div>
    </div>
)
}
export default WhatTheySaid