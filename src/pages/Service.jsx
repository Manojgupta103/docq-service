/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import 'tailwindcss/tailwind.css'; 
import Navbar from "@/components/Navbar";
import Foot from "@/components/Foot";

import consultation from "../../public/consultation.png";
import Diagnostic from "../../public/Diagnostic.png";
import operation from "../../public/operation.png";
import stepsImage from "../../public/steps.png";
import Group7 from "../../public/Group 7.png";
import Rectangle134 from "../../public/Rectangle 134.png";
import mdl2 from "../../public/mdl2medical.png";
import plus from "../../public/plusmedical.png";
import Group345 from "../../public/Group 345.png";
import Ellipse from "../../public/Ellipse 52.png";
import Rectangle126 from "../../public/Rectangle 126.png";
import image from "../../public/image.png";
import imaged from "../../public/imaged.png";
import imageo from "../../public/imageo.png";

const ServiceComponent = () => {
  const router = useRouter();

  const handleButtonClick = (path) => {
    router.push(path);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-[#B2D9FF] to-[#0180FF] lg:py-20 pt-20 flex flex-col lg:flex-row h-[600px] lg:h-auto items-center justify-center mb-10 w-full relative overflow-hidden">
        <div className="w-full lg:w-[50%] flex-col flex h-full justify-center items-center text-center gap-[30px] p-4 lg:p-8 lg:pl-16 lg:pr-8">
          <h1 className="font-nunito text-[28px] lg:text-[50px] leading-snug font-medium">
            We are Here for You, Every Step of the Way
          </h1>
          <h3 className="text-[16px] lg:text-[18px]">
            From everyday care to those moments you need a specialist, our
            services are here to support you
          </h3>
        </div>
        <div className="relative mt-10 lg:mt-0 flex-shrink-0">
          <Image
            src={Ellipse}
            alt="Ellipse"
            width={500}
            height={500}
            className="rounded-lg max-w-full"
          />
          <Image
            src={Rectangle126}
            alt="Rectangle 134"
            width={450}
            height={450}
            className="absolute -top-24 right-3 max-w-full"
          />
          <Image
            src={image}
            alt="Rectangle 135"
            width={150}
            height={150}
            className="absolute top-0 left-0 max-w-full"
          />
          <Image
            src={imaged}
            alt="Rectangle 135"
            width={150}
            height={150}
            className="absolute bottom-0 -left-14 max-w-full"
          />
          <Image
            src={imageo}
            alt="Rectangle 135"
            width={150}
            height={150}
            className="absolute top-28 -right-16 max-w-full"
          />
        </div>
      </div>

      <div className="bg-[#F2F7FF] py-16 flex flex-col items-center w-full">
        <h2 className="text-center text-[24px] lg:text-[28px] font-bold mb-10">
          We Have Expert Solutions For 30+ Ailments
        </h2>
        <div className="bg-[#dde7ff] p-4 lg:p-8 rounded-[30px] lg:rounded-[60px] flex flex-col lg:flex-row justify-center gap-8 w-full lg:w-[70%] mx-auto">
          <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg transition-shadow duration-300 overflow-hidden w-full lg:w-[250px] h-[350px]">
            <Image
              src={consultation}
              alt="Consultation"
              className="object-cover w-full h-[60%]"
            />
            <div className="p-6 text-center hover:bg-blue-500 hover:text-white rounded-b-3xl transition-colors duration-300 w-full">
              <h3 className="text-lg font-medium mt-4">Consultation</h3>
              <button
                className="bg-[#00CFFF] text-white py-2 px-4 rounded-full mt-4"
                onClick={() => handleButtonClick('/consultation')}
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg transition-shadow duration-300 overflow-hidden w-full lg:w-[250px] h-[350px]">
            <Image
              src={Diagnostic}
              alt="Diagnostic Center"
              className="object-cover w-full h-[60%]"
            />
            <div className="p-6 text-center hover:bg-blue-500 hover:text-white rounded-b-3xl transition-colors duration-300 w-full">
              <h3 className="text-lg font-medium mt-4">Diagnostic Center</h3>
              <button
                className="bg-[#00CFFF] text-white py-2 px-4 rounded-full mt-4"
                onClick={() => handleButtonClick('/Diagnostic')}
              >
                Book Now
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg transition-shadow duration-300 overflow-hidden w-full lg:w-[250px] h-[350px]">
            <Image
              src={operation}
              alt="Operation Center"
              className="object-cover w-full h-[60%]"
            />
            <div className="p-6 text-center hover:bg-blue-500 hover:text-white rounded-b-3xl transition-colors duration-300 w-full">
              <h3 className="text-lg font-medium mt-4">Operation Center</h3>
              <button
                className="bg-[#00CFFF] text-white py-2 px-4 rounded-full mt-4"
                onClick={() => handleButtonClick('/operation')}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#F2F7FF] py-16 flex flex-col items-center w-full">
        <h2 className="text-center text-[24px] lg:text-[28px] font-bold mb-10">
          How it Works
        </h2>
        <p className="text-center text-[16px] lg:text-[18px] mb-8">
          3 Easy steps to your service
        </p>
        <div className="flex flex-col items-center w-full">
          <Image
            src={stepsImage}
            alt="How it Works Steps"
            className="w-full max-w-[750px] mb-8"
          />
          <div className="flex flex-col lg:flex-row justify-around w-full max-w-[800px] text-center">
            <div className="lg:w-1/3">
              <h3 className="text-lg font-bold">Pick a Service</h3>
              <p className="text-sm text-gray-600">
                Find the right care for your needs from our comprehensive range
                of services.
              </p>
            </div>
            <div className="lg:w-1/3 mt-4 lg:mt-0">
              <h3 className="text-lg font-bold">Schedule Appointment</h3>
              <p className="text-sm text-gray-600">
                Book a time that works best for you, easily and conveniently.
              </p>
            </div>
            <div className="lg:w-1/3 mt-4 lg:mt-0">
              <h3 className="text-lg font-bold">Get Your Service</h3>
              <p className="text-sm text-gray-600">
                Receive top-quality care from our expert healthcare providers.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pr-8 pl-8 bg-[#F2F7FF] w-full">
        <div className="bg-[#4EA4FF] rounded-[30px] lg:rounded-[60px] p-4 lg:p-8 flex flex-col lg:flex-row justify-around items-center shadow-lg my-16 w-full">
          <div className="flex flex-col max-w-full lg:max-w-[50%]">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-[#00D7CF] to-[#53A7FF] text-white px-4 py-2 rounded-full">
                Why Choose Us?
              </div>
            </div>
            <h1 className="text-[24px] lg:text-[32px] font-bold mb-2">
              We're the Right Choice <br className="hidden lg:block" /> for Your
              Healthcare
            </h1>
            <p className="text-base lg:text-lg text-black mb-4">
              We’re here to make your healthcare experience easy, <br />
              comfortable, and truly personalized.
            </p>
            <ul className="space-y-4 text-base lg:text-lg">
              <li className="flex items-start">
                <span className="text-[24px] lg:text-[32px] font-bold mb-2">
                  ●
                </span>
                <h1 className="text-[20px] lg:text-[28px] font-bold mb-2">
                  Whatever you need, we’ve got it covered, from check-ups to
                  specialized treatments.
                </h1>
              </li>
              <li className="flex items-start">
                <span className="text-[24px] lg:text-[32px] font-bold mb-2">
                  ●
                </span>
                <h1 className="text-[20px] lg:text-[28px] font-bold mb-2">
                  You’re in good hands with our skilled and caring professionals who are all about your well-being.
                </h1>
              </li>
              <li className="flex items-start">
                <span className="text-[24px] lg:text-[32px] font-bold mb-2">
                  ●
                </span>
                <h1 className="text-[20px] lg:text-[28px] font-bold mb-2">
                  We listen, we care, and we tailor everything to what works
                  best for you.
                </h1>
              </li>
            </ul>
          </div>
          <div className="relative mt-10 lg:mt-0">
            <Image
              src={Group7}
              alt="Doctor pointing"
              width={400}
              height={400}
              className="rounded-lg max-w-full"
            />
            <Image
              src={Rectangle134}
              alt="Rectangle 134"
              width={400}
              height={400}
              className="absolute top-0 right-3 max-w-full"
            />
            <Image
              src={mdl2}
              alt="Rectangle 135"
              width={100}
              height={100}
              className="absolute top-0 left-0 max-w-full"
            />
            <Image
              src={plus}
              alt="Rectangle 135"
              width={100}
              height={100}
              className="absolute bottom-0 -left-14 max-w-full"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full p-4">
        <Image
          src={Group345}
          alt="Group"
          width={800}
          height={800}
          className="max-w-full"
        />
      </div>
      <Foot />
    </>
  );
};

export default ServiceComponent;
