import React, { useState, useEffect } from "react";

const DirectorFrames = [
  {
    name: "Venky Atluri",
    img: "https://luxmovies.cam/wp-content/uploads/2024/11/Lucky-Baskhar.jpg",
  },
  {
    name: "C. Prem Kumar",
    img: "https://luxmovies.cam/wp-content/uploads/2024/10/Meiyazhagan-Hindi-Dubbed.jpg",
  },
  {
    name: "Kunal Khemu",
    img: "https://luxmovies.cam/wp-content/uploads/2024/03/Madgaon-Express-2024.jpg",
  },
  {
    name: "Zack Snyder",
    img: "https://vegamovies.ms/wp-content/uploads/2024/04/Rebel-Moon-Part-Two-The-Scargiver.jpg",
  },
  {
    name: "Greta Gerwig",
    img: "https://vegamovies.ms/wp-content/uploads/2023/12/Barbie-Hindi-2024-200x300.jpg",
  },
  {
    name: "Christopher Nolan",
    img: "https://www.tallengestore.com/cdn/shop/products/Inception-LeonardoDiCaprio-ChristopherNolan-HollywoodSciFiMoviePoster_66029b94-50ae-494c-b11d-60a3d91268b5.jpg?v=1685582036",
  },
  {
    name: "Raj & DK",
    img: "https://luxmovies.cam/wp-content/uploads/2024/11/Citadel.jpg",
  },
  {
    name: "Mrigdeep Singh Lamba",
    img: "https://luxmovies.cam/wp-content/uploads/2023/11/Fukrey-3.jpg",
  },
  {
    name: "Taika Waititi",
    img: "https://vegamovies.ms/wp-content/uploads/2022/09/Thor-Ragnarok-hINDI-dUBBED-org.jpg",
  },
  {
    name: "TJ Gnanavel",
    img: "https://luxmovies.cam/wp-content/uploads/2022/02/Jai-Bhim.jpg",
  },
];

const DirectorCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [timer, setTimer] = useState(40);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  const handleNext = () => {
    setIsRevealed(false);
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex < DirectorFrames.length ? nextIndex : prevIndex;
    });
    setTimer(40);
  };

  useEffect(() => {
    let interval;
    if (!isRevealed && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRevealed, timer]);

  const currentFrame = DirectorFrames[currentIndex];

  return (
    <div>
      <div className="max-w-md mx-auto bg-gray-100 rounded-xl shadow-2xl overflow-hidden">
        <div className="flex items-center p-3">
          <div className="px-1">
            <span className="w-4 h-4 rounded-full inline-block bg-red-500 cursor-pointer"></span>
          </div>
          <div className="px-1">
            <span className="w-4 h-4 rounded-full inline-block bg-yellow-400 cursor-pointer"></span>
          </div>
          <div className="px-1">
            <span className="w-4 h-4 rounded-full inline-block bg-green-500 cursor-pointer"></span>
          </div>
          <p className="pl-16 text-2xl font-bold">Guess The Director</p>
        </div>

        <img className="w-full h-96" src={currentFrame.img} alt="Poster" />

        {isRevealed && (
          <div className="p-4 text-center text-2xl font-bold">
            {currentFrame.name}
          </div>
        )}

        <div className="text-center p-2">
          <p className="text-xl font-bold text-red-600">
            Timer: {timer} seconds
          </p>
        </div>
      </div>

      <div className="flex mt-4 space-x-4">
        <button
          onClick={handleReveal}
          className="border-2 border-black hover:scale-95 duration-300 relative group cursor-pointer text-sky-50 overflow-hidden h-16 w-64 rounded-md bg-red-200 p-2 flex justify-center items-center font-extrabold"
        >
          <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-red-900"></div>
          <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-red-800"></div>
          <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-red-700"></div>
          <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-red-600"></div>
          <p className="z-10 text-white font-bold text-3xl">Reveal</p>
        </button>

        <button
          onClick={handleNext}
          className="border-2 border-black hover:scale-95 duration-300 relative group cursor-pointer text-sky-50 overflow-hidden h-16 w-64 rounded-md bg-blue-200 p-2 flex justify-center items-center font-extrabold"
        >
          <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-blue-900"></div>
          <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-blue-800"></div>
          <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-blue-700"></div>
          <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-blue-600"></div>
          <p className="z-10 text-white font-bold text-3xl">Next</p>
        </button>
      </div>
    </div>
  );
};

export default DirectorCard;
