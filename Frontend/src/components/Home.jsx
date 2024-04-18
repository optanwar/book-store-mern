import React, { useEffect } from "react";
import "../css/Home.css";
import axios from "axios";
import PopularBooks from "./PopularBooks";
import book from "./Books";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-text text-5xl font-bold tracking-wider leading-1">
            Book Shop
          </h1>
          <p className="hero-description tracking-wider leading-1  mt-4">
            Browse the collection of our best top interresting Books. you will
            definitely find what you are looking for.
          </p>
          <p className="flex">
            <a href="./Books" className="  border p-2 hover:bg-purple-950 transition-all rounded-md px-4">
              Read More
            </a>
          </p>
        </div>
        <div className="hero-image"></div>
      </div>
      <div className="bg-purple-950 text-white text-center">
        <PopularBooks />
      </div>
    </div>
  );
};

export default Home;
