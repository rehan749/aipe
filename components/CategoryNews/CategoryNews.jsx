import React from 'react'

const CategoryNews = () => {
  return (
    <div className="container-fluid">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 py-3">
        <div className="bg-light py-2 px-4 mb-3">
          <h3 className="m-0">Business</h3>
        </div>
        <div className="owl-carousel owl-carousel-3 carousel-item-2 position-relative">
          {businessData.map((item) => (
            <div key={item.id} className="position-relative">
              <img className="img-fluid w-100" src={item.image} />
              <div className="overlay position-relative bg-light">
                <div className="mb-2" style={{ fontSize: "13px" }}>
                  <a href="#">{item.category}</a>
                  <span className="px-1">/</span>
                  <span>{item.post_date}</span>
                </div>
                <a className="h4 m-0" href="#">
                  {item.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-6 py-3">
        <div className="bg-light py-2 px-4 mb-3">
          <h3 className="m-0">Technology</h3>
        </div>
        <div className="owl-carousel owl-carousel-3 carousel-item-2 position-relative">
          {technologyData.map((item) => (
            <div key={item.id} className="position-relative">
              <img className="img-fluid w-100" src={item.image} />
              <div className="overlay position-relative bg-light">
                <div className="mb-2" style={{ fontSize: "13px" }}>
                  <a href="#">{item.category}</a>
                  <span className="px-1">/</span>
                  <span>{item.post_date}</span>
                </div>
                <a className="h4 m-0" href="#">
                  {item.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default CategoryNews