import React from "react";
import HomeImageCarousel from "../components/HomeImageCarousel";
import NavBar from "../components/NavBar";
import About from "../components/About";

function Home() {


    return (
    <div>
        <NavBar />
        <HomeImageCarousel />
        <About />
    </div>
    )
}

export default Home;