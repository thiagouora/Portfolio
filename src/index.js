import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const toggle = document.querySelector(".hover-show");

// toggle?.addEventListener("click", () => {
//   toggle.classList.toggle("active");
// });

let Icons = document.querySelectorAll(".navigation .icon");

Icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    changeactive();
    icon.classList.add("active-nav");
  });
});

function changeactive() {
  Icons.forEach((icon) => {
    icon.classList.remove("active-nav");
  });
}
