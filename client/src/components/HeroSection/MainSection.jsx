import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import carouselImg1 from '../../assets/carousel/carousel-img-1.jpg';
import carouselImg2 from '../../assets/carousel/carousel-img-2.jpg';
import carouselImg3 from '../../assets/carousel/carousel-img-3.jpg';
import carouselImg4 from '../../assets/carousel/carousel-img-4.jpeg';

const MainSection = () => {
  const [textRef, textInView] = useInView({ triggerOnce: true });
  const [imgRef, imgInView] = useInView({ triggerOnce: true });

  const textAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: textInView ? 1 : 0, y: textInView ? 0 : 50 },
    transition: { duration: 1 }
  };

  const imgAnimation = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: imgInView ? 1 : 0, y: imgInView ? 0 : -50 },
    transition: { duration: 1 }
  };

  const images = [carouselImg1, carouselImg2, carouselImg3, carouselImg4];

  return (
    <section className="relative text-center overflow-hidden">
      {/* For devices smaller than 1024px, text on top of carousel */}
      <div className="lg:hidden">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 p-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Your Trusted Financial Partner
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Expert Solutions for Your Accounting and Tax Needs
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#F5F5F5] text-black px-6 py-3 text-lg font-semibold rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:bg-black hover:text-white hover:shadow-lg hover:scale-105"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact Us
          </a>
        </div>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          interval={3000}
          transitionTime={600}
          className="h-[450px] sm:h-[550px]"
          renderArrowPrev={() => null}
          renderArrowNext={() => null} 
          swipeable={true}
        >
          {images.map((img, index) => (
            <div key={index} className="text-center bg-cover bg-center h-[450px] sm:h-[550px]" style={{ backgroundImage: `url(${img})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* For larger devices (1024px and up), text on left and carousel on right */}
      <div className="hidden lg:flex lg:flex-row-reverse items-center bg-gradient-to-r from-[#F5F5F5] via-[#FFFFFF] to-[#F5F5F5] px-16 pt-16 shadow-xl">
        <motion.div
          className="w-1/2 relative"
          ref={imgRef}
          initial={imgAnimation.initial}
          animate={imgAnimation.animate}
          transition={imgAnimation.transition}
        >
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            interval={3000}
            transitionTime={600}
            className="h-[540px] rounded-tl-[40px] rounded-tr-[40px] overflow-hidden shadow-2xl"
            renderArrowPrev={() => null}
            renderArrowNext={() => null} 
            swipeable={true}
          >
            {images.map((img, index) => (
              <div key={index} className="relative text-center bg-cover bg-center h-[540px] overflow-hidden" style={{ backgroundImage: `url(${img})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
            ))}
          </Carousel>
        </motion.div>
        <motion.div
          className="w-1/2 text-left text-black p-8 space-y-6"
          ref={textRef}
          initial={textAnimation.initial}
          animate={textAnimation.animate}
          transition={textAnimation.transition}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800 leading-tight">
            Your Trusted Financial Partner
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8">Expert Solutions for Your Accounting and Tax Needs</p>
          <a
            href="#contact"
            className="inline-block bg-[#FFD700] text-black px-6 py-3 text-lg font-semibold rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:bg-black hover:text-white hover:shadow-lg hover:scale-105"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default MainSection;
