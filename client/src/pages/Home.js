import React from "react";
import HomeImageCarousel from "../components/HomeImageCarousel";
import NavBar from "../components/NavBar";
function Home() {


    return (
    <div>
        <NavBar />
        <HomeImageCarousel />
        <div className="about">
            <h1 className="about-heading">
                About ServiceSquad
            </h1>
            <h3>
                ServiceSquad was first formed...
                Today, ServiceSquad operates in ...
            </h3>
            
            <h3>Volunteers counter</h3> 
            <h3>Organizations counter</h3>
            <h3>Communities counter</h3>
            
        </div>

    </div>
    )
}

export default Home;