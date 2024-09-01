import React from 'react';
import Image from "next/image";
import consultation from "../../public/consultation.png";
import Diagnostic from "../../public/Diagnostic.png";
import operation from "../../public/operation.png";
import stepsImage from "../../public/steps.png"; // Replace with the actual path of the combined steps image
// import doctorImage from "../../public/doctor.png"; // Replace with the actual path of the doctor image

const ServiceComponent = () => {
  return (
    <>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#B2D9FF] to-[#0180FF] py-10 flex h-[510px] max-[1127px]:flex-col">
        <div className="min-[1128px]:w-[50%] flex-col flex max-[1128px]:h-[500px] justify-center items-center gap-[30px]">
          <h1 className="font-nunito text-[50px] max-[882px]:w-[100%] max-[550px]:text-[40px] leading-snug font-medium pl-[80px] min-[882px]:pr-[150px]">
            We are Here for You, Every Step of the Way
          </h1>
          <h3 className="max-[882px]:w-[100%] text-[18px] leading-snug font-small pl-[87px] min-[882px]:pr-[150px]">
            From everyday care to those moments you need a specialist, our services are here to support you
          </h3>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-[#F2F7FF] py-16 flex flex-col items-center">
        <h2 className="text-center text-[28px] font-bold mb-10">
          We Have Experts Solutions For 30+ Ailments
        </h2>
        <div className="bg-[#dde7ff] p-8 rounded-3xl flex gap-8">
          <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg transition-shadow duration-300 overflow-hidden w-[250px] h-[350px]">
            <Image src={consultation} alt="Consultation" className="object-cover w-full h-[60%]" />
            <div className="p-6 text-center hover:bg-blue-500 hover:text-white rounded-b-3xl transition-colors duration-300 w-full">
              <h3 className="text-lg font-medium mt-4">Consultation</h3>
              <button className="bg-[#00CFFF] text-white py-2 px-4 rounded-full mt-4">Book Now</button>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg transition-shadow duration-300 overflow-hidden w-[250px] h-[350px]">
            <Image src={Diagnostic} alt="Diagnostic Center" className="object-cover w-full h-[60%]" />
            <div className="p-6 text-center hover:bg-blue-500 hover:text-white rounded-b-3xl transition-colors duration-300 w-full">
              <h3 className="text-lg font-medium mt-4">Diagnostic Center</h3>
              <button className="bg-[#00CFFF] text-white py-2 px-4 rounded-full mt-4">Book Now</button>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white rounded-3xl shadow-lg transition-shadow duration-300 overflow-hidden w-[250px] h-[350px]">
            <Image src={operation} alt="Operation Center" className="object-cover w-full h-[60%]" />
            <div className="p-6 text-center hover:bg-blue-500 hover:text-white rounded-b-3xl transition-colors duration-300 w-full">
              <h3 className="text-lg font-medium mt-4">Operation Center</h3>
              <button className="bg-[#00CFFF] text-white py-2 px-4 rounded-full mt-4">Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-[#F2F7FF] py-16 flex flex-col items-center">
        <h2 className="text-center text-[28px] font-bold mb-10">
          How it Works
        </h2>
        <p className="text-center text-[18px] mb-8">
          3 Easy steps to your service
        </p>
        <div className="flex flex-col items-center">
          <Image src={stepsImage} alt="How it Works Steps" className="w-full max-w-[750px] mb-8" />
          <div className="flex justify-around w-full max-w-[800px]">
            <div className="text-center">
              <h3 className="text-lg font-bold">Pick a Service</h3>
              <p className="text-sm text-gray-600">
                Find the right care for your needs from our comprehensive range of services.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold">Schedule Appointment</h3>
              <p className="text-sm text-gray-600">
                Book a time that works best for you, easily and conveniently.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold">Get Your Service</h3>
              <p className="text-sm text-gray-600">
                Receive top-quality care from our expert healthcare providers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#4EA4FF] rounded-lg p-8 flex justify-between items-center shadow-lg my-16">
        {/* Left Side - Text Content */}
        <div className="flex flex-col max-w-[50%]">
          <div className="flex items-center mb-4">
            <div className="bg-[#00CFFF] text-white px-4 py-2 rounded-full">
              Why Choose Us ?
            </div>
          </div>
          <h1 className="text-[32px] font-bold mb-2">
            We're the Right Choice <br /> for Your Healthcare
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            We’re here to make your healthcare experience easy, <br />
            comfortable, and truly personalized.
          </p>
          <ul className="space-y-4 text-lg text-gray-800">
            <li className="flex items-start">
              <span className="mr-2 text-black">●</span> 
              Whatever you need, we’ve got it covered, from check-ups to specialized treatments.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-black">●</span> 
              You’re in good hands with our skilled and caring professionals who are all about your well-being.
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-black">●</span> 
              We listen, we care, and we tailor everything to what works best for you.
            </li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="relative">
          {/* <Image src={doctorImage} alt="Doctor pointing" width={250} height={250} className="rounded-lg" /> */}
          {/* Additional decorative elements can be added here if needed */}
        </div>
      </div>
    </>
  );
};

export default ServiceComponent;
