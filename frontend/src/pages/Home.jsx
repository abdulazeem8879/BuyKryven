import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import Ourpolicy from "../components/Ourpolicy";
import NewsLetterBox from "../components/NewsLetterBox";

const Home = () => {
  return (
    // <div className='text-red-500 text-5xl text-' >Welcome Home</div>
    <>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <Ourpolicy />
      <NewsLetterBox/>
    </>
  );
};

export default Home;
