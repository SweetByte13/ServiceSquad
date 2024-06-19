import React from "react";
import HomeImageCarousel from "../components/HomeImageCarousel";
import NavBar from "../components/NavBar";
import About from "../components/About";
import Footer from "../components/Footer";

function Home() {


    return (
    <div>
        <NavBar />
        <HomeImageCarousel />
        <About />
        <Footer />
    </div>
    )
}

export default Home;