import React, { useState, useEffect } from "react";
import { FaVideo } from "react-icons/fa";
import gsap from "gsap";

const chiefsInfo = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    date: "May 22, 2022",
    desc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis.",
    title: "Delicious & organic is the way to go.",
    ChiefName: "ERICA JAMES.",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    date: "May 24, 2022",
    desc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis.",
    title: "The healthiest way to start your day.",
    ChiefName: "Jake Nackos.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlb3BsZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    date: "Oct 5, 2023",
    desc: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim veniamquis.",
    title: "Blueberry specialties for everyone.",
    ChiefName: "Aiony Haust.",
  },
];

function Chiefs() {
  const [num, setNum] = useState(0);
  const [target, setTarget] = useState(".info_chief-number .col2");

  useEffect(() => {
    gsap.fromTo(
      target,
      {
        autoAlpha: 0,
        x: "-120%",
      },
      {
        autoAlpha: 1,
        x: 0,
        duration: 0.6,
      }
    );
    gsap.fromTo(
      ".img-container_name img",
      {
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        duration: 0.6,
      }
    );

    if (window.innerWidth >= 1024) {
      setTarget(".info_chief-number");
    }
  }, [num, target]);

  return (
    <section className="chiefs min-h-screen mt-[2rem]">
      <div className="chiefs-container h-screen flex flex-col items-center">
        <h2 className="text-[3rem] font-light font-NATS tracking-wide mb-[2rem] lg:text-[3.2rem] xl:text-[3.6rem] 2xl:text-[4.2rem] xl:mb-[0rem]">
          Top Chiefs
        </h2>
        <div className="chiefs-info w-[90%] h-[90%] md:w-[75%] lg:w-[60%] xl:w-[85%] 2xl:w-[70%]">
          <div className="chiefs-info-container h-full flex flex-col items-center justify-between xl:flex-row-reverse">
            <div className="img-container_name h-[49%] w-[100%] xl:h-[60%] xl:w-[45%]">
              <img
                src={chiefsInfo[num].src}
                alt=""
                className="w-full h-[95%] object-cover object-center opacity-0"
              />
              <h4 className="font-Gemunu text-[1.2rem] text-[#ff5656] pl-[0.2rem] tracking-wide xl:text-[1.4rem]">
                {chiefsInfo[num].ChiefName}
              </h4>
            </div>
            <div className="info_chief-number px-[0.3rem] h-[49%] flex justify-between flex-row-reverse mt-[2rem] xl:h-[80%] xl:w-[49%] xl:flex-row xl:items-center">
              <div className="col1 flex flex-col justify-between w-[10%] h-[30%] xl:h-[20%]">
                <button type="button" className="btn" onClick={() => setNum(0)}>
                  1
                </button>
                <button type="button" className="btn" onClick={() => setNum(1)}>
                  2
                </button>
                <button type="button" className="btn" onClick={() => setNum(2)}>
                  3
                </button>
              </div>
              <div className="col2 h-[70%] translate-x-[-120%] opacity-0 w-[80%] flex flex-col justify-between">
                <div className="video text-[#ff5656] w-[25%] text-[1.4rem] flex items-center justify-between xl:w-[22%] 2xl:w-[20%]">
                  <FaVideo />
                  <span className="text-[0.9rem] font-bold text-gray-700">
                    01:25
                  </span>
                </div>
                <h2 className="font-NATS text-[2.6rem] font-semibold leading-[35px] w-[85%] lg:text-[3.4rem] lg:leading-[48px] xl:w-[90%] 2xl:text-[4rem] 2xl:w-[100%] 2xl:leading-[55px]">
                  {chiefsInfo[num].title}
                </h2>
                <p className="w-[109%] text-gray-500 font-semibold lg:w-[95%] mb-[1rem] xl:leading-[25px] xl:w-[85%] 2xl:w-[70%] 2xl:text-[1.02rem]">
                  {chiefsInfo[num].desc}
                </p>
                <div className="date font-semibold text-[1.2rem]">
                  {chiefsInfo[num].date}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Chiefs;
