'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './category.css'


const CategoryNews2 = () => {

  // Entertainment News
const EntertainmentData = [
  {
    "id": 1,
    "image": "img/entertainment.jpg",
    "post_date": "Jan 1, 2024",
    "category": "Entertainment",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "id": 2,
    "image": "img/entertainment.jpg",
    "post_date": "Jan 2, 2024",
    "category": "Entertainment",
    "title": "Nulla nec lorem a quam posuere malesuada"
  },
  {
    "id": 3,
    "image": "img/entertainment.jpg",
    "post_date": "Jan 3, 2024",
    "category": "Entertainment",
    "title": "Fusce euismod massa vel tortor vehicula, vel tempor felis volutpat"
  },
  {
    "id": 4,
    "image": "img/entertainment.jpg",
    "post_date": "Jan 4, 2024",
    "category": "Entertainment",
    "title": "Pellentesque sit amet ipsum sit amet elit luctus semper non et leo"
  },
  {
    "id": 5,
    "image": "img/entertainment.jpg",
    "post_date": "Jan 5, 2024",
    "category": "Entertainment",
    "title": "Vivamus eleifend justo nec metus tristique, in pulvinar libero vehicula"
  }
];

// Sport News
const SportData = [
  {
    "id": 1,
    "image": "img/sport.jpg",
    "post_date": "Jan 1, 2024",
    "category": "Sport",
    "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    "id": 2,
    "image": "img/sport.jpg",
    "post_date": "Jan 2, 2024",
    "category": "Sport",
    "title": "Nulla nec lorem a quam posuere malesuada"
  },
  {
    "id": 3,
    "image": "img/sport.jpg",
    "post_date": "Jan 3, 2024",
    "category": "Sport",
    "title": "Fusce euismod massa vel tortor vehicula, vel tempor felis volutpat"
  },
  {
    "id": 4,
    "image": "img/sport.jpg",
    "post_date": "Jan 4, 2024",
    "category": "Sport",
    "title": "Pellentesque sit amet ipsum sit amet elit luctus semper non et leo"
  },
  {
    "id": 5,
    "image": "img/sport.jpg",
    "post_date": "Jan 5, 2024",
    "category": "Sport",
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
          <h3 className="m-0">Entertainment</h3>
        </div>
        <div className="owl-carousel owl-carousel-3 carousel-item-2 position-relative">
        <Slider {...settings}>
          {EntertainmentData.map((item) => (
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
          <h3 className="m-0">Sports</h3>
        </div>
     
     
        <div className="owl-carousel owl-carousel-3 carousel-item-2 position-relative">
        <Slider {...settings}>
          {SportData.map((item) => (
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

export default CategoryNews2