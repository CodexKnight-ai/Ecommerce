import React from "react";

function Hero() {
  return (
    <header className="w-screen flex h-screen">
      <div className="bg-[#121212] w-[30%]" aria-hidden="true"></div>
      <div
        className='w-[70%] bg-[url("/heroBg.jpeg")] bg-cover bg-center'
        role="img"
        aria-label="Background image of steel art"
      >
        <div className="rounded-lg shadow-black shadow-xl absolute top-[55%] left-48  border-[#969595] border-2  bg-[#969595e4] h-fit w-1/3 p-5 flex flex-col gap-4">
          <h1 className="text-5xl font-bold text-white">
            PRITHVI STEEL ART
          </h1>
          <article className="text-wrap w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            nesciunt voluptate saepe eligendi possimus, sequi earum vel suscipit
            dolor, ipsa quisquam. Et quam nulla temporibus maiores perspiciatis
            laudantium, omnis optio obcaecati molestiae aliquid in dolor. Dolore
            culpa accusantium impedit explicabo totam maiores sunt quod, magni
            dolorum in eligendi dignissimos laborum?
          </article>
        </div>
      </div>
    </header>
  );
}

export default Hero;
