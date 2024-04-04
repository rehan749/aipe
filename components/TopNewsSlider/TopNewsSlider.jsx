'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Topnewsslider.css'

const TopNewsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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

  const data = [
    {
      "id": 1,
      "image": "img/top.jpg",
      "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    },
    {
      "id": 2,
      "image": "img/top.jpg",
      "title": "Nulla nec lorem a quam posuere malesuada"
    },
    {
      "id": 3,
      "image": "img/top.jpg",
      "title": "Fusce euismod massa vel tortor vehicula, vel tempor felis volutpat"
    },
    {
      "id": 4,
      "image": "img/top.jpg",
      "title": "Pellentesque sit amet ipsum sit amet elit luctus semper non et leo"
    },
    {
      "id": 5,
      "image": "img/top.jpg",
      "title": "Vivamus eleifend justo nec metus tristique, in pulvinar libero vehicula"
    }
  ];
      
  return (
    <div className="container-fluid py-3">
      <div className="container">
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className="d-flex topnewsslider">
              <img src={item.image} alt="Slider Image" style={{width: '80px' ,height: '80px' ,objecFit:'cover'}} />
              <div className="d-flex align-items-center bg-light px-3" style={{ height: '80px' }}>
                <a className="text-secondary font-weight-semi-bold" href="#">{item.title}</a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopNewsSlider;
