import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const VideoWeb = ({ setSelectedPage }: Props) => {
  const [videoWatched, setVideoWatched] = useState(false);
  const [isVideoWatched, setIsVideoWatched] = useState(false);
  useEffect(() => {
    // เรียกตรวจสอบสถานะการดูวิดีโอที่เก็บไว้ใน localStorage หรือ sessionStorage
    const isVideoWatched = localStorage.getItem("videoWatched");
    setVideoWatched(!!isVideoWatched);
  }, []);

  const handleVideoEnd = () => {
    // เมื่อดูวิดีโอจบแล้ว ตั้งค่าสถานะเป็น "ดูแล้ว" และเก็บใน localStorage หรือ sessionStorage
    setVideoWatched(true);
    localStorage.setItem("videoWatched", "true");
  };

  const handleResetVideo = () => {
    // เมื่อกด Watch Again รีเซ็ตสถานะการดูวิดีโอ และลบค่าที่เก็บใน localStorage หรือ sessionStorage
    setVideoWatched(false);
    localStorage.removeItem("videoWatched");
  };

  const videoOptions = {
    width: "640",
    height: "360",
  };

  return (
    <motion.div
      className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
      onViewportEnter={() => setSelectedPage(SelectedPage.VideoDataSci)}
    >
      <div className="z-10 mt-32 md:basis-3/5">
        <motion.div
          className="md:-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="relative">
            <div className="items-center before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
              {!videoWatched ? (
                <div className="items-center">
                  {/* <div className="relative"> */}
                  {/* <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext"></div> */}
                  <HText>Video Not Watched</HText>
                  <YouTube
                    videoId="dOb2WFNbM_g"
                    opts={videoOptions}
                    onEnd={handleVideoEnd}
                  />
                  <button
                    // type="submit"
                    onClick={handleVideoEnd}
                    className="mt-5 items-center rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                  >
                    Mark as Watched
                  </button>
                  {/* <button onClick={handleVideoEnd}>Mark as Watched</button> */}
                </div>
              ) : (
                <div>
                  <HText>Video Watched</HText>
                  <button
                    // type="submit"
                    onClick={handleResetVideo}
                    className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                  >
                    Watch Again
                  </button>
                  {/* <button onClick={handleResetVideo}>Watch Again</button> */}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VideoWeb;
