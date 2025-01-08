import React, { useState, useEffect } from "react";

const DialogueFrame = [
  {
    name: "Baahubali: The Beginning",
    dialogue: "Maine kaha tha na, woh wahin khada hoga!",
  },
  {
    name: "The Dark Knight",
    dialogue: "Why so serious?",
  },
  {
    name: "KGF: Chapter 1",
    dialogue: "Yaha har koi ek hi cheez ki demand karta hai... power.",
  },
  {
    name: "Gangs of Wasseypur ",
    dialogue: "Tumse na ho payega.",
  },
  {
    name: "Avengers: Endgame",
    dialogue: "I love you 3000.",
  },
  {
    name: "Spider-Man: No Way Home",
    dialogue: "With great power, comes great responsibility.",
  },
  {
    name: "Drishyam",
    dialogue:
      "Jo dikh raha hai, woh hua nahi aur jo hua hai, woh kisi ne dekha nahi.",
  },
  {
    name: "Andaz Apna Apna",
    dialogue: "Teja main hoon, mark idhar hai.",
  },
  {
    name: "Chhichhore",
    dialogue:
      "Haarna bahut zaroori hai, tabhi jeet ki keemat samajh mein aati hai.",
  },
  {
    name: "Raees",
    dialogue: "Battery nahi bolneka!",
  },
];

const DialogueCard = () => {
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
      return nextIndex < DialogueFrame.length ? nextIndex : prevIndex;
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

  const currentFrame = DialogueFrame[currentIndex];

  return (
    <div>
      <div className="max-w-screen-md max-h-screen mx-auto bg-gray-100 rounded-xl shadow-2xl overflow-hidden">
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
          <p className="pl-16 text-2xl font-bold">Guess The Dialogue</p>
        </div>

        <div className="p-4 text-center text-blue-500 drop-shadow-lg text-3xl font-bold">
          {currentFrame.dialogue}
        </div>

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

export default DialogueCard;
