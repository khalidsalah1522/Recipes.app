import React, { useRef } from "react";
import gsap from "gsap";

function Spinner({ time }) {
  const percent = useRef(null);
  const par = useRef(null);
  let num = 0;

  const timer = setInterval(() => {
    percent.current.style.transform = `translateX(-${100 - num}%)`;
    par.current.innerText = num;
    num += 1;

    if (num > 100) {
      gsap.to(".spinner-container", {
        y: "-100%",
        duration: 0.8,
        delay: 0.4,
        ease: "power4.out",
      });
      gsap.to(".spinner", {
        y: "-100%",
        duration: 0.8,
        delay: 0.8,
        ease: "power4.out",
      });
      gsap.to(".app-container", {
        delay: 1.3,
        display: "block",
      });
      clearInterval(timer);
    }
  }, Math.round(time) / 100);

  return (
    <section className="spinner absolute top-0 left-0 bg-[#fbfbfa] h-screen w-full shadow-md">
      <div className="spinner-container absolute top-0 left-0 bg-white w-full h-full flex flex-col items-center justify-center">
        <div className=".logo relative text-center font-NATS h-[3.5rem] w-[40%]">
          <span className="absolute left-[-10%] top-[-10%] tracking-widest after:absolute after:w-[3rem] after:h-[1.5px] after:bg-[#a66d03] after:top-[80%] after:left-[10%]">
            The
          </span>
          <h2 className="tracking-wider leading-[3.5rem] text-[1.8rem] text-[#222]">
            FORMIDABLE
          </h2>
        </div>
        <div className="percentage w-[70%] overflow-hidden">
          <div
            ref={percent}
            className="w-full translate-x-[-100%] h-[0.18rem] rounded-lg bg-[#222]"
          />
        </div>
        <div className="par w-[70%] text-right text-[#222] mt-[0.2rem]">
          <span ref={par} className="text-[1.05rem] font-medium">
            0
          </span>{" "}
          %
        </div>
      </div>
    </section>
  );
}

export default Spinner;
