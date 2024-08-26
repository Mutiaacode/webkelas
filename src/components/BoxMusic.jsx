import { useRef, useState } from "react";

const MusicPlayerBox = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      id="MusicPlayerBox"
      className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-4 rounded-lg shadow-lg text-white max-w-2xl mx-auto"
    >
      <div className="flex justify-between items-center">
     
        <button
          className="play-button h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-md"
          onClick={handlePlayPause}
        >
          <img
            src={isPlaying ? "pause.png" : "play.png"}
            alt={isPlaying ? "Pause Button" : "Play Button"}
            className="h-6 w-6"
          />
        </button>
      </div>
      <h1 className="text-xl font-semibold mt-4">Now Playing</h1>
      <p className="text-sm opacity-75">Your song title</p>
      
      <audio ref={audioRef} src="assets/duka.mp3" preload="auto" />
    </div>
  );
};

export default MusicPlayerBox;
