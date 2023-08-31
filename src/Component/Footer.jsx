import React from "react";
import ethLogo from "../assets/ethlogo.png";

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full flex flex-col justify-between items-center my-4">
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt=0 mt-5 w-full text-white text-base text-center">
          <p className="mx-2 cursor-pointer">Explore</p>
          <div className="flex flex-col justify-center items-center">
            <p className="mx-2 cursor-pointer">Feature</p>
            <a href="https://github.com/divyyeshchandra" target="_blank">
              <div className="flex justify-center items-center mt-2">
                <img className="w-8" src={ethLogo} alt="DiyyeshLogo" />
                <span className="text-white text-sm">
                  Designed and Developed by Divyyesh Chandra, Copyright © 2023
                  DC
                </span>
              </div>
            </a>
          </div>
          <p className="mx-2 cursor-pointer">Community</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
