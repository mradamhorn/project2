import React from "react";
import NavBar from "../components/NavBar";

function Landing() {
    return(
    <>
        <NavBar />
        <div class="hero-image">
            <div class="hero-text">
                <p id="hero-text-1"><i class="fas fa-seedling fa-lg"></i> Plantsy</p>
                <p id="hero-text-2">Helping you take care of life.</p>
            </div>
        </div>
    </>    
    )
}

export default Landing;