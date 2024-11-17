"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <section id="about">
      {/* chk next */}
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-slate-200 mb-6 text-4xl mt-3 sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text  bg-gradient-to-br from-blue-900 bg-lime-700 to-blue-700 ">
              Hello, {`I'm`} {""}
            </span>
            <br className="m-15" />
            <TypeAnimation
              sequence={[
                " Syed Muhammad Suleman",
                1000,
                "Front-End-Developer",
                1000,
                "Web-Developer",
                1000,
                "Learning Next.Js",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-slate-300 font-semibold mb-6 text-base sm:text-lg lg:xl ">
            This is Syed Muhammad Suleman. I am a front-end developer. I have
            learned HTML, CSS5, and TypeScript, and I am currently learning
            Next.js. If you want to create an eCommerce website for your
            business, feel free to contact me without hesitation. I will provide
            you with a demo first.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-red-500 via-purple-800 to-blue-700">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-red-500 via-purple-800 to-blue-700 hover: bg-slate-800 text-white mt-3">
              <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">
                {" "}
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[260px] h-[260] lg:w-[500] lg:[500] relative overflow-hidden">
            <Image
              src="/images/new.jpeg"
              alt="profile-pic"
              className="w-full h-full object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
