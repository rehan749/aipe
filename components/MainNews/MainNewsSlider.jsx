
'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './mainnews.css'

const MainNewsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      autoplaySpeed: 3000,
        
      };

 const data =   [
        {
          "id": 1,
          "image": "img/menu.jpg",
          "category": "Technology",
          "subcategory": "Gadgets",
          "post_date": "2024-04-04",
          "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          "id": 2,
          "image": "img/menu.jpg",
          "category": "Business",
          "subcategory": "Finance",
          "post_date": "2024-04-04",
          "title": "Nulla nec lorem a quam posuere malesuada"
        },
        {
          "id": 3,
          "image": "img/menu.jpg",
          "category": "Science",
          "subcategory": "Space Exploration",
          "post_date": "2024-04-03",
          "title": "Fusce euismod massa vel tortor vehicula, vel tempor felis volutpat"
        },
        {
          "id": 4,
          "image": "img/menu.jpg",
          "category": "Entertainment",
          "subcategory": "Movies",
          "post_date": "2024-04-02",
          "title": "Pellentesque sit amet ipsum sit amet elit luctus semper non et leo"
        },
        {
          "id": 5,
          "image": "img/menu.jpg",
          "category": "Sports",
          "subcategory": "Football",
          "post_date": "2024-04-01",
          "title": "Vivamus eleifend justo nec metus tristique, in pulvinar libero vehicula"
        },
        {
          "id": 6,
          "image": "img/menu.jpg",
          "category": "Health",
          "subcategory": "Fitness",
          "post_date": "2024-03-31",
          "title": "Duis et urna in massa varius interdum sit amet non magna"
        }
      ]
      
  return (
    <div className="container-fluid py-3">
      <div className="container">
        <div className="row">
          
        <div className="col-lg-8">
  <div className="owl-carousel owl-carousel-2 carousel-item-1 position-relative mb-3 mb-lg-0">
    <Slider {...settings}>
      {data.map((item) => (
        <div
          key={item.id} // Don't forget to provide a unique key for each item
          className="position-relative overflow-hidden"
          style={{ height: "435px" }}
        >
          <img
            className="img-fluid h-100"
            src={item.image} // Remove curly braces around item.image
            style={{ objectFit: "cover" }}
          />
          <div className="overlay">
            <div className="mb-1">
              <a className="text-white mx-1 category" href="#">
                {item.category}
              </a>
              <a className="text-white subcategory" href="#">
                {item.subcategory}{" "}
              </a>
              <span className="px-2 text-white">/</span>
              <a className="text-white post-date" href="#">
                {item.post_date}
              </a>
            </div>
            <a className="h2 m-0 title text-white " href="#">
              {item.title}
            </a>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>


          <div className="col-lg-4">
            <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
              <h4 className="m-0 font-bold">Categories</h4>
              <a
                className="text-secondary font-weight-medium text-decoration-none"
                href="#"
              >
                View All
              </a>
            </div>
            <div
              className="position-relative overflow-hidden mb-3"
              style={{ height: "80px" }}
            >
              <img
                className="img-fluid w-100 h-100"
                src="img/cat-500x80-1.jpg"
                style={{ objectFit: "cover" }}
              />
              <a
                href="#"
                className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none"
              >
                Business
              </a>
            </div>
            <div
              className="position-relative overflow-hidden mb-3"
              style={{ height: "80px" }}
            >
              <img
                className="img-fluid w-100 h-100"
                src="img/cat-500x80-2.jpg"
                style={{ objectFit: "cover" }}
              />
              <a
                href="#"
                className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none"
              >
                Technology
              </a>
            </div>
            <div
              className="position-relative overflow-hidden mb-3"
              style={{ height: "80px" }}
            >
              <img
                className="img-fluid w-100 h-100"
                src="img/cat-500x80-3.jpg"
                style={{ objectFit: "cover" }}
              />
              <a
                href="#"
                className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none"
              >
                Entertainment
              </a>
            </div>
            <div
              className="position-relative overflow-hidden"
              style={{ height: "80px" }}
            >
              <img
                className="img-fluid w-100 h-100"
                src="img/cat-500x80-4.jpg"
                style={{ objectFit: "cover" }}
              />
              <a
                href="#"
                className="overlay align-items-center justify-content-center h4 m-0 text-white text-decoration-none"
              >
                Sports
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNewsSlider;
