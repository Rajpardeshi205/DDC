import React, { useState, useEffect } from "react";
import img from "/Images/pp.png";


const movieFrames = [
  {
    name: "By PlayerX",
    img: img,
  },
  {
    name: "Toxic",
    img: "https://pbs.twimg.com/media/GgwkOkhWcAEDrJT?format=jpg&name=large",
  },
  {
    name: "Dawn of the Planet of the Apes",
    img: "https://i.imgur.com/gtynKsf.jpg",
  },
  {
    name: "Haseen Dillruba",
    img: "https://imgbb.top/ib/QQiI3v0rhEds3iX_1680214181.jpg",
  },
  {
    name: "Sita Ramam",
    img: "https://i.imgur.com/LbqlFWd.jpg",
  },
  {
    name: "Dharmaveer Mukkam Post Thane",
    img: "https://i.imgur.com/7cvCCfE.jpg",
  },
  {
    name: "Freddy",
    img: "https://i.imgur.com/V1XbCYL.jpeg",
  },
  {
    name: "Jumanji",
    img: "https://imgbb.top/ib/qN6nyQqDvGWnTN5_1689836003.png",
  },
  {
    name: "John Wick Chapter 4",
    img: "https://imgbb.top/ib/dJp3rRDoevhVbx6_1684870632.jpg",
  },
  {
    name: " Ek Villain",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAVqXiL2oS-ChSgXsKh11glaEqGRi3mnHY2Q&s",
  },
  {
    name: "Thank God",
    img: "https://i.imgur.com/PkPIggm.jpg",
  },
];

const FrameCard = () => {
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
      return nextIndex < movieFrames.length ? nextIndex : prevIndex;
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

  const currentFrame = movieFrames[currentIndex];

  return (
    <div>
      <div className="w-3/6  mx-auto bg-gray-100 rounded-xl shadow-2xl overflow-hidden">
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
          <p className="pl-16 text-2xl font-bold">Guess The Movie</p>
        </div>

        <img className="w-max h-max" src={currentFrame.img} alt="Poster" />

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

export default FrameCard;
