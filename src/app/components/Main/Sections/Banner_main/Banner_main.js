import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Banner_main.scss";
import Arrow from "../../Arrow/Arrow";
import { Link } from "react-router-dom";

function BannerMain({ product }) {
  const dispatch = useDispatch();
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      title: " Phantom 4 Pro V2.0",
      description:
        "Featuring a 1-inch CMOS sensor that can shoot 4K/60fps videos and 20MP photos the Phantom 4 Pro V2.0 grants filmmakers absolute creative freedom.  A wide array of intelligent features makes flying that much easier. The Phantom 4 Pro V2.0 is a complete aerial imaging solution, designed for the professional creator.",
      oldPrice: "3400 $",
      newPrice: "3299 $",
      validOffer: "The offer is valid from 25.03 to 29.04",
      imagePath:
        "/img/mainbanner/mavic.png",
      imagePathDesktop: "/img/mainbanner/mavic-big.png",
      url: "/quadcopters/66128153c6b6a27a34ab2967/black", //  перехід на стор цього товару
    },
    {
      title: "Apple MacBook Pro 15.3",
      description:
        "The MacBook Pro 15 is one of the benchmarks for power, quality, compact and easy-to-use ultrabook. High performance, low weight and excellent autonomy. This model is fast and quite easy to use. The classic design, made of excellent aluminum in space gray color, will certainly suit any design. The case is resistant to scratches and damage. Feel free to take it with you everywhere!",
      oldPrice: "2149 $",
      newPrice: "2099 $",
      validOffer: "The offer is valid from 25.03 to 29.04",
      imagePath: "/img/mainbanner/mac15sm.png",
      imagePathDesktop: "/img/mainbanner/mac15p.png",
      url: "/laptops/6602e11894ad092ebc80fb6a/starlight",
    },
    {
      title: "Apple Watch Series 9 GPS",
      description:
        "Apple Watch can do what your other devices can’t because it’s on your wrist. When you wear it, you get a fitness partner that measures all the ways you move, meaningful health insights, innovative safety features, and a connection to the people you care about most.",
      oldPrice: "399 $",
      newPrice: "378 $",
      validOffer: "The offer is valid from 05.03 to 31.03",
      imagePath: "/img/mainbanner/appwatchall.png",
      imagePathDesktop: "/img/mainbanner/applewatchbigbanner.png",
      url: "/smartwatches/65ea3be2c0ec8c764e385d64/red",
    },
  ]; //add sliders

  return (
    <div className="banner_main slider-container">
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide, index) => (
          <div key={index} className={`banner_main-slider-item banner_main-slider-item-${index + 1}`}>
            <h1 className="banner_main-title">{slide.title}</h1>
            <h4 className="banner_main-descr">{slide.description}</h4>
            <div className="arrow-svg-container-next">
              <Arrow direction="next" onClick={() => sliderRef.current.slickPrev()} />
            </div>

            <div className="banner_main-img-container">
              <Link to={slide.url}>
                <img className="banner_main-img" src={slide.imagePath} alt={slide.title} />
                <img className="banner_main-img-desktop" src={slide.imagePathDesktop} alt={slide.title} />
              </Link>
            </div>
            <div className="arrow-svg-container-prev">
              <Arrow direction="prev" onClick={() => sliderRef.current.slickNext()} />
            </div>
            <div className="banner_main-price">
              <div className="banner_main-old-price">{slide.oldPrice}</div>
              <div className="banner_main-new-price">{slide.newPrice}</div>
            </div>
            <p className="banner_main-text">{slide.validOffer}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default BannerMain;
