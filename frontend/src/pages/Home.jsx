import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import { products } from "../assets/assets";

const Home = () => {
  return (
    // <div className='text-red-500 text-5xl text-' >Welcome Home</div>
    <>
      <Hero />
      <LatestCollection/>
    </>
  );
};

export default Home;
