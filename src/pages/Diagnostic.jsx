import Foot from "@/components/Foot";
import Navbar from "@/components/Navbar";
import React from "react";
import 'tailwindcss/tailwind.css'; 
import Image from "next/image";

// Import the images
import TestTubeImage from "../../public/test_tube.png";
import ComputerImage from "../../public/computer.png";
import HelpingHandImage from "../../public/helping_hand.png";

const Diagnostic = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#F2F7FF] py-12 px-4 md:px-8 text-center">
        <h1 className="text-[#212121] text-3xl md:text-3xl font-bold mb-4">Your Health is Our Priority</h1>
        <p className="text-[#212121] mb-8 md:mb-12">
          With comprehensive testing, advanced technology, and a caring team dedicated to your well-being.
        </p>
        
        <div className="relative flex flex-col md:flex-row justify-center items-center space-y-8 md:-space-y-8 md:space-x-8">
          {/* Test Image */}
          <div className="relative transform translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 mb-8">
            <div className="w-32 h-32 md:w-32 md:h-32 bg-white rounded-full flex justify-center items-center mx-auto">
              <Image 
                src={TestTubeImage}
                alt="Test Tube"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <h3 className="text-[#212121] mt-2 md:mt-4 ttext-xl md:text-xl font-bold mb-2">All Your Tests in One Place</h3>
            <p className="text-[#212121] text-lg md:text-lg">From scans to blood work, we’ve got you covered</p>
          </div>
          
          {/* Tech Image */}
          <div className="relative transform translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 mb-8">
            <div className="w-32 h-32 md:w-32 md:h-32 bg-white rounded-full flex justify-center items-center mx-auto">
              <Image
                src={ComputerImage}
                alt="Cutting-Edge Tech"
                width={500}
                height={500}
                className="object-cover  top-6"
              />
            </div>
            <h3 className="text-[#212121] mt-2 md:mt-4 text-xl md:text-xl font-bold mb-2">Cutting-Edge Tech</h3>
            <p className="text-[#212121] text-lg md:text-lg">Trust our top-tier equipment for the most accurate results.</p>
          </div>

          {/* Help Image */}
          <div className="relative transform translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 mb-8">
            <div className="w-32 h-32 md:w-32 md:h-32 bg-white rounded-full flex justify-center items-center mx-auto">
              <Image
                src={HelpingHandImage}
                alt="Here to Help"
                width={500}
                height={500}
                className="object-cover "
              />
            </div>
            <div className="min-h-[50vh] flex justify-center items-center flex-col">
            <h3 className="text-[#212121] mt-2 md:mt-4 text-xl md:text-xl font-bold mb-2">Here to Help</h3>
            <p className="text-[#212121] text-lg md:text-lg">Our expert team makes sure you’re comfortable every step of the way.</p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center mt-[35px] space-x-2 h-[150px] max-[430px]:flex-col max-[430px]:items-center max-[430px]:gap-3 max-[430px]:pb-4">
          <input
            type="text"
            placeholder="Find Your Doctor ..."
            className="max-[430px]:w-[80%]  h-[55px] w-[853px] rounded-3xl border-solid border-3 drop-shadow-2xl border-2 shadow-xl border-zinc-500 outline-none pl-3"
          />
          <input
            type="text"
            placeholder="Location "
            className="h-[55px] min-w-[150px] rounded-3xl border-solid border-3 drop-shadow-2xl border-2 shadow-xl border-zinc-500 outline-none pl-3"
          />
        </div>
        </div>
      <Foot />
    </>
  );
};

export default Diagnostic;
