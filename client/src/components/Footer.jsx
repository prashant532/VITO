import React from "react";


const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
  <h1 className="text-5xl sm:text-5xl text-white text-gradient py-1">
  VITO
</h1>

    <div className="flex justify-center items-center flex-col mt-5">
    <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
    <p className="text-white text-sm text-center font-medium mt-2">Vito Karte Ja Badhte Ja</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">prashantsrivastava1001@gmail.com</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
