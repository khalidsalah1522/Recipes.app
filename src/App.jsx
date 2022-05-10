import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="app-container hidden w-full relative">
      <Header />
      <Home />
      <Footer />
    </section>
  );
}

export default App;
