import React, {
  useImperativeHandle,
  useRef,
  forwardRef,
  createRef,
  useEffect,
  useState,
} from "react";

const Player = () => {
  const [player, setPlayer] = useState(false);
  return (
    <div>
      {player && (
        <XGPlayer
          autoplay
          src={
            "https://qvs-live-hls-test28181.zhihuiyan.cc:447/2xenzw9g6atva/31011500991320013449.m3u8"
          }
        />
      )}
      {/* <VideoJS
        autoplay
        src={
          "https://qvs-live-hls-testrtmp.zhihuiyan.cc:447/3nm4x0uz0zi1d/330302-96-3.m3u8"
        }
      /> */}
      <button
        onClick={() => {
          setPlayer(!player);
        }}
      >
        点击
      </button>
    </div>
  );
};

export default Player;
