import { useContext, useState, useEffect } from "react";
import DataContext from "../Context/DataContext";

const PintrestResponse = () => {
  const { downloadUrl, handleClean } = useContext(DataContext);
  const [countdown, setCountdown] = useState(10);
  const [linkDisabled, setLinkDisabled] = useState(false);
  const backend_url = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (downloadUrl) {
      setCountdown(10);
      setLinkDisabled(false);

      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            setLinkDisabled(true); // disable after countdown
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [downloadUrl]);

  if (!downloadUrl) return null;

  // console.log(downloadUrl);
  // console.log(isDownloading);&audio=${encodeURIComponent(audioUrl)}

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 rounded overflow-hidden">
      <div className="relative bg-white flex justify-center items-center w-[180px] h-[300px] sm:w-[220px] sm:h-[360px] rounded-xl shadow-lg overflow-hidden">
        <video
          src={`${backend_url}/api/pinterest/download?file=${downloadUrl}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          muted
          controls
          controlsList="nodownload"
        />
        <a
          href={
            linkDisabled
              ? undefined
              : `${backend_url}/api/pinterest/download?file=${downloadUrl}`
          }
          onClick={(e) => {
            if (linkDisabled) e.preventDefault(); // block navigation
          }}
          className={`absolute bottom-0 w-full text-center p-2 z-50 text-xs sm:px-5 sm:py-2 font-bold transition
    ${
      linkDisabled
        ? "bg-gray-500 cursor-not-allowed"
        : "bg-white hover:bg-zinc-200 text-black"
    }
  `}
        >
          {linkDisabled ? "Link Expired" : `Download Video (${countdown}s)`}
        </a>
        <div
          className="absolute top-1 right-1 sm:top-2 sm:right-2 flex justify-center items-center cursor-pointer rounded-full size-6 bg-black opacity-50 text-white font-bold"
          onClick={handleClean}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default PintrestResponse;
