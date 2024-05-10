import React from "react";
import {Link} from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";

const About=()=>{
    return (
        <section className="about" id="about">
            <div className="container">
             <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we're serious about is food.</p>
                </div>
                <p className="mid">
                Welcome to FlavorFusion, where passion for food meets the art of dining.
At FlavorFusion, we believe that food is not just sustenance; it's an expression of culture, creativity, and love. Our chefs, trained in the finest culinary traditions, bring a wealth of experience and innovation to every plate.

But our commitment goes beyond food. 

                </p>
                <Link to={"/"}>Explore Menu<span>
                    <HiOutlineArrowNarrowRight/></span></Link>
             </div>
             <div className="banner">
                <img src="/about.png" alt="about"/>
             </div>
            </div>
        </section>
    )
}

export default About;
