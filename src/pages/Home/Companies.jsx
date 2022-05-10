import React from "react";

import image2 from "../../assets/images/images-2.png";
import image3 from "../../assets/images/images-3.png";
import image4 from "../../assets/images/images-4.png";
import image5 from "../../assets/images/images-5.png";
import image6 from "../../assets/images/images-6.png";
import image7 from "../../assets/images/images-7.png";
import image8 from "../../assets/images/images-8.png";
import image9 from "../../assets/images/images-9.png";
import image10 from "../../assets/images/images-10.png";

const images = [
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];

function Companies() {
  return (
    <div className="companies min-h-[80vh] mt-[7rem] w-full lg:min-h-[60vh] xl:mt-[3rem]">
      <div className="companies-container w-full flex flex-wrap items-center justify-center gap-[20px] px-[0.2rem] md:px-[1rem] xl:px-[7rem] xl:gap-y-[30px]">
        {images.map((src) => (
          <div key={src} className="w-[45%] h-[6rem] lg:w-[25%] xl:w-[30%]">
            <img
              src={src}
              alt=""
              className="w-full h-full object-contain object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;
