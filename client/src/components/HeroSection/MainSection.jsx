import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
    <section className="relative overflow-hidden text-center">
      {/* For devices smaller than 1024px, text on top of carousel */}
      <div className="lg:hidden">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-white">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Your Trusted Financial Partner
          </h2>
          <p className="mb-8 text-lg md:text-xl lg:text-2xl">
            Expert Solutions for Your Accounting and Tax Needs
          </p>
          <Link
            to="/contact" // Added Link to route to Contact page
            className="inline-block bg-[#F5F5F5] text-black px-6 py-3 text-lg font-semibold rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:bg-black hover:text-white hover:shadow-lg hover:scale-105"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact Us
          </Link>
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
      <div className="hidden lg:flex lg:flex-row-reverse items-center bg-gradient-to-r from-[#F5F5F5] via-[#FFFFFF] to-[#F5F5F5] px-16 lg:pt-5 pt-16 shadow-xl">
        <motion.div
          className="relative w-1/2"
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
            className="h-[600px] rounded-tl-[40px] rounded-tr-[40px] overflow-hidden shadow-2xl"
            renderArrowPrev={() => null}
            renderArrowNext={() => null}
            swipeable={true}
          >
            {images.map((img, index) => (
              <div key={index} className="relative text-center bg-cover bg-center h-[600px] overflow-hidden" style={{ backgroundImage: `url(${img})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
            ))}
          </Carousel>
        </motion.div>
        <motion.div
          className="w-1/2 p-8 space-y-6 text-left text-black"
          ref={textRef}
          initial={textAnimation.initial}
          animate={textAnimation.animate}
          transition={textAnimation.transition}
        >
          <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-800 md:text-5xl">
            Your Trusted Financial Partner
          </h2>
          <p className="mb-8 text-xl md:text-2xl lg:text-2xl">Expert Solutions for Your Accounting and Tax Needs</p>
          <Link
            to="/contact" // Updated Link to redirect to Contact page
            className="inline-block bg-[#FFD700] text-black px-6 py-3 text-[16px] font-semibold rounded-full shadow-md transition-all duration-300 ease-in-out transform hover:bg-black hover:text-white hover:shadow-lg hover:scale-105"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default MainSection;
