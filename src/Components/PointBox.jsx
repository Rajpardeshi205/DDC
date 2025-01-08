import React, { useState } from "react";

const PointBox = () => {
  const [YogiScore, setYogiScore] = useState(0);
  const [AbhiScore, setAbhiScore] = useState(0);
  const [SurajScore, setSurajScore] = useState(0);

  const [winner, setWinner] = useState(null);

  const handleAddPoints = (user) => {
    if (user === "Yogi") setYogiScore(YogiScore + 10);
    if (user === "Abhi") setAbhiScore(AbhiScore + 10);
    if (user === "Suraj") setSurajScore(SurajScore + 10);
  };

  const handleSubtractPoints = (user) => {
    if (user === "Yogi") setYogiScore(YogiScore - 10);
    if (user === "Abhi") setAbhiScore(AbhiScore - 10);
    if (user === "Suraj") setSurajScore(SurajScore - 10);
  };

  const handleSubmitScore = () => {
    let highestScore = Math.max(YogiScore, AbhiScore, SurajScore);
    let winnerName = "";
    let winnerProfile = "";

    if (highestScore === YogiScore) {
      winnerName = "Yogi";
      winnerProfile =
        "https://pbs.twimg.com/profile_images/1549802431927951360/AWXSlYqr_400x400.jpg";
    } else if (highestScore === AbhiScore) {
      winnerName = "Abhi";
      winnerProfile =
        "https://pbs.twimg.com/profile_images/1295243276228861954/gHc8v53N_400x400.jpg";
    } else if (highestScore === SurajScore) {
      winnerName = "Suraj";
      winnerProfile =
        "https://pbs.twimg.com/profile_images/1119291587559694336/cmKyly4w_400x400.jpg";
    }

    setWinner({ name: winnerName, profile: winnerProfile });

    console.log("Scores Submitted:");
    console.log(`Yogi Doe: ${YogiScore}`);
    console.log(`Abhi Smith: ${AbhiScore}`);
    console.log(`Suraj Yogison: ${SurajScore}`);
  };

  return (
    <div>
      <div className="absolute bottom-8 right-8 bg-tr p-4 rounded-xl shadow-lg space-y-4">
        {/* Profile 1 */}
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full"
            src="https://pbs.twimg.com/profile_images/1549802431927951360/AWXSlYqr_400x400.jpg"
            alt="Profile 1"
          />
          <div>
            <p className="font-semibold text-xl">Yogi</p>
            <p className="text-lg text-white">Score: {YogiScore}</p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleAddPoints("Yogi")}
                className="bg-green-900 text-white border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-full hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span className="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                +10
              </button>

              <button
                onClick={() => handleSubtractPoints("Yogi")}
                className="bg-red-900 text-white border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-full hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                -10
              </button>
            </div>
          </div>
        </div>

        {/* Profile 2 */}
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full"
            src="https://pbs.twimg.com/profile_images/1295243276228861954/gHc8v53N_400x400.jpg"
            alt="Profile 2"
          />
          <div>
            <p className="font-semibold text-xl">Abhi</p>
            <p className="text-lg text-white">Score: {AbhiScore}</p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleAddPoints("Abhi")}
                className="bg-green-900 text-white border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-full hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span className="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                +10
              </button>
              <button
                onClick={() => handleSubtractPoints("Abhi")}
                className="bg-red-900 text-white border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-full hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                -10
              </button>
            </div>
          </div>
        </div>

        {/* Profile 3 */}
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full"
            src="https://pbs.twimg.com/profile_images/1119291587559694336/cmKyly4w_400x400.jpg"
            alt="Profile 3"
          />
          <div>
            <p className="font-semibold text-xl">Suraj</p>
            <p className="text-lg text-white">Score: {SurajScore}</p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleAddPoints("Suraj")}
                className="bg-green-900 text-white border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-full hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span className="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                +10
              </button>
              <button
                onClick={() => handleSubtractPoints("Suraj")}
                className="bg-red-900 text-white border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-full hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              >
                <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                -10
              </button>
            </div>
          </div>
        </div>

        {/* Submit Score Button */}
        <div className="mt-4">
          <button
            onClick={handleSubmitScore}
            className="cursor-pointer font-semibold overflow-hidden relative z-100 border border-orange-500 group px-8 py-2"
          >
            <span className="relative z-10 text-orange-500 group-hover:text-white text-xl duration-500">
              Submit Scores
            </span>
            <span className="absolute w-full h-full bg-orange-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"></span>
            <span className="absolute w-full h-full bg-orange-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"></span>
          </button>
        </div>

        {/* Show the Winner */}
        {winner && (
          <div className="mt-6 flex items-center space-x-4">
            <img
              className="w-16 h-16 rounded-full"
              src={winner.profile}
              alt={winner.name}
            />
            <div>
              <p className="font-semibold text-xl">{winner.name} Wins!</p>
              <p className="text-lg text-white">Congrats!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PointBox;
