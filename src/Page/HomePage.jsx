import React, { useState } from "react";
import FrameCard from "../Components/FrameCard";
import PointBox from "../Components/PointBox";
import Phase2Button from "../Components/Phase2Button";
import DirectorCard from "../Components/DirectorCard";
import Phase3Button from "../Components/Phase3Button";
import DialogueCard from "../Components/DialogueCard";
import LeaderBoard from "../Components/LeaderBoard ";
import SpinnerPage from "../Components/SpinnerPage ";

const HomePage = () => {
  const [showDirectorCard, setShowDirectorCard] = useState(false);
  const [showDialogueCard, setShowDialogueCard] = useState(false);

  const handlePhase2ButtonClick = () => {
    setShowDirectorCard(true);
  };

  const handlePhase3ButtonClick = () => {
    setShowDialogueCard(true);
  };

  return (
    <div className="bg-gradient-to-b from-red-400 to-blue-900 flex flex-col items-center justify-center h-screen w-screen">
      <div className="mb-8 mt-24">
        {showDialogueCard ? (
          <DialogueCard />
        ) : showDirectorCard ? (
          <DirectorCard />
        ) : (
          <FrameCard />
        )}
      </div>

      {showDirectorCard && !showDialogueCard && (
        <Phase3Button onClick={handlePhase3ButtonClick} />
      )}

      {!showDirectorCard && !showDialogueCard && (
        <Phase2Button onClick={handlePhase2ButtonClick} />
      )}

      <PointBox />
      <LeaderBoard />

      <SpinnerPage />
    </div>
  );
};

export default HomePage;
