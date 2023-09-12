import React from "react";
import ethlogo from "../assets/ethlogo.png";
import { connectWallet } from "../NFT";
import { truncate, useGlobalState } from "../store";

const Header = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  return (
    <nav className="w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto">
      <div className="flex flex-row justify-start items-center md:flex-[0.5] flex-initial">
        <img className="w-8 cursor-pointer" src={ethlogo} alt="logo" />
        <span className="text-white text-2xl ml-2">Ethereum</span>
      </div>
      <ul className="md:flex md:flex-[0.7] text-white hidden list-none flex-row flex-initial">
        <li className="mx-4 cursor-pointer">Explore</li>
        <li className="mx-4 cursor-pointer">Features</li>
        <li className="mx-4 cursor-pointer">commuinty</li>
      </ul>
      {connectedAccount ? (
        <button className="shadow-xl shadow-black text-white bg-[#e94513e7] hover:bg-[#000000] md:text-xs p-2 rounded-full cursor-pointer">
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          onClick={connectWallet}
          className="shadow-xl shadow-black text-white bg-[#e94513e7] hover:bg-[#000000] md:text-xs p-2 rounded-full cursor-pointer"
        >
          Connect Wallet
        </button>
      )}
    </nav>
  );
};

export default Header;
