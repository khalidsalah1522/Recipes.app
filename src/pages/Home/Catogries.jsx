import React from "react";
import line from "../../assets/images/line.svg";

const catogriesImages = [
  {
    id: 1,
    // eslint-disable-next-line global-require
    src: require("../../assets/images/desserts.png"),
    kind: "Desserts",
    desc: "Lorem ipsum dolor sit amet, consecing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim.",
  },
  {
    id: 2,
    // eslint-disable-next-line global-require
    src: require("../../assets/images/vegetable.png"),
    kind: "Vegetable",
    desc: "Lorem ipsum dolor sit amet, consecing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim.",
  },
  {
    id: 3,
    // eslint-disable-next-line global-require
    src: require("../../assets/images/pasta.png"),
    kind: "Pasta",
    desc: "Lorem ipsum dolor sit amet, consecing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim.",
  },
  {
    id: 4,
    // eslint-disable-next-line global-require
    src: require("../../assets/images/pngegg-1.png"),
    kind: "Seafood",
    desc: "Lorem ipsum dolor sit amet, consecing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim.",
  },
];

function Catogries() {
  return (
    <div className="catogrie min-h-screen mt-[6rem]">
      <div className="catogries-container min-h-screen flex flex-col items-center">
        <h2 className="text-center text-[3rem] font-NATS mb-[4rem] md:text-[3.4rem] xl:text-[4rem] 2xl:text-[5rem]">
          Catogries
        </h2>
        <div className="catogries-main-container min-h-screen flex items-start justify-between flex-col">
          {catogriesImages.map(({ id, src, kind, desc }) => (
            <div
              className={`catogrie ${kind} min-h-[490px] relative flex items-center justify-center flex-col mb-[6rem]`}
              key={id}
            >
              <div className="img-container w-[70%] z-10 md:w-[60%]">
                <img src={src} alt="" className="w-full h-full" />
              </div>
              <div className="desc w-[80%] text-center mt-[1rem] md:w-[70%] ">
                <h4 className="text-[2.2rem] font-NATS tracking-wider text-[#222] md:text-[2.4rem] lg:text-[3rem]">
                  {kind}
                </h4>
                <p className="mt-[0.5rem] text-[0.9rem] font-semibold tracking-wide text-[#7e7e7e] lg:text-[1rem] xl:leading-[26px]">
                  {desc}
                </p>
                <div className="btn-container">
                  <button
                    type="button"
                    className="mt-[2rem] font-Gemunu text-[1.05rem] tracking-wider"
                  />
                </div>
              </div>
              <img src={line} alt="" className="line absolute z-[-1]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Catogries;
