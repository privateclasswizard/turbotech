import React, { useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

import image1 from "../../assets/img/1.jpg";
import image2 from "../../assets/icon/icon.svg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/Carrosel1.css";

const Carousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="SlideCard">
      <Slider ref={sliderRef} {...settings} className="slider">
        <motion.div className="card">
          <motion.div className="cards">
            <img src={image1} alt="" />
            <h2 className="slide_title">Titulo da imagem</h2>
            <div className="divcomboslide1">
              <ul>
                <li>
                  <img src={image2} />
                  <div className="text-container">
                    <p className="slide_text">
                      Mauris a odio at purus faucibus laoreet. Nam est est, a
                      nibh vel, tempor tempor
                    </p>
                  </div>
                </li>
                <li>
                  <img src={image2} />
                  <div className="text-container">
                    <p className="slide_text">Dolor sit amet, consectetur.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="card">
          <motion.div className="cards">
            <img src={image1} alt="" />
            <h2 className="slide_title">Titulo da imagem</h2>
            <div className="divcomboslide1">
              <ul>
                <li>
                  <img src={image2} />
                  <div className="text-container">
                    <p className="slide_text">
                      Mauris a odio at purus faucibus laoreet. Nam est est, a
                      nibh vel, tempor tempor
                    </p>
                  </div>
                </li>
                <li>
                  <img src={image2} />
                  <div className="text-container">
                    <p className="slide_text">Dolor sit amet, consectetur.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="card">
          <motion.div className="cards">
            <img src={image1} alt="" />
            <h2 className="slide_title">Titulo da imagem</h2>
            <div className="divcomboslide1">
              <ul>
                <li>
                  <img src={image2} />
                  <div className="text-container">
                    <p className="slide_text">
                      Mauris a odio at purus faucibus laoreet. Nam est est, a
                      nibh vel, tempor tempor
                    </p>
                  </div>
                </li>
                <li>
                  <img src={image2} />
                  <div className="text-container">
                    <p className="slide_text">Dolor sit amet, consectetur.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="card">
          <motion.div className="cards">
            <img src={image1} alt="" />
            <h2 className="slide_title">Titulo da imagem</h2>
            <div className="divcomboslide1">
              <ul>
                <li>
                  <img src={image2} />
                  <div className="text-container">
                    <p className="slide_text">
                      Mauris a odio at purus faucibus laoreet. Nam est est, a
                      nibh vel, tempor tempor
                    </p>
                  </div>
                </li>
                <li>
                  <img src={image2} />
                  <div className="text-container">
                    <p className="slide_text">Dolor sit amet, consectetur.</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </Slider>
    </div>
  );
};
export default Carousel;
