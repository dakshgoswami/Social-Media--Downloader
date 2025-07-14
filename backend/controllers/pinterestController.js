import { exec } from "child_process";
import path from "path";
import fs from "fs";
import downloadsDir from "../utils/downloadPath.js";
import youtubedl from 'youtube-dl-exec';

export const pinterestController = async (req, res) => {
  const { pinterestUrl } = req.body;

  if (!pinterestUrl || !pinterestUrl.includes("pinterest.")) {
    return res.status(400).json({ error: "Invalid Pinterest URL" });
  }

  try {
    const result = await youtubedl(pinterestUrl, {
      dumpSingleJson: true,
      noWarnings: true,
      referer: "https://www.pinterest.com",
      userAgent: "Mozilla/5.0",
    });

    const downloadUrl = result?.url || result?.formats?.find(f => f.ext === "mp4")?.url;

    if (!downloadUrl) {
      return res.status(404).json({ error: "Video URL not found" });
    }

    res.status(200).json({ videoUrl: downloadUrl });
  } catch (error) {
    console.error("yt-dlp error:", error.message);
    res.status(500).json({ error: "Failed to extract Pinterest video." });
  }
};


export const pinterestDownloaderController = (req, res) => {
  const { file } = req.query;
  // console.log("i am file", req.query);
  if (!file) return res.status(400).send("Missing file");

  const filePath = path.join(downloadsDir, file);
  // console.log("from downlaod", filePath);
  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found");
  }
  try {
    res.download(filePath, (err) => {
      if (err) {
        console.error("Download error:", err.message);
      } else {
        setTimeout(() => {
          fs.unlink(filePath, (unlinkErr) => {
            if (unlinkErr) {
              console.error("Error deleting file:", unlinkErr.message);
            } else {
              console.log(`✅ Deleted Pinterest file: ${file}`);
            }
          });
        }, 10000); // Delete after 10 seconds
      }
    });
  } catch (error) {
     setTimeout(() => {
          fs.unlink(filePath, (unlinkErr) => {
            if (unlinkErr) {
              console.error("Error deleting file:", unlinkErr.message);
            } else {
              console.log(`✅ Deleted Pinterest file: ${file}`);
            }
          });
        }, 10000);
    res.status(500).json('fail to download video', error);
  }
};
