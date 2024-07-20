import {cn} from "@/lib/utils";
import VideoIcon from "./icons/video";

interface CameraButtonProps {
  className?: string;
  name: string;
  disabled?: boolean;
}

const CameraLabel = ({className, name, disabled}: CameraButtonProps) => {
  return (
    <div
      className={cn(
        "w-fit flex gap-1 items-center px-3 py-1 rounded-3xl bg-cyan-800 font-bold text-white",
        disabled && "bg-red-300 opacity-70",
        className
      )}
    >
      <VideoIcon />
      <span>{name}</span>
    </div>
  );
};

export default CameraLabel;
