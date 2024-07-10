import React from 'react';
import backgroundImg from '../../assets/background-img.jpg';

const About = () => {
  return (
    <section className="bg-white py-8 mt-0">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center md:justify-between">
          <div className="md:w-1/2 md:pl-8 md:order-2">
            <img
              src={backgroundImg}
              alt="Background"
              className="rounded-xl shadow-lg mx-auto md:mx-0 hidden md:block"
              style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }}
            />
          </div>
          <div className="md:w-1/2 md:pr-8 md:order-1">
            <h2 className="text-[28px] md:text-4xl font-bold mb-4 text-center">Nidhi Manish Rathi & Co.</h2>
            <p className="text-[16px] md:text-xl mb-4 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta.
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-sm  shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-black hover:text-white hover:shadow-lg block mx-auto md:mx-0">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
