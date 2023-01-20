import React from 'react';
import './FrontPage.css'
const HomePage = ()=> {
    return (
        <>
        <div className="home-container">
<div className="home-text">
    <h2 className="home-header">
        Book With us and Book It  Out Of Here!
    </h2>
    <div className="home-sub">
        <div className="icon">

        </div>
        <h4 className="home-sub-text">
            Watch Video
        </h4>
        </div>
        </div>
        <div className="home-footer">
            <div className="home-location">
                <h4 className="small-text"> Location</h4>
                <h2 className="big-text">Italia</h2>
            </div>
            <div className="home-date">
                <h4 className="small-text"> Date</h4>
                <h2 className="big-text">Tue, 3 Nov</h2>
            </div>
            <div className="home-price">
                <h4 className="small-text"> Average Price </h4>
                <h2 className="big-text">$400 - $600</h2>
            </div>
            <div className="home-search"><h2 className="search-text">Search</h2></div>        </div>
    </div>
     
        </>

    )
}
export default HomePage;
