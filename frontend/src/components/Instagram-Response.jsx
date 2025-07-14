// import { useContext } from "react";
// import DataContext from "../Context/DataContext";
// import { useEffect, useState } from "react";

// const InstagramResponse = () => {
//   const { downloadUrl, handleClean } = useContext(DataContext);
//   console.log(downloadUrl);

//   const [countdown, setCountdown] = useState(10);
//   const [linkDisabled, setLinkDisabled] = useState(false);

//   useEffect(() => {
//     if (downloadUrl) {
//       setCountdown(10);
//       setLinkDisabled(false);

//       const interval = setInterval(() => {
//         setCountdown((prev) => {
//           if (prev <= 1) {
//             clearInterval(interval);
//             setLinkDisabled(true); // disable after countdown
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);

//       return () => clearInterval(interval);
//     }
//   }, [downloadUrl]);
//   if (!downloadUrl) return null;

//   return (
//     <div className="w-full flex flex-col items-center justify-center gap-4 rounded overflow-hidden">
//       <div className="relative bg-white flex justify-center items-center w-[180px] h-[300px] sm:w-[260px] sm:h-[450px] rounded-xl shadow-lg overflow-hidden">
//         <video
//           src={downloadUrl}
//           className="absolute top-0 left-0 w-full h-full object-cover"
//           muted
//           controls
//           playsInline
//           controlsList="nodownload"
//         />
//         <a
//           href={`http://localhost:3000/api/instagram/download/?video=${downloadUrl}`}
//           onClick={(e) => {
//             if (linkDisabled) e.preventDefault(); // block navigation
//           }}
//           className={` ${
//             linkDisabled
//               ? "bg-gray-500 cursor-not-allowed"
//               : "bg-blue-600 hover:bg-blue-700 text-white"
//           } text-white absolute bottom-0 w-full text-center p-2 z-50 text-xs sm:px-5 sm:py-2 font-bold hover:bg-blue-700 transition`}
//         >
//           {linkDisabled ? "Link Expired" : `Download Video (${countdown}s)`}{" "}
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

// export default InstagramResponse;
