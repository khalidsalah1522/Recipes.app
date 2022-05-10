import React from "react";
import Hero from "./Home/Hero";
import Featured from "./Home/Featured";
import "../assets/style/home.css";
import Catogries from "./Home/Catogries";
import Chiefs from "./Home/Chiefs";
import Companies from "./Home/Companies";

function Home() {
  return (
    <section className="home h-[calc(100vh - 5rem)">
      <div className="home-container">
        <Hero />
        <Featured />
        <Catogries />
        <Chiefs />
        <Companies />
      </div>
    </section>
  );
}

export default Home;
