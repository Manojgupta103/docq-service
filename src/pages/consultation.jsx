import Foot from "@/components/Foot";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import React from "react";

const ConsultationPage = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Consultation Services</h1>
      <p>
        Detailed information about our consultation services will be available
        here.
      </p>
    </div>
    <Foot/>
    </>
  );
};

export default ConsultationPage;
