import React from "react";
import { CgMenuRight } from "react-icons/cg";

function Header() {
  return (
    <header className="h-[5rem] md:h-[5.5rem] lg:h-[6.5rem] xl:h-[7rem] 2xl:h-[8rem]">
      <div className="header-container h-full w-full flex items-center justify-between px-[0.5rem] md:px-[1.2rem] lg:px-[2rem] xl:px-[2.5rem] 2xl:px-[4rem]">
        <div className="logo lg:order-2 lg:ml-[-2rem]">
          <div className="logo-container font-NATS text-[hsl(0,0%,13%)] relative">
            <span className="absolute uppercase tracking-widest font-thin top-[-40%] after:absolute after:w-[2.5rem] after:h-[1px] after:bg-[#a66d03] after:top-[80%] after:left-[10%] md:text-[1.1rem] md:top-[-35%] md:after:w-[3.5rem] lg:after:w-[4rem] lg:text-[1.2rem]">
              The
            </span>
            <h2 className="tracking-widest mb-[-1rem] ml-[0.8rem] text-[1.6rem] md:text-[2rem] lg:text-[1.8rem]">
              FORMIDABLE
            </h2>
          </div>
        </div>
        <button
          type="button"
          className="menu text-[1.8rem] text-[hsl(0,0%,13%)] mb-[-0.8rem] md:text-[2rem] lg:order-3"
        >
          <CgMenuRight />
        </button>
        <div className="hidden lg:block">
          <button
            type="button"
            className="text-[1.2rem] tracking-widest uppercase font-NATS xl:text-[1.4rem]"
          >
            Tutorial
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
