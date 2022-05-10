import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons//fa";

function Footer() {
  return (
    <footer className="min-h-[40vh] flex flex-col items-center justify-around mt-[1rem] md:mt-[3rem] xl:flex-row-reverse xl:min-h-[10vh]">
      <div className="copyrights order-3 font-NATS text-[1.1rem] text-[#222] font-semibold">
        © 2022 Qode Interactive, All Rights Reserved
      </div>
      <nav className="text-center font-Gemunu text-[1.3rem] font-normal xl:order-2">
        <ul className="flex flex-col gap-[15px] xl:flex-row xl:gap-[20px]">
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="/Recipes">Recipes</a>
          </li>
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="social-media flex items-center gap-[20px] text-[1.6rem] xl:order-1">
        <a href="insta" className="insta text-red-400" target="_blank">
          <FaInstagram />
        </a>
        <a href="twitter" className="twitter text-blue-400" target="_blank">
          <FaTwitter />
        </a>
        <a href="facebook" className="facebook text-blue-700" target="_blank">
          <FaFacebook />
        </a>
        <a href="youtube" className="youtube text-red-600" target="_blank">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
