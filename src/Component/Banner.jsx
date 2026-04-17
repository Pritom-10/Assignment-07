import React from 'react';
import plus from '../assets/plus.png'
const Banner = () => {
  return (
    <div className="w-8/12 text-center space-y-3 mt-12 mx-auto">
      <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
      <p className="text-[##64748b]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>
      <button className="btn bg-[#244d3f]">
        <img src={plus} alt="" />
        <span className="text-white">Add a Friends</span>
      </button>
    </div>
  );
};

export default Banner;