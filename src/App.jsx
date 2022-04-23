import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <section className="app-container hidden w-full relative">
      <Header />
      <Home />
    </section>
  );
}

export default App;
