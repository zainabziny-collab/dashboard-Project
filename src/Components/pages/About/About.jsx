import React from "react";
import HomeHeader from "../Home/HomeHeader";

function About() {
  return (
    <>
      <HomeHeader />
      <div className="w-full h-[calc(100vh-72px)] bg-[#e0e4e7] dark:bg-[#222222] dark:text-white p-5">
        <div className=" w-full min-h-full flex flex-col items-center justify-start gap-8 border overflow-hidden border-white rounded-xl pb-10 pt-5 px-3 ">
            <h1 className="text-2xl font-bold ">About</h1>
        </div>
      </div>
    </>
  );
}

export default About;
