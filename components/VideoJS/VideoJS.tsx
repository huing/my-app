import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export interface PlayerDTO {
  // 视频链接
  src: string;
  // 自动播放
  autoplay?: boolean;
  // 播放器控制条
  controls?: boolean;
  // 音量 0~1
  volume?: number;
}

const VideoJS: React.FC<PlayerDTO> = (props) => {
  const { src, autoplay, controls } = props;
  const [options, setOptions] = useState<any>(undefined);
  const videoRef = useRef(null);
  const playerRef = useRef<videojs.Player | null>(null);

  useEffect(() => {
    setOptions({
      responsive: true,
      fluid: true,
      autoplay: !!autoplay,
      controls: !!controls,
      sources: [
        {
          src,
          type: "application/x-mpegURL",
        },
      ],
    });
  }, [autoplay, controls, src]);

  useEffect(() => {
    console.log("before", options);

    if (!options) {
      return;
    }
    console.log("after", options);

    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;
      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready", player);
        // onReady && onReady(player);
      }));
    } else {
      const player = playerRef.current;
      console.log("else", player);
      player.controls(options.controls);
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  useEffect(() => {
    const player = playerRef.current;
    return () => {
      console.log("player.dispose", player);

      if (player) {
        player.dispose();
        playerRef.current = null;
      }
      console.log("after", player);
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
};

export default VideoJS;
