import React from 'react';
import logofooter from '../assets/logo-xl.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
const Footer = () => {
  return (
    <div className="bg-[#244d3f] mt-10">
      <div className="w-10/12 mx-auto flex flex-col justify-center items-center space-y-3">
        <img className="mt-10" src={logofooter} alt="" />
        <p className="text-white">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <h2 className="text-white text-[20px]">Social Links</h2>
        <ul className="flex justify-center gap-3">
          <li>
            <img src={facebook} alt="" />
          </li>
          <li>
            <img src={instagram} alt="" />
          </li>
          <li>
            <img src={twitter} alt="" />
          </li>
        </ul>
        <hr className="w-full border-white/50 my-4" />
        <div className="flex w-full justify-between mb-8">
          <p className="text-white">© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-5">
            <p className="text-white">Privacy Policy</p>
            <p className="text-white">Terms of Service</p>
            <p className="text-white">Cookies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;