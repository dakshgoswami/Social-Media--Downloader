import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [downloadUrl, setDownloadUrl] = useState("");
  const [input, setInput] = useState("");
  const [isDownloading, setIsDownlaoding] = useState(false);
  const [isAudioURL, setAudioURL] = useState(null);
  const backend_url = import.meta.env.VITE_API_URL
  // console.log(downloadUrl)

  // const handleInstagramUrl = async (e) => {
  //   e.preventDefault();

  //   if (!input || !input.includes("https://www.instagram.com/")) {
  //     return toast("enter valid url", {
  //       position: "top-right", // or top-right / bottom-right etc.
  //       theme: "dark", // Enables dark theme
  //       style: {
  //         fontSize: "12px", // Small text
  //         padding: "8px 16px", // Less padding
  //         minWidth: "150px", // Toast width
  //         maxWidth: "300px", // Optional: limit max width
  //         borderRadius: "10px", // Rounded look
  //         backgroundColor: "#1f1f1f", // Override for true dark
  //         color: "red", // Text color
  //       },
  //     });
  //   }

  //   setIsDownlaoding(true);

  //   try {
  //     const response = await axios.post("backend_url/api/instagram", {
  //       instagramURL: input,
  //     });
  //     // console.log(response);
  //     if (response.status === 200) {
  //       const data = await response.data;
  //       setDownloadUrl(data.video);
  //       setIsDownlaoding(false);
  //       toast("Download Completed", {
  //         position: "top-right", // or top-right / bottom-right etc.
  //         theme: "dark", // Enables dark theme
  //         style: {
  //           fontSize: "12px", // Small text
  //           padding: "8px 16px", // Less padding
  //           minWidth: "150px", // Toast width
  //           maxWidth: "300px", // Optional: limit max width
  //           borderRadius: "10px", // Rounded look
  //           backgroundColor: "#1f1f1f", // Override for true dark
  //           color: "#fff", // Text color
  //         },
  //       });
  //     } else {
  //       if (response.status === 404 || response.status === 500) {
  //         toast.error(response.error);
  //       }
  //       setIsDownlaoding(false);
  //     }
  //   } catch (error) {
  //     toast.error("Failed to fetch video. Please try again later.", {
  //       position: "top-right", // or top-right / bottom-right etc.
  //       theme: "dark", // Enables dark theme
  //       style: {
  //         fontSize: "12px", // Small text
  //         padding: "8px 16px", // Less padding
  //         minWidth: "150px", // Toast width
  //         maxWidth: "300px", // Optional: limit max width
  //         borderRadius: "10px", // Rounded look
  //         backgroundColor: "#1f1f1f", // Override for true dark
  //         color: "red", // Text color
  //       },
  //     });
  //     setIsDownlaoding(false);
  //   }
  // };

  const handleTwitterUrl = async (e) => {
    e.preventDefault();
    if (!input || !input.includes("https://x.com/")) {
      return toast("enter valid url", {
        position: "top-right", // or top-right / bottom-right etc.
        theme: "dark", // Enables dark theme
        style: {
          fontSize: "12px", // Small text
          padding: "8px 16px", // Less padding
          minWidth: "150px", // Toast width
          maxWidth: "300px", // Optional: limit max width
          borderRadius: "10px", // Rounded look
          backgroundColor: "#1f1f1f", // Override for true dark
          color: "red", // Text color
        },
      });
    }
    setIsDownlaoding(true);
    try {
      const response = await axios.post(`${backend_url}/api/twitter`, {
        tweetUrl: input,
      });
      // console.log("response from twitter", response);
      if (response.status === 200) {
        const data = await response.data;
        setDownloadUrl(data.videoUrl);
        setIsDownlaoding(false);
        toast("Download Completed", {
          position: "top-right", // or top-right / bottom-right etc.
          theme: "dark", // Enables dark theme
          style: {
            fontSize: "12px", // Small text
            padding: "8px 16px", // Less padding
            minWidth: "150px", // Toast width
            maxWidth: "300px", // Optional: limit max width
            borderRadius: "10px", // Rounded look
            backgroundColor: "#1f1f1f", // Override for true dark
            color: "#fff", // Text color
          },
        });
      } else {
        if (response.status === 404 || response.status === 500) {
          toast.error(response.error);
        }
        setIsDownlaoding(false);
      }
    } catch (error) {
      toast.error("Failed to fetch video. Please try again later.", {
        position: "top-right", // or top-right / bottom-right etc.
        theme: "dark", // Enables dark theme
        style: {
          fontSize: "12px", // Small text
          padding: "8px 16px", // Less padding
          minWidth: "150px", // Toast width
          maxWidth: "300px", // Optional: limit max width
          borderRadius: "10px", // Rounded look
          backgroundColor: "#1f1f1f", // Override for true dark
          color: "red", // Text color
        },
      });
      setIsDownlaoding(false);
    }
  };

  const handleTikTokUrl = async (e) => {
    e.preventDefault();
    if (!input || !input.includes("https://www.tiktok.com/")) {
      return toast("enter valid url", {
        position: "top-right", // or top-right / bottom-right etc.
        theme: "dark", // Enables dark theme
        style: {
          fontSize: "12px", // Small text
          padding: "8px 16px", // Less padding
          minWidth: "150px", // Toast width
          maxWidth: "300px", // Optional: limit max width
          borderRadius: "10px", // Rounded look
          backgroundColor: "#1f1f1f", // Override for true dark
          color: "red", // Text color
        },
      });
    }
    setIsDownlaoding(true);
    try {
      const response = await axios.post(`${backend_url}/api/tiktok`, {
        tiktokUrl: input,
      });

      if (response.status === 200) {
        const data = await response.data;
        setDownloadUrl(data.video);
        setIsDownlaoding(false);
        toast("Download Completed", {
          position: "top-right", // or top-right / bottom-right etc.
          theme: "dark", // Enables dark theme
          style: {
            fontSize: "12px", // Small text
            padding: "8px 16px", // Less padding
            minWidth: "150px", // Toast width
            maxWidth: "300px", // Optional: limit max width
            borderRadius: "10px", // Rounded look
            backgroundColor: "#1f1f1f", // Override for true dark
            color: "#fff", // Text color
          },
        });
      } else {
        if (response.status === 404 || response.status === 500) {
          toast.error(response.error);
        }
        setIsDownlaoding(false);
      }
    } catch (error) {
      toast.error("Failed to fetch video. Please try again later.", {
        position: "top-right", // or top-right / bottom-right etc.
        theme: "dark", // Enables dark theme
        style: {
          fontSize: "12px", // Small text
          padding: "8px 16px", // Less padding
          minWidth: "150px", // Toast width
          maxWidth: "300px", // Optional: limit max width
          borderRadius: "10px", // Rounded look
          backgroundColor: "#1f1f1f", // Override for true dark
          color: "red", // Text color
        },
      });
      setIsDownlaoding(false);
    }
  };

  const handleYouTubeUrl = async (e) => {
    e.preventDefault();
    if (!input) {
      return toast("enter valid url", {
        position: "top-right", // or top-right / bottom-right etc.
        theme: "dark", // Enables dark theme
        style: {
          fontSize: "12px", // Small text
          padding: "8px 16px", // Less padding
          minWidth: "150px", // Toast width
          maxWidth: "300px", // Optional: limit max width
          borderRadius: "10px", // Rounded look
          backgroundColor: "#1f1f1f", // Override for true dark
          color: "red", // Text color
        },
      });
    }
    setIsDownlaoding(true);
    try {
      const response = await axios.post(`${backend_url}/api/youtube`, {
        youtubeUrl: input,
      });
      // console.log("response from twitter", response);
      if (response.status === 200) {
        const data = await response.data;
        setDownloadUrl(data.videoUrl);
        setIsDownlaoding(false);
        toast("Download Completed", {
          position: "top-right", // or top-right / bottom-right etc.
          theme: "dark", // Enables dark theme
          style: {
            fontSize: "12px", // Small text
            padding: "8px 16px", // Less padding
            minWidth: "150px", // Toast width
            maxWidth: "300px", // Optional: limit max width
            borderRadius: "10px", // Rounded look
            backgroundColor: "#1f1f1f", // Override for true dark
            color: "#fff", // Text color
          },
        });
      } else {
        if (response.status === 404 || response.status === 500) {
          toast.error(response.error);
        }
        setIsDownlaoding(false);
      }
    } catch (error) {
      toast.error("Failed to fetch video. Please try again later.", {
        position: "top-right", // or top-right / bottom-right etc.
        theme: "dark", // Enables dark theme
        style: {
          fontSize: "12px", // Small text
          padding: "8px 16px", // Less padding
          minWidth: "150px", // Toast width
          maxWidth: "300px", // Optional: limit max width
          borderRadius: "10px", // Rounded look
          backgroundColor: "#1f1f1f", // Override for true dark
          color: "red", // Text color
        },
      });
      setIsDownlaoding(false);
    }
  };

  const handlePinterestUrl = async (e) => {

    e.preventDefault();

    if (!input || !input.includes("https://pin.it/")) {
      return toast("enter valid url", {
        position: "top-right", // or top-right / bottom-right etc.
        theme: "dark", // Enables dark theme
        style: {
          fontSize: "12px", // Small text
          padding: "8px 16px", // Less padding
          minWidth: "150px", // Toast width
          maxWidth: "300px", // Optional: limit max width
          borderRadius: "10px", // Rounded look
          backgroundColor: "#1f1f1f", // Override for true dark
          color: "red", // Text color
        },
      });
    }

    setIsDownlaoding(true);

    try {
      const response = await axios.post(`${backend_url}/api/pinterest`, {
        pinterestUrl: input,
      });

      // console.log("response from pinterest", response.data);

      if (response.status === 200) {
        const data = await response.data;
        setDownloadUrl(data.video);
        setIsDownlaoding(false);
        toast("Download Completed", {
          position: "top-right", // or top-right / bottom-right etc.
          theme: "dark", // Enables dark theme
          style: {
            fontSize: "12px", // Small text
            padding: "8px 16px", // Less padding
            minWidth: "150px", // Toast width
            maxWidth: "300px", // Optional: limit max width
            borderRadius: "10px", // Rounded look
            backgroundColor: "#1f1f1f", // Override for true dark
            color: "#fff", // Text color
          },
        });
      } else {
        if (response.status === 404 || response.status === 500) {
          toast.error(response.error);
        }
        setIsDownlaoding(false);
      }
    } catch (error) {
      toast.error("Failed to fetch video. Please try again later.", {
        position: "top-right", // or top-right / bottom-right etc.
        theme: "dark", // Enables dark theme
        style: {
          fontSize: "12px", // Small text
          padding: "8px 16px", // Less padding
          minWidth: "150px", // Toast width
          maxWidth: "300px", // Optional: limit max width
          borderRadius: "10px", // Rounded look
          backgroundColor: "#1f1f1f", // Override for true dark
          color: "red", // Text color
        },
      });
      setIsDownlaoding(false);
    }
  };

  const handleClean = () => {
    setDownloadUrl("");
    setInput("");
    setIsDownlaoding(false);
  };

  return (
    <DataContext.Provider
      value={{
        setDownloadUrl,
        downloadUrl,
        isAudioURL,
        // handleInstagramUrl,
        handleTwitterUrl,
        handleTikTokUrl,
        handleYouTubeUrl,
        handlePinterestUrl,
        input,
        setInput,
        isDownloading,
        setIsDownlaoding,
        handleClean,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
