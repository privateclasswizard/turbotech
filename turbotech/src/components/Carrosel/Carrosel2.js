import React, { useRef } from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

import image1 from "../../assets/img/1.jpg";
import element from "../../assets/icon/element.svg";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/Slide.css";

const Carousel = () => {
  const sliderRef = useRef(null);

  const settings = {

  dots: true,
  infinite: true, 
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
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
      <motion.div className="cardFeedback">
          <motion.div className="cardsFeedback">
            <img src={image1} alt="" className="imgFeedback" />
            <p className="slide_titulo">
            Nome 
            </p>
            <p className="slide_subtitulo">
            cargo/empresa
            </p>
            <p className="slide_text">
            Mauris a odio at purus faucibus laoreet. Nam est est, a nibh vel, tempor tempor 
            </p>
            <img src={element} className="elementimg"></img>
          </motion.div>
        </motion.div>
        <motion.div className="cardFeedback">
          <motion.div className="cardsFeedback">
            <img src={image1} alt="" className="imgFeedback" />
            <p className="slide_titulo">
            Nome 
            </p>
            <p className="slide_subtitulo">
            cargo/empresa
            </p>
            <p className="slide_text">
            Mauris a odio at purus faucibus laoreet. Nam est est, a nibh vel, tempor tempor 
            </p>
            <img src={element} className="elementimg"></img>
          </motion.div>
        </motion.div>
        <motion.div className="cardFeedback">
          <motion.div className="cardsFeedback">
            <img src={image1} alt="" className="imgFeedback" />
            <p className="slide_titulo">
            Nome 
            </p>
            <p className="slide_subtitulo">
            cargo/empresa
            </p>
            <p className="slide_text">
            Mauris a odio at purus faucibus laoreet. Nam est est, a nibh vel, tempor tempor 
            </p>
            <img src={element} className="elementimg"></img>
          </motion.div>
        </motion.div>
        <motion.div className="cardFeedback">
          <motion.div className="cardsFeedback">
            <img src={image1} alt="" className="imgFeedback" />
            <p className="slide_titulo">
            Nome 
            </p>
            <p className="slide_subtitulo">
            cargo/empresa
            </p>
            <p className="slide_text">
            Mauris a odio at purus faucibus laoreet. Nam est est, a nibh vel, tempor tempor 
            </p>
            <img src={element} className="elementimg"></img>
          </motion.div>
        </motion.div>
      
        
        
      </Slider>
    </div>
  );
};
export default Carousel;