import Image from "next/image";
import konjiam from "@public/map/map-konjiam.jpg";
import CameraLabel from "./camera-button";
import {useState} from "react";
import {Popover, PopoverContent, PopoverTrigger} from "@radix-ui/react-popover";
import {cn} from "@/lib/utils";

const SPOT_LIST = [
  {
    tag: "top",
    name: "정상 휴게소",
    top: 10,
    left: 0,
    isAvailable: true,
  },
  {
    tag: "top-slope",
    name: "정상부 슬로프",
    top: 60,
    left: 90,
    isAvailable: true,
  },
  {
    tag: "middle-slope",
    name: "중간 슬로프",
    top: 250,
    left: 280,
    isAvailable: false,
  },
  {
    tag: "beginner-base",
    name: "초중급 베이스",
    top: 380,
    left: 350,
    isAvailable: true,
  },
  {
    tag: "intermediate-base",
    name: "중상급 베이스",
    top: 480,
    left: 260,
    isAvailable: true,
  },
];

const Map = () => {
  return (
    <div className="w-[666px] h-[629px] relative">
      <Image src={konjiam} alt="map-konjiam" />
      {SPOT_LIST.map(spot => (
        <Popover key={spot.tag}>
          <PopoverTrigger
            onClick={e => {
              if (!spot.isAvailable) {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
            className={cn("absolute", !spot.isAvailable && "cursor-not-allowed")}
            style={{top: spot.top, left: spot.left}}
          >
            <CameraLabel name={spot.name} disabled={!spot.isAvailable} />
          </PopoverTrigger>
          <PopoverContent
            className={cn("flex justify-center items-center z-10 bg-black rounded-2xl p-5 m-2 w-80 h-50")}
          >
            <video src={`/video/${spot.tag}.mov`} muted autoPlay loop />
          </PopoverContent>
        </Popover>
      ))}
      {/* <video src="http://konjiam.live.cdn.cloudn.co.kr/konjiam/cam01.stream/playlist.m3u8" muted autoPlay /> */}
    </div>
  );
};

export default Map;
