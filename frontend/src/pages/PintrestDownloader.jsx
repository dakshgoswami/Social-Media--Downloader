import React, { useContext } from "react";
import DataContext from "../Context/DataContext";
import { toast } from "react-toastify";
import { FaPaste } from "react-icons/fa";
import PintrestResponse from "../components/Pintrest-Response";
import { Helmet } from "react-helmet-async";
import SocialTags from "../components/SocialTags";

const PintrestDownloader = () => {
  const { handlePinterestUrl, input, setInput, isDownloading, downloadUrl } =
    useContext(DataContext);

  const handlePaste = async (e) => {
    e.preventDefault();
    if (input) {
      setInput("");
    } else {
      try {
        const text = await navigator.clipboard.readText();
        setInput(text);
      } catch (error) {
        toast("Clipboard read failed", error);
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Pinterest Video Downloader - Free Videos Downloader | SocioDown
        </title>
        <meta
          name="description"
          content="Download Pinterest videos and shorts easily with SocioDown. No login, fast, and completely free."
        />
        <link rel="canonical" href="https://yourdomain.com/pinterest" />
        <meta
          property="og:title"
          content="Download Pinterest Videos - SocioDown"
        />
        <meta
          property="og:description"
          content="Fast and free Pinterest downloader. Posts, Videos."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/preview.jpg"
        />
      </Helmet>
      <div className="w-full min-h-screen bg-zinc-200 pb-4">
        <div className="w-full flex flex-col gap-8 px-[20px] py-[30px] items-center shadow-xl bg-linear-to-r from-red-900 to-red-700">
          <div className="w-full flex flex-col sm:gap-4">
            <h1 className="text-xl sm:text-5xl font-bold text-center text-white">
              Pinterest Video Downloader
            </h1>
            <p className="text-sm sm:text-xl font-medium text-center text-white">
              Download Your Favourite Videos
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full md:max-w-2xl">
            <div className="relative w-full max-w-2xl flex max-sm:flex-col items-center justify-between sm:gap-4 gap-10 md:p-2 rounded bg-white">
              <div className="w-full flex justify-between items-center sm:gap-2">
                <input
                  type="text"
                  placeholder="Enter Pinterest Video URL"
                  value={input}
                  autoComplete="off"
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full text-base sm:text-base py-5 px-4 sm:py-4 rounded md:bg-gray-300 text-black focus:outline-red-500"
                />
                <button
                  className="bg-zinc-200 flex items-center justify-between gap-2 px-4 py-5 sm:px-4 sm:py-4 rounded font-semibold text-sm sm:text-base text-black cursor-pointer"
                  onClick={handlePaste}
                >
                  <FaPaste />
                  {input ? "Clear" : "Paste"}
                </button>
              </div>
              <button
                className={`hidden sm:block border px-6 py-4 sm:px-4 sm:py-4 rounded font-semibold text-sm sm:text-base text-white w-full sm:w-auto cursor-pointer ${
                  downloadUrl
                    ? "bg-gray-500"
                    : "bg-linear-to-r from-red-900 to-red-700"
                }`}
                onClick={handlePinterestUrl}
                disabled={isDownloading || downloadUrl}
              >
                {isDownloading ? "Downloading..." : "Download"}
              </button>
            </div>
            <button
              className={`sm:hidden block border px-6 py-4 sm:px-4 sm:py-4 rounded font-semibold text-sm sm:text-base text-white w-full sm:w-auto cursor-pointer ${
                downloadUrl
                  ? "bg-gray-500"
                  : "bg-linear-to-r from-red-900 to-red-700"
              }`}
              onClick={handlePinterestUrl}
              disabled={isDownloading}
            >
              {isDownloading ? "Downloading..." : "Download"}
            </button>
          </div>

          {isDownloading ? (
            <div className="relative max-w-2xl flex flex-col gap-2 p-2 items-center justify-center bg-white w-full rounded-xl shadow-lg">
              <h1 className="text-base text-black font-bold">
                Your Video Is Downloading...
              </h1>
              <p className="text-xs text-black font-medium animate-bounce">
                Please Wait For 5 to 10 seconds 😄
              </p>
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black"></div>
              <p className="text-xs text-red-500 font-medium">
                If it's fail try one more time 😄
              </p>
            </div>
          ) : (
            <PintrestResponse />
          )}
        </div>
        <SocialTags />
      </div>
    </>
  );
};

export default PintrestDownloader;
