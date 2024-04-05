"use client"

import React, { useState, useEffect } from 'react';
import data from './data.json';



const PopularNews = () => {

   
    const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of the current index
    const [dynamicData, setDynamicData] = useState([]);

    useEffect(() => {
        setDynamicData(data.sportsData); // Initialize dynamic data with sportsData
      }, []);
      
      useEffect(() => {
        const interval = setInterval(() => {
          // Update the currentIndex to show the next item
          setCurrentIndex(prevIndex => (prevIndex + 1) % dynamicData.length);
        }, 60000); // Update every minute
    
        return () => clearInterval(interval); // Clean up interval
      }, [dynamicData]); // Re-run effect when dynamicData changes
      
       // Check if dynamicData is empty or undefined
  if (!dynamicData || dynamicData.length === 0) {
    return <div>Loading...</div>; // Return loading message or component
  }
           
       
  return (
    
    <>
   
    <div className="col-lg-6">
    <div className="position-relative mb-3">
      {/* Display the item based on currentIndex */}
      <img className="img-fluid w-100" src={dynamicData[currentIndex].image} alt="News Image" style={{ objectFit: 'cover' }} />
      <div className="overlay-1 position-relative bg-light">
        <div className="mb-2" style={{ fontSize: '14px' }}>
          <a href="#">{dynamicData[currentIndex].category}</a>
          <span className="px-1">/</span>
          <span>{dynamicData[currentIndex].postDate}</span>
        </div>
        <a className="h4" href="#">{dynamicData[currentIndex].title}</a>
        <p className="m-0">{dynamicData[currentIndex].dec}</p>
      </div>
    </div>
      
      <div className="d-flex mb-3">
        <img src="img/news-100x100-1.jpg" alt="News Image" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: '100px' }}>
          <div className="mb-1" style={{ fontSize: '13px' }}>
            <a href="#">Technology</a>
            <span className="px-1">/</span>
            <span>January 01, 2045</span>
          </div>
          <a className="h6 m-0" href="#">Lorem ipsum dolor sit amet consec adipis elit</a>
        </div>
      </div>
     
      <div className="d-flex mb-3">
        <img src="img/news-100x100-2.jpg" alt="News Image" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: '100px' }}>
          <div className="mb-1" style={{ fontSize: '13px' }}>
            <a href="#">Technology</a>
            <span className="px-1">/</span>
            <span>January 01, 2045</span>
          </div>
          <a className="h6 m-0" href="#">Lorem ipsum dolor sit amet consec adipis elit</a>
        </div>
      </div>
    </div>

                    <div className="col-lg-6">
                    <div className="position-relative mb-3">
      <img className="img-fluid w-100" src="img/news-500x280-3.jpg" alt="News Image" style={{ objectFit: 'cover' }} />
      <div className="overlay position-relative bg-light">
        <div className="mb-2" style={{ fontSize: '14px' }}>
          <a href="#">Technology</a>
          <span className="px-1">/</span>
          <span>January 01, 2045</span>
        </div>
        <a className="h4" href="#">Est stet amet ipsum stet clita rebum duo</a>
        <p className="m-0">Rebum dolore duo et vero ipsum clita, est ea sed duo diam ipsum, clita at justo, lorem amet vero eos sed sit...</p>
      </div>
    </div>
    <div className="d-flex mb-3">
      <img src="img/news-100x100-3.jpg" alt="Thumbnail" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: '100px' }}>
        <div className="mb-1" style={{ fontSize: '13px' }}>
          <a href="#">Technology</a>
          <span className="px-1">/</span>
          <span>January 01, 2045</span>
        </div>
        <a className="h6 m-0" href="#">Lorem ipsum dolor sit amet consec adipis elit</a>
      </div>
    </div>
    <div className="d-flex mb-3">
      <img src="img/news-100x100-4.jpg" alt="Thumbnail" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      <div className="w-100 d-flex flex-column justify-content-center bg-light px-3" style={{ height: '100px' }}>
        <div className="mb-1" style={{ fontSize: '13px' }}>
          <a href="#">Technology</a>
          <span className="px-1">/</span>
          <span>January 01, 2045</span>
        </div>
        <a className="h6 m-0" href="#">Lorem ipsum dolor sit amet consec adipis elit</a>
      </div>
    </div>
                    </div>
                    </>
  )
}

export default PopularNews