import React, { useState, useEffect } from "react";
import gsap from "gsap";

const images = [
  {
    // eslint-disable-next-line global-require
    src: require("../../assets/images/bakd-raw-by-karolin-baitinger-qS4xm9xosA8-unsplash-min.jpg"),
    class: "active-img",
  },
  {
    // eslint-disable-next-line global-require
    src: require("../../assets/images/ieva-kisunaite-aNxlLSec5Dk-unsplash-min.jpg"),
    class: "",
  },
  {
    // eslint-disable-next-line global-require
    src: require("../../assets/images/monika-grabkowska-pHeX8H9WQpY-unsplash-min.jpg"),
    class: "",
  },
  {
    // eslint-disable-next-line global-require
    src: require("../../assets/images/pesce-huang-CxrkfpUAIEk-unsplash-min.jpg"),
    class: "",
  },
];

function Hero() {
  const [image, setImage] = useState(images);
  const timeLine = gsap.timeline();

  const handleImages = (e, num) => {
    images.forEach((img) => {
      // eslint-disable-next-line no-param-reassign
      img.class = "";
    });
    images[num].class = "active-img";
    setImage([...images]);
    e.target.style.order = 2;
    e.target.classList.add("btn-active");
  };

  useEffect(() => {
    timeLine.fromTo(
      ".active-img",
      {
        x: "-100%",
        autoAlpha: 0,
      },
      { x: 0, autoAlpha: 1, duration: 0.8 }
    );
  }, [timeLine, image]);

  return (
    <div className="hero">
      <div className="hero-container flex items-center justify-center relative px-[1rem] md:px-[3rem] lg:px-[5rem] xl:px-[9rem] 2xl:px-[20rem]">
        <div className="show-images w-full flex flex-col items-start lg:flex-row lg:items-end lg:justify-between lg:ml-[3rem] xl:ml-[5rem]">
          <button
            className="catigories btn-active order-1"
            type="button"
            onClick={() => handleImages(0)}
          >
            <span>01</span>SeaFood
          </button>
          <div className="hero-image relative h-[70%] w-full overflow-hidden order-3 lg:h-full lg:w-[80%]">
            {image.map((img) => (
              <React.Fragment key={img.src}>
                <img
                  src={img.src}
                  alt=""
                  className={`${img.class} absolute left-0 top-0 h-full w-full object-cover object-center translate-x-[-100%] opacity-0`}
                />
              </React.Fragment>
            ))}
          </div>
          <button
            className="catigories order-3"
            type="button"
            onClick={(e) => handleImages(e, 1)}
          >
            <span>02</span>Desserts
          </button>
          <button
            className="catigories order-3"
            type="button"
            onClick={(e) => handleImages(e, 2)}
          >
            <span>03</span>Vegetable
          </button>
          <button
            className="catigories order-3"
            type="button"
            onClick={(e) => handleImages(e, 3)}
          >
            <span>04</span>Pasta
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
