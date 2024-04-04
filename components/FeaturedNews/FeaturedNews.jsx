'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './FeaturedNews.css'

const FeaturedNews = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
  const data = [
    {
      id: 1,
      image: "img/menu.jpg",
      category: "Technology",

      post_date: "2024-04-04",
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      id: 2,
      image: "img/menu.jpg",
      category: "Business",

      post_date: "2024-04-04",
      title: "Nulla nec lorem a quam posuere malesuada",
    },
    {
      id: 3,
      image: "img/menu.jpg",
      category: "Science",

      post_date: "2024-04-03",
      title:
        "Fusce euismod massa vel tortor vehicula, vel tempor felis volutpat",
    },
    {
      id: 4,
      image: "img/menu.jpg",
      category: "Entertainment",

      post_date: "2024-04-02",
      title:
        "Pellentesque sit amet ipsum sit amet elit luctus semper non et leo",
    },
    {
      id: 5,
      image: "img/menu.jpg",
      category: "Sports",

      post_date: "2024-04-01",
      title:
        "Vivamus eleifend justo nec metus tristique, in pulvinar libero vehicula",
    },
    {
      id: 6,
      image: "img/menu.jpg",
      category: "Health",

      post_date: "2024-03-31",
      title: "Duis et urna in massa varius interdum sit amet non magna",
    },
  ];

  return (
    <div className="container-fluid py-3">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
          <h3 className="m-0">Featured</h3>
          <a
            className="text-secondary font-weight-medium text-decoration-none"
            href=""
          >
            View All
          </a>
        </div>
        <div className="owl-carousel owl-carousel-2 carousel-item-4 position-relative">
        <Slider {...settings}>
  {data.map((item) => (
    <div
      key={item.id}
      className="position-relative card-news overflow-hidden"
      style={{ height: "300px" }}
    >
      <img
        className="img-fluid w-100 h-100"
        src={item.image}
        style={{ objectFit: "cover" }}
      />
      <div className="overlay">
        <div className="mb-1" style={{ fontSize: "13px" }}>
          <a className="text-white" href="#">
            {item.category}
          </a>
          <span className="px-1 text-white">/</span>
          <a className="text-white" href="#">
            {item.post_date}
          </a>
        </div>
        <a className="h4 m-0 text-base text-white" href="#">
          {item.title}
        </a>
      </div>
    </div>
  ))}
  </Slider >
</div>

      </div>
    </div>
  );
};

export default FeaturedNews;
