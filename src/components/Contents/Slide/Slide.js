import React from 'react';
import './Slide.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Slide extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    };
    return (
      <div className="slide-wrapper">
        <Slider {...settings} className="slide">
          <div className="top-img top-img0"> </div>
          <div className="top-img top-img1"> </div>
          <div className="top-img top-img2"> </div>
          <div className="top-img top-img3"> </div>
          <div className="top-img top-img4"> </div>
          <div className="top-img top-img5"> </div>
          <div className="top-img top-img6"> </div>
          <div className="top-img top-img7"> </div>
          <div className="top-img top-img8"> </div>
        </Slider>
        <div className="top-text-container">
          <div className="top-text ht1">
            Hello!<br />I'm Yuga!
          </div>
          <div className="top-text ht2">
            Osaka University stutent
          </div>
        </div>
        <div className="scroll-guid">
          <div className="top-text ht3">
          scroll
          </div>
          <div className="scroll-arrow">
            <div className="top-guid hg1"></div>
            <div className="top-guid hg2"></div>
            <div className="top-guid hg3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
