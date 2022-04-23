import React from "react";
import Hero from "./Home/Hero";
import "../assets/style/home.css";

function Home() {
  return (
    <section className="home h-[calc(100vh - 5rem)">
      <div className="home-container">
        <Hero />
      </div>
    </section>
  );
}

export default Home;
