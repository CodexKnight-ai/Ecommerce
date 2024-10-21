import React from 'react';

function Hero() {
  return (
    <>
      <div className="w-screen flex h-screen">
        <div className="bg-[#121212] w-[40%]"></div>
        <div className='w-[60%] bg-[url("/heroBg.jpeg")] bg-cover bg-center'>
          You can add content here if needed
        </div>
      </div>
    </>
  );
}

export default Hero;
