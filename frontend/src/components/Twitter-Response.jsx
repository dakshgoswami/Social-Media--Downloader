// import { useContext } from "react";
// import DataContext from "../Context/DataContext";

// const TwitterResponse = () => {
//   const { downloadUrl, handleClean } = useContext(DataContext);
//   const backend_url = import.meta.env.VITE_API_URL;

//   // console.log(isDownloading);&audio=${encodeURIComponent(audioUrl)}
//   if (!downloadUrl) return null;

//   return (
//     <div className="w-full flex flex-col items-center justify-center gap-4 rounded overflow-hidden">
//       <div className="relative bg-white flex justify-center items-center w-[180px] h-[300px] sm:w-[220px] sm:h-[360px] rounded-xl shadow-lg overflow-hidden">
//         <video
//           src={downloadUrl}
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           muted
//           controls
//           controlsList="nodownload"
//         />
//         <a
//           href={`http://localhost:3000/api/twitter/download?video=${encodeURIComponent(
//             downloadUrl
//           )}`}
//           className="bg-white text-black absolute bottom-0 w-full text-center p-2 z-50 text-xs sm:px-5 sm:py-2 font-bold hover:bg-zinc-200 transition"
//         >
//           Download Video
//         </a>
//         <div
//           className="absolute top-1 right-1 sm:top-2 sm:right-2 flex justify-center items-center cursor-pointer rounded-full size-6 bg-black opacity-50 text-white font-bold"
//           onClick={handleClean}
//         >
//           X
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TwitterResponse;
