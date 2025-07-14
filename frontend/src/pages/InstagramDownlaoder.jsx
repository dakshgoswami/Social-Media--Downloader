// import React, { useContext } from "react";
// import DataContext from "../Context/DataContext";
// import InstagramResponse from "../components/Instagram-Response";
// import { toast } from "react-toastify";
// import { FaPaste } from "react-icons/fa";

// const InstagramDownlaoder = () => {
//   const { handleInstagramUrl, input, setInput, isDownloading, downloadUrl } =
//     useContext(DataContext);

//   const handlePaste = async (e) => {
//     e.preventDefault();
//     if (input) {
//       setInput("");
//     } else {
//       try {
//         const text = await navigator.clipboard.readText();
//         setInput(text);
//       } catch (error) {
//         toast("Clipboard read failed", error);
//       }
//     }
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto min-h-screen bg-zinc-500 flex items-start justify-center">
//       <div className="w-full h-screen flex flex-col gap-8 p-5 items-center bg-linear-to-r from-pink-600 to-purple-600 shadow-xl">
//         <div className="w-full flex flex-col sm:gap-4">
//           <h1 className="text-2xl sm:text-5xl font-bold text-center text-white">
//             Instagram Reels Downloader
//           </h1>
//           <p className="text-base sm:text-xl font-medium text-center text-white">
//             Download Your Favourite Videos
//           </p>
//         </div>

//         <div className="flex flex-col gap-4 w-full md:max-w-2xl">
//           <div className="relative w-full max-w-2xl flex max-sm:flex-col items-center justify-between sm:gap-4 gap-10 md:p-2 rounded bg-white">
//             <div className="w-full flex justify-between items-center sm:gap-2">
//               <input
//                 type="text"
//                 placeholder="Enter Instagram Reel URL"
//                 value={input}
//                 autoComplete="off"
//                 onChange={(e) => setInput(e.target.value)}
//                 className="w-full text-base sm:text-base py-5 px-4 sm:py-4 rounded md:bg-gray-300 text-black focus:outline-pink-500"
//               />
//               <button
//                 className="bg-zinc-200 flex items-center justify-between gap-2 px-4 py-5 sm:px-4 sm:py-4 rounded font-semibold text-sm sm:text-base text-black cursor-pointer"
//                 onClick={handlePaste}
//               >
//                 <FaPaste />
//                 {input ? "Clear" : "Paste"}
//               </button>
//             </div>
//             <button
//               className={`hidden sm:block px-6 py-4 sm:px-4 sm:py-4 rounded font-semibold text-sm sm:text-base text-white w-full sm:w-auto cursor-pointer ${
//                 downloadUrl
//                   ? "bg-gray-500"
//                   : "bg-linear-to-r from-blue-700 to-blue-400"
//               }`}
//               onClick={handleInstagramUrl}
//               disabled={downloadUrl}
//             >
//               {isDownloading ? "Downloading..." : "Download"}
//             </button>
//           </div>
//           <button
//             className={`sm:hidden block px-6 py-4 sm:px-4 sm:py-4 rounded font-semibold text-sm sm:text-base text-white w-full sm:w-auto cursor-pointer ${
//               downloadUrl
//                 ? "bg-gray-500"
//                 : "bg-linear-to-r from-blue-700 to-blue-400"
//             }`}
//             onClick={handleInstagramUrl}
//             disabled={downloadUrl}
//           >
//             {isDownloading ? "Downloading..." : "Download"}
//           </button>
//         </div>

//         {isDownloading ? (
//           <div className="relative max-w-2xl flex flex-col gap-2 p-2 items-center justify-center bg-white w-full rounded-xl shadow-lg">
//             <h1 className="text-base text-black font-bold">
//               Your Video Is Downloading...
//             </h1>
//             <p className="text-xs text-black font-medium animate-bounce">
//               Please Wait For 5 to 10 seconds 😄
//             </p>
//             <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black"></div>
//             <p className="text-xs text-red-500 font-medium">
//               If it's fail try one more time 😄
//             </p>
//           </div>
//         ) : (
//           <InstagramResponse />
//         )}
//       </div>
//     </div>
//   );
// };

// export default InstagramDownlaoder;
