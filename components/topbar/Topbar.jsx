import React from 'react'

import CurrentDate from '../Date'
import './topbar.css';
import TopNewsSlider from '../TopNewsSlider/TopNewsSlider';

const Topbar = () => {
  return (
   
   
    <div className="container-fluid">
      <div className="row align-items-center  px-lg-5" style={{backgroundColor:'#343a40'}}>
        <div className="col-12 col-md-8">
          <div className="d-flex justify-content-between">
            <div className="bg-danger text-white text-center py-2" style={{ width: '100px' }}>
                <img src="img/trending.png" className='px-2' alt="tranding"/>
                <span>Tranding</span>
            </div>
            <div className="owl-carousel owl-carousel-1 tranding-carousel position-relative d-inline-flex align-items-center ml-3" style={{ width: 'calc(100% - 100px)', paddingLeft: '90px' }}>
              <div className="text-truncate"><a className="text-white text-uppercase font-weight-semi-bold" href="">Labore sit justo amet eos sed, et sanctus dolor diam eos</a></div>
              {/* <div className="text-truncate"><a className="text-secondary" href="">Gubergren elitr amet eirmod et lorem diam elitr, ut est erat Gubergren elitr amet eirmod et lorem diam elitr, ut est erat</a></div> */}
            </div>
          </div>
        </div>
        <div className="col-md-4 text-right d-none d-md-block">
         <CurrentDate/>
        </div>
      </div>
      <div className="row align-items-center py-2 px-lg-5">
        <div className="col-lg-4">
          <a href="" className="navbar-brand d-none d-lg-block">
            <img src="img/logo.png" style={{height:'60px',transform: 'scale(1.2)'}} alt="" />
          </a>
        </div>
        <div className="col-lg-8 text-center text-lg-right">
          <img className="img-fluid" src="img/ads-700x70.jpg" alt="" />
        </div>
      </div>
    </div>
 
  )
}

export default Topbar