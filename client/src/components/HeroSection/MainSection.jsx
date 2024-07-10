import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import carouselImg1 from '../../assets/carousel/carousel-img-1.jpg';
import carouselImg2 from '../../assets/carousel/carousel-img-2.jpg';
import carouselImg3 from '../../assets/carousel/carousel-img-3.jpg';
import carouselImg4 from '../../assets/carousel/carousel-img-4.jpeg';

const MainSection = () => {
  const images = [carouselImg1, carouselImg2, carouselImg3, carouselImg4];

  return (
    <section className="relative text-center h-[450px] sm:h-[550px] lg:h-[650px]">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={600}
        className="h-full"
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="hidden lg:block absolute top-1/2 left-4 z-10 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-3 shadow-md hover:bg-gray-300 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faAngleLeft} className="text-gray-800 text-lg" />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="hidden lg:block absolute top-1/2 right-4 z-10 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-3 shadow-md hover:bg-gray-300 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faAngleRight} className="text-gray-800 text-lg" />
            </button>
          )
        }
        swipeable={true}
      >
        {images.map((img, index) => (
          <div key={index} className="text-center bg-cover bg-center h-[450px] sm:h-[550px] lg:h-[650px]" style={{ backgroundImage: `url(${img})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
          </div>
        ))}
      </Carousel>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h2 className="text-3xl md:text-[45px] lg:text-[55px] font-bold text-white mb-4">Your Trusted Financial Partner</h2>
        <p className="text-xl md:text-[22px] lg:text-2xl text-white mb-8">Expert Solutions for Your Accounting and Tax Needs</p>
        <div className="mt-4">
          <a
            href="#contact"
            className="inline-block bg-[#F5F5F5] text-black px-6 py-3 text-[16px] font-semibold rounded-sm shadow-md transition-all duration-300 ease-in-out transform hover:bg-black hover:text-white hover:shadow-lg hover:scale-105"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
