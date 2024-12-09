import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
import list from "../../public/list.json";

function Freebook() {
  const filterData = list.filter((data) => data.category === "free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p className="text-gray-600 text-base pb-4">
            Explore our carefully curated collection of free courses designed to
            empower learners with valuable skills and knowledge. Whether you're
            a beginner or looking to enhance your expertise, these courses are
            tailored to help you achieve your goals without any cost. Start your
            learning journey today!
          </p>
        </div>

        <div className="mt-6">
          <Slider {...settings}>
            {filterData.map((item) => (
              <div className="p-4" key={item.id}>
                <Cards item={item} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
