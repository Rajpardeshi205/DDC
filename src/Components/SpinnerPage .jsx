import React, { useState, useEffect } from "react";

const SpinnerPage = () => {
  const initialNames = ["yogi", "abhi", "suraj"];
  const [names, setNames] = useState(initialNames);
  const [refereeList, setRefereeList] = useState([]);
  const [spinning, setSpinning] = useState(false); // Control animation
  const [selectedReferee, setSelectedReferee] = useState("");

  const handleSpin = () => {
    if (names.length > 0) {
      setSpinning(true);

      // Simulate a spin delay before selecting a referee
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * names.length);
        const selectedName = names[randomIndex];

        setSelectedReferee(selectedName);
        setRefereeList((prev) => [...prev, selectedName]); // Add to referee list

        const remainingNames = names.filter(
          (_, index) => index !== randomIndex
        );
        setNames(remainingNames);

        setSpinning(false); // Stop spinning
      }, 2000); // 2-second spinning animation
    }
  };

  const resetSpinner = () => {
    setNames(initialNames);
    setRefereeList([]);
    setSelectedReferee("");
  };

  useEffect(() => {
    if (names.length === 0) {
      setTimeout(() => {
        resetSpinner();
      }, 2000);
    }
  }, [names]);

  return (
    <div className="h-screen justify-start  ">
      {/* Spinner Container at Top Right */}
      <div
        className={`absolute bottom-56 left-4 w-40 h-40 border-4 border-gray-600 rounded-full flex items-center justify-center ${
          spinning ? "animate-spin-slow" : ""
        }`}
      >
        {names.map((name, index) => (
          <div
            key={index}
            className={`absolute w-12 h-12 flex items-center justify-center bg-red-500 text-white text-sm font-bold rounded-full`}
            style={{
              transform: `rotate(${
                (360 / names.length) * index
              }deg) translate(80px) rotate(-${
                (360 / names.length) * index
              }deg)`,
            }}
          >
            {name}
          </div>
        ))}

        {/* Selected Referee */}
        {selectedReferee && !spinning && (
          <div className="absolute flex flex-col items-center">
            <div className="text-white text-lg font-bold">
              {selectedReferee}
            </div>
            <div className="text-yellow-400 text-sm font-semibold">Referee</div>
          </div>
        )}
      </div>

      {/* Spin Button */}
      <div className="absolute bottom-28 left-4">
        <button
          className={`mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 ${
            spinning || names.length === 0
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={handleSpin}
          disabled={spinning || names.length === 0}
        >
          Spin
        </button>
      </div>

      {/* Referee History */}
      <div className="absolute bottom-4 left-4 text-white text-lg font-bold">
        Referees: {refereeList.join(", ")}
      </div>
    </div>
  );
};

export default SpinnerPage;
