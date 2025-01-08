import React from "react";

const LeaderBoard = () => {
  const players = [
    { name: "Yogi", wins: 0 },
    { name: "Abhi", wins: 0 },
    { name: "Suraj", wins: 0 },
  ];

  return (
    <div className="absolute top-8 left-8 bg-transparent p-4 rounded-xl shadow-lg space-y-4 max-w-xs">
      <h3 className="text-xl font-semibold">DDC LeaderBoard</h3>
      {players.map((player, index) => (
        <div key={index} className="flex justify-between items-center">
          <span className="font-semibold text-xl">{player.name}</span>
          <span className="text-white text-lg">Wins: {player.wins}</span>
        </div>
      ))}
    </div>
  );
};

export default LeaderBoard;
