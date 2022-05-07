import React, { useRef, useEffect } from "react";
import useTouch from "../../hooks/useTouch";

const images = [
  "https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDF8MHx3aGl0ZXw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1569289522127-c0452f372d46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHwxfDB8d2hpdGV8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1650098665386-2b37bbe4e357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGZvb2R8ZW58MHwxfDB8d2hpdGV8&auto=format&fit=crop&w=500&q=60",
];

function Featured() {
  const ref = useRef(null);
  const [down, up, x, ele] = useTouch(null);

  useEffect(() => {
    ele(ref.current);
    console.log(x);
  }, [ele, x]);

  return (
    <div className="feature min-h-screen w-[100%] lg:mt-[4rem]">
      <div className="feature-container h-screen w-[100%] overflow-hidden">
        <h2 className="text-center my-[2rem] font-medium font-NATS text-[2rem] tracking-wider md:text-[2.2rem] xl:text-[3rem] xl:font-thin">
          Featured Posts
        </h2>
        <div
          ref={ref}
          className="slider-container h-[95%] flex w-[300%] lg:w-[100%] overflow-hidden items-center justify-between px-[1.5rem] lg:mt-[4rem] xl:px-[6.5rem] 2xl:px-[12rem] 2xl:mt-[6rem]"
          style={{
            // transform: `translateX(-${x}px)`,
            transition: `transform 0.4s linear`,
          }}
          onTouchStart={(e) => down(e)}
          onTouchEnd={(e) => up(e)}
          role="button"
          // eslint-disable-next-line jsx-a11y/tabindex-no-positive
          tabIndex="1"
        >
          {images.map((src) => (
            <React.Fragment key={src}>
              <div className="img cursor-grabbing select-none h-[100%] w-[33.3333333%] flex-none flex flex-col items-center justify-between lg:w-[30%]">
                <div className="img-container w-[80%] h-[70%] text-center md:w-[60%] lg:w-[100%]">
                  <img src={src} alt="" />
                  <h4 className="mt-[0.5rem] font-semibold text-[1.05rem] text-[#F0C02A] md:text-[1.3rem]">
                    Featured Posts
                  </h4>
                  <p className="text-[#777777] my-[0.5rem] text-[0.9rem] md:text-[1rem] lg:text-[0.9rem]">
                    I`m excited to tell you that I start writing articles about
                    design. Where I`m going to share my experiences. You also
                    get:
                  </p>
                  <p className="font-bold lg:text-[0.9rem]">
                    On 30 Novenber 2022
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
