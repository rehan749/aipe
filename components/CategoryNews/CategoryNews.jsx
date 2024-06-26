'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './category.css'


const CategoryNews = () => {

  // Business News
const businessData = [
  {
    "id": 1,
    "image": "img/business.jpg",
    "post_date": "January 1, 2024",
    "category": "Business",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "id": 2,
    "image": "img/business.jpg",
    "post_date": "January 2, 2024",
    "category": "Business",
    "title": "Nulla nec lorem a quam posuere malesuada"
  },
  {
    "id": 3,
    "image": "img/business.jpg",
    "post_date": "January 3, 2024",
    "category": "Business",
    "title": "Fusce euismod massa vel tortor vehicula, vel tempor felis volutpat"
  },
  {
    "id": 4,
    "image": "img/business.jpg",
    "post_date": "January 4, 2024",
    "category": "Business",
    "title": "Pellentesque sit amet ipsum sit amet elit luctus semper non et leo"
  },
  {
    "id": 5,
    "image": "img/business.jpg",
    "post_date": "January 5, 2024",
    "category": "Business",
    "title": "Vivamus eleifend justo nec metus tristique, in pulvinar libero vehicula"
  }
];

// Technology News
const technologyData = [
  {
    "id": 1,
    "image": "img/tech.jpeg",
    "post_date": "January 1, 2024",
    "category": "Technology",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "id": 2,
    "image": "img/tech.jpeg",
    "post_date": "January 2, 2024",
    "category": "Technology",
    "title": "Nulla nec lorem a quam posuere malesuada"
  },
  {
    "id": 3,
    "image": "img/tech.jpeg",
    "post_date": "January 3, 2024",
    "category": "Technology",
    "title": "Fusce euismod massa vel tortor vehicula, vel tempor felis volutpat"
  },
  {
    "id": 4,
    "image": "img/tech.jpeg",
    "post_date": "January 4, 2024",
    "category": "Technology",
    "title": "Pellentesque sit amet ipsum sit amet elit luctus semper non et leo"
  },
  {
    "id": 5,
    "image": "img/tech.jpeg",
    "post_date": "January 5, 2024",
    "category": "Technology",
    "title": "Vivamus eleifend justo nec metus tristique, in pulvinar libero vehicula"
  }
];
const settings = {
 
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 2000,
  // cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
  return (
    <div className="container-fluid">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 py-3">
       
       
        <div className="bg-light py-2 px-4 mb-3">
          <h3 className="m-0">Business</h3>
        </div>
        <div className="owl-carousel owl-carousel-3 carousel-item-2 position-relative">
        <Slider {...settings}>
          {businessData.map((item) => (
            <div key={item.id} className="position-relative">
              <img className="img-fluid w-100" src={item.image} />
              <div className="overlay-1 position-relative bg-light">
                <div className="mb-2" style={{ fontSize: "13px" }}>
                  <a href="#">{item.category}</a>
                  <span className="px-1">/</span>
                  <span>{item.post_date}</span>
                </div>
                <a className=" m-0" href="#">
                  {item.title}
                </a>
              </div>
            </div>
          ))}
           </Slider>
        </div>
      </div>
     
     
     
     
     
     
     
      <div className="col-lg-6 py-3">
        <div className="bg-light py-2 px-4 mb-3">
          <h3 className="m-0">Technology</h3>
        </div>
     
     
        <div className="owl-carousel owl-carousel-3 carousel-item-2 position-relative">
        <Slider {...settings}>
          {technologyData.map((item) => (
            <div key={item.id} className="position-relative">
              <img className="img-fluid w-100" src={item.image} />
              <div className="overlay-1 position-relative bg-light">
                <div className="mb-2" style={{ fontSize: "13px" }}>
                  <a href="#">{item.category}</a>
                  <span className="px-1">/</span>
                  <span>{item.post_date}</span>
                </div>
                <a className=" m-0" href="#">
                  {item.title}
                </a>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default CategoryNews