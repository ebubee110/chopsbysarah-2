import { GiKnifeFork } from 'react-icons/gi';
import { MdWhatsapp } from 'react-icons/md';
import React from 'react';
import { TbSparkles } from 'react-icons/tb';

function Hero() {
  return (
    <section
      id="home"
      className=" mt-10 lg:mx-10 lg:flex lg:flex-row lg:mt-20 h-screen"
    >
      <div className="flex-2">
        <p className="flex px-5 text-red-400 mb-7 gap-0.5">
          <TbSparkles size={30} />
          Fresh & Delicious
        </p>
        <h2 className=" px-5 text-5xl text-left font-bold lg:text-6xl">
          Welcome to <br className="hidden lg:block" />
          <span className="text-emerald-700">ChopsBySarah </span>
        </h2>
        <p className=" px-5 text-gray-950 mt-4 lg:text-left  lg:pr-52 lg:mt-8">
          From delicious cakes, pastries, drinks, and catering made with love to
          crispy delights and sweet indulgences, we’ve got something to satisfy
          every craving.
        </p>
        <div className="flex flex-col-reverse justify-center items-center text-center gap-4 mt-9 lg:flex-row-reverse lg:justify-end px-5 lg:mt-14">
          <a
            href="https://wa.me/2348123456789?text=Hi%20I%20want%20to%20place%20an%20order!"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-white hover:bg-amber-500 px-5 py-1.5 rounded-sm w-80  font-semibold text-black hover:text-white flex justify-center gap-2 items-center  lg:w-fit lg:px-5 lg:py-2.5"
          >
            <MdWhatsapp size={30} /> <span> Order on WhatsApp</span>{' '}
          </a>
          <a
            href="#products"
            className=" bg-emerald-700 px-10 py-1.5 rounded-sm text-white w-80 font-semibold  flex justify-center gap-2 items-center text-center lg:w-fit lg:px-5 lg:py-2.5"
          >
            <GiKnifeFork size={20} /> Browes Menu
          </a>
        </div>
      </div>
      <div className=" px-5 flex justify-center  items-center flex-1 lg:items-start">
        {' '}
        <img
          src="./public/Images/Hero-pic.jpg"
          alt="foods"
          className="flex justify-center items-center rounded-4xl mt-0 w-full h-96 lg:mt-0  lg:h-96 object-cover "
        />
      </div>
    </section>
  );
}

export default Hero;
