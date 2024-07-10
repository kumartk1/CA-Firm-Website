import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Nidhi Manish Rathi & Co.</h2>
        <p className="text-xl mb-4 mt-8 text-justify px-4 md:px-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla porttitor accumsan tincidunt. Cras ultricies ligula sed magna dictum porta.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded transition-transform transform hover:scale-105">Read More</button>
      </div>
    </section>
  );
}

export default About;
