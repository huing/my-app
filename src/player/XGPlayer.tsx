// import VideoJS from "./VideoJS";

// export { VideoJS as XGPlayer };

import React, { useEffect, useRef, useState } from "react";
import Player from "xgplayer";
import HlsJsPlayer from "xgplayer-hls.js";
import { v4 as uuidv4 } from "uuid";
import styles from "./index.module.less";

export interface XGPlayerDTO {
  // 视频链接
  src: string;
  // 自动播放
  autoplay?: boolean;
  // 播放器控制条
  controls?: boolean;
  // 音量 0~1
  volume?: number;
}
// let player: Player;
export const XGPlayer: React.FC<XGPlayerDTO> = (props) => {
  const { src, autoplay, controls = true, volume = 0.6 } = props;
  const playerRef = useRef<Player | null>(null);
  const playerKey = useRef<string>(uuidv4());
  const playerConfig = useRef<any>(null);

  const [newKey] = useState(uuidv4());
  // 视频配置参数
  const [config, setConfig] = useState<any>(undefined);
  // 视频链接
  const [url, setUrl] = useState("");
  // 视频类型
  const [type, setType] = useState<"m3u8" | "mp4" | "">("");

  // 设置视频链接和视频类型
  useEffect(() => {
    if (src) {
      const newUrl = src
        ?.replace(
          /^http:\/\/qvs-live-hls.hzddyx.com:\d+/gi,
          "https://qvs-live-hls-rtmp.zhihuiyan.cc"
        )
        .replace(
          /^http:\/\/qvs-live-hls.28181.jlscyw.org:\d+/gi,
          "https://qvs-live-hls-28181.zhihuiyan.cc"
        );
      const videoType = newUrl?.split(".").pop() === "mp4" ? "mp4" : "m3u8";
      setUrl(newUrl);
      setType(videoType);
    }
    return () => {
      console.log("设置视频链接和视频类型 src 变化都会执行");
    };
  }, [src]);

  // 视频配置参数
  useEffect(() => {
    setConfig({
      id: playerKey.current,
      url,
      type,
      autoplay,
      controls: true,
      playbackRate: type === "m3u8" ? [1] : [0.5, 1, 5, 10], //传入倍速可选数组
      // 使播放器宽度跟随父元素的宽度大小变化
      fluid: true,
      // 显示视频首帧, 与 autoplay 不可同时为true
      videoInit: !autoplay,
      lang: "zh-cn",
      volume,
      playsinline: true,
    });
    return () => {
      console.log(
        "视频配置参数 playerKey, url, autoplay,type",
        playerKey.current
      );
    };
  }, [playerKey, url, autoplay, type]);

  // 初始化播放器
  useEffect(() => {
    if (!playerRef.current) {
      console.log("playerRef.current为空");

      if (config && type === "m3u8") {
        console.log("执行了 new HlsJsPlayer ", playerKey.current);
        const pl = new HlsJsPlayer(config);
        pl.on("destroy", () => {
          console.log("销毁事件监听 destroy");
        });
        playerRef.current = pl;
      }
      if (config && type === "mp4") {
        playerRef.current = new Player(config);
      }
    } else {
      console.log("视频已存在 则设置视频链接", playerRef);
      playerRef.current.src = config.url;
    }
    return () => {
      console.log("初始化播放器 卸载");
    };
  }, [config, type]);

  // 销毁播放器
  useEffect(() => {
    // const player = playerRef.current;
    return () => {
      console.log("playerRef改变 销毁播放器", playerRef);
      // if (playerRef.current) {
      //   playerRef.current.src = "";
      //   playerRef.current.hls.destroy();
      // }
      playerRef.current?.destroy(true);
      // if (playerRef.current) {
      //   playerRef.current.src = "";
      //   playerRef.current.hls.destroy();
      // }
      playerRef.current = null;
    };
  }, [playerRef]);
  console.log("更新即打印", playerKey.current);

  return <div id={playerKey.current} className={styles.mseplayer} />;
};

export default XGPlayer;
