import React from 'react';
import './aboutpage.css'; // Ensure you create this CSS file
import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";


const About = () => {
    return (
        <div className="bg-gray-100">

            {/* Main Section */}
            <main className="relative">
               <div className='w-full h-screen object-cover imageclass'> 
               <div className="textContainer">
        <div className="wrapper">
          <h1 className="title1">Find Real Estate & Get Your Dream Place</h1>
          <p>
          Discover your dream property with us! Whether you're looking to buy your first home
          , sell an investment property, or find the perfect commercial space, our expert team is here to guide you every step of the way.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
                </div>
            </main>
        </div>
    );
};

export default About;