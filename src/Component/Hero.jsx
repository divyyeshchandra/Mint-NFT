import React from "react";
import avatar from "../assets/owner.jpg";
import github from "../assets/github_icon.png";
import facebook from "../assets/facebook_icon.png";
import twitter from "../assets/twitter_icon.png";
import linkedIn from "../assets/linkedIn_icon.png";
import medium from "../assets/medium_icon.png";
import { truncate } from "../store";
import {
  setAlert,
  setGlobalState,
  setLoadinMsg,
  useGlobalState,
} from "../store";
import { payToMint } from "../NFT";
const Hero = () => {
  const [nfts] = useGlobalState("nfts");
  const [connectedAccount] = useGlobalState("connectedAccount");
  const onMintNFT = async () => {
    setGlobalState("loading", {
      show: true,
      msg: "Minting new NFT to your account",
    });

    await payToMint()
      .then(() => setAlert("Minting successful...", "green"))
      .catch(() => setGlobalState("loading", { show: false, msg: "" }));
  };
  return (
    <div className="bg-[url('https://cdn.pixabay.com/photo/2023/08/03/18/11/ai-generated-8167719_1280.jpg')] bg-no-repeat bg-cover">
      <div className="flex flex-col justify-center items-center mx-auto py-10">
        <h1 className="text-white text-5xl font-bold text-center">
          IPFS Arts
          <br />
          <span className="text-gradient">NFT's</span> Collection
        </h1>
        <p className="text-white font-semiBold text-sm mt-3">
          Mint and Collect the hottest NFT's around.
        </p>
        <button
          onClick={onMintNFT}
          className="shadow-xl shadow-black text-white bg-[#e94513e7] hover:bg-[#000000] p-2 rounded-full cursor-pointer my-10 mb-5"
        >
          Mint Now
        </button>
        <a
          className="flex justify-center items-center space-x-4 bg-[#000000ad] rounded-full my-4 pr-3 cursor-pointer"
          href="https://github.com/divyyeshchandra"
          target="_blank"
        >
          <img
            className="w-12 h-12 object-contain rounded-full"
            src={avatar}
            alt=""
          />
          <div className="text-white flex flex-col font-semibold text-sm">
            <spna>{connectedAccount}</spna>
          </div>
        </a>
        <p className="text-white text-sm font-medium text-center">
          Non-Fungible Tokens (NFTs) are digital assets revolutionizing
          ownership and provenance in the digital realm. Built on blockchain
          technology, NFTs represent unique items, art, music, collectibles, and
          more. Each NFT holds distinct metadata, ensuring authenticity and
          scarcity. They enable creators to monetize digital content directly,
          sparking a new era of digital ownership and royalties.
        </p>
        <ul className="flex flex-row justify-center space-x-2 items-center my-4">
          <a
            target="_blank"
            className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
            href="https://github.com/divyyeshchandra"
          >
            <img className="w-7 h-7" src={github} alt="Github" />
          </a>
          <a
            className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
            href="https://www.linkedin.com/in/divyyesh-chandra-9426511a0/"
          >
            <img className="w-7 h-7" src={linkedIn} alt="Github" />
          </a>
        </ul>
        <div className="shadow-xl shadow-black flex justify-center items-center w-10 h-10 rounded-full bg-white cursor-pointer p-2 ml-4 text-black hover;bg-[#bd255f] hover:text-white transition-all duration-75 deplay-100 ">
          <spam className="text-sm font-bold">{nfts.length}/99</spam>
        </div>
      </div>
    </div>
  );
};

export default Hero;
