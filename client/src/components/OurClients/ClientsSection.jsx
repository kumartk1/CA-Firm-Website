import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import boi from '../../assets/clients/boi.png';
import cargill from '../../assets/clients/cargill.png';
import sbi from '../../assets/clients/sbi.png';
import canara from '../../assets/clients/canara.png';
import ubi from '../../assets/clients/ubi.png';

const ClientsSection = () => {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'ease-in-out',
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
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

    const textVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
    };

    const logoVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <div className="bg-gray-100 py-10 overflow-hidden" ref={ref}>
            <motion.h2
                className="text-center text-[28px] md:text-4xl font-extrabold mb-2 text-gray-900"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={textVariants}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Trusted by Leading Companies
            </motion.h2>
            <motion.p
                className="my-4 text-[16px] md:text-lg text-center text-gray-700 max-w-4xl mx-auto"
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={textVariants}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                We collaborate with top companies to drive innovation and deliver exceptional results.
            </motion.p>
            <div className="container mx-auto px-4 mt-9">
                <Slider {...settings}>
                    {[boi, cargill, sbi, canara, ubi].map((logo, index) => (
                        <div className="px-2" key={index}>
                            <motion.div
                                className="flex justify-center items-center h-24"
                                initial="hidden"
                                animate={inView ? "visible" : "hidden"}
                                variants={logoVariants}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                            >
                                <img src={logo} alt={`Client ${index + 1}`} className="h-16 md:h-20 w-auto object-contain" />
                            </motion.div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ClientsSection;
