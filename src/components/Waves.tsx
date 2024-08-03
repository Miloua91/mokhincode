import { PauseCircleIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

interface prop {
  audio: string;
}

export default function Wave(props: prop) {
  const wavesurferRef = useRef<WaveSurfer | null>(null); // Specify the type of wavesurferRef
  const [playPause, setPlayPause] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!wavesurferRef.current) {
      wavesurferRef.current = WaveSurfer.create({
        container: "#waveform",
        height: 80,
        waveColor: "#333",
        progressColor: "#333",
        url: `/${props.audio}`,
        barHeight: 0.9,
        barGap: 2,
        barWidth: 3,
        dragToSeek: true,
      });

      wavesurferRef.current.on("ready", () => {
        setLoading(false);
      });
      wavesurferRef.current.on("finish", () => {
        wavesurferRef.current?.seekTo(0);
        setPlayPause(false);
      });

      wavesurferRef.current.on("interaction", () => {
        wavesurferRef.current?.play();
        setPlayPause(true);
      });
    }

    return () => {
      if (wavesurferRef.current) {
        wavesurferRef.current.destroy();
      }
    };
  }, [wavesurferRef]);

  const togglePlay = () => {
    setPlayPause(true);
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
    }
  };

  const togglePause = () => {
    setPlayPause(false);
    if (wavesurferRef.current) {
      wavesurferRef.current.pause();
    }
  };

  return (
    <div className="mb-4 w-full h-20 bg-gray-100 rounded-xl">
      <div className="flex items-center">
        <div className="w-10 h-10 py-5 ml-5 mr-2">
          {loading ? (
            <PlayCircleIcon
              height={36}
              width={36}
              className="animate-pulse"
              color="black"
            />
          ) : !playPause ? (
            <PlayCircleIcon
              height={36}
              width={36}
              onClick={togglePlay}
              color="black"
            />
          ) : (
            <PauseCircleIcon
              height={36}
              width={36}
              onClick={togglePause}
              color="black"
            />
          )}
        </div>
        <div className="w-full h-10">
          <div id="waveform" />
        </div>
      </div>
    </div>
  );
}
