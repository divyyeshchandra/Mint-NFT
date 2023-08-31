import React from "react";
import ethLogo from "../assets/ethlogo.png";
import { useEffect } from "react";
import { useState } from "react";
import { useGlobalState, truncate } from "../store";

const Artworks = ({ Artworks }) => {
  const [connectedAccount] = useGlobalState("connectedAccount");
  console.log(connectedAccount);
  const [end, setEnd] = useState(4);
  const [count] = useState(4);
  const [nfts, setNfts] = useState([]);
  const getNfts = () => {
    return Artworks.slice(0, end);
  };
  useEffect(() => {
    setNfts(getNfts());
  }, [Artworks, end]);
  return (
    <div className="artworks-main py-10">
      <div className="w-4/5 mx-auto">
        <h4 className="text-gradient uppercase text-2xl">Artworks</h4>
        <div className="flex flex-wrap justify-center items-center mt-4">
          {nfts.map((nft, i) => (
            <a
              href={nft.url}
              target="_blank"
              key={i}
              className={
                "relative shadow-xl shadow-black p-3 bg-white rounded-lg w-64 h-64 object-contain bg-no-repeat bg-cover overflow-hidden mr-2 mb-2 cursor-pointer transition-all duration-75 delay-100 hover:shadow-[#bd255f]"
              }
              style={{ backgroundImage: `url(${nft.imageURL})` }}
            >
              <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center label-gradient p-2 w-full text-white text-sm">
                <p>
                  {truncate(connectedAccount, 4, 4, 11)} #{nft.id}
                </p>
                <div className="flex justify-center items-center space-x-2">
                  <img
                    className="w-5 cursor-pointer"
                    src={ethLogo}
                    alt="DivyyeshLogo"
                  />
                  {nft.cost}
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center items-center mx-auto mt-4">
          {Artworks.length > 0 && Artworks.length > nfts.length ? (
            <button
              onClick={() => setEnd(end + count)}
              className="shadow-xl shadow-black text-white rounded-full bg-[#e94513e7] hover:bg-[#000000] p-2 cursor-pointer my-4"
            >
              Load more
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Artworks;
