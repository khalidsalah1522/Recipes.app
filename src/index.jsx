import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/style/index.css";
import Spinner from "./components/Spinner";

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

let time = 0;
window.addEventListener("DOMContentLoaded", (e) => {
  time = e.timeStamp;
});

function Loader() {
  return (
    <>
      <Spinner time={time} />
      <App />
    </>
  );
}
root.render(<Loader />);
