import Header from "./components/Header";
import Footer from "./components/Footer";
// import InstagramDownlaoder from "./pages/InstagramDownlaoder";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import YouTubeDownloader from "./pages/YouTubeDownloader";
// import TwitterDownloader from "./pages/TwitterDownloader";
// import PintrestDownloader from "./pages/PintrestDownloader";
// import TikTokDownloader from "./pages/TikTokDownloader";

const App = () => {

  return (
    <div className="flex flex-col min-h-screen w-full bg-linear-to-b from-red-900 to-black">
      <ToastContainer />
      <Header />
      <main className="flex-grow">
        <Routes>
          {/* <Route path="/" element={<InstagramDownlaoder />} /> */}
          <Route path="/" element={<YouTubeDownloader />} />
          {/* <Route path="/twitter" element={<TwitterDownloader />} />
          <Route path="/tiktok" element={<TikTokDownloader />} />
          <Route path="/pinterest" element={<PintrestDownloader />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
