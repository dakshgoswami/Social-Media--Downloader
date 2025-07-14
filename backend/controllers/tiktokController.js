// ES Module-compatible way to get __dirname
import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import downloadsDir from "../utils/downloadPath.js";
import youtubedl from 'youtube-dl-exec';

export const tiktokController = async (req, res) => {
  const { tiktokUrl } = req.body;
  console.log(tiktokUrl)
  if (!tiktokUrl || !tiktokUrl.includes("tiktok.com")) {
    return res.status(400).json({ error: "Invalid TikTok URL" });
  }

  try {
    const result = await youtubedl(tiktokUrl, {
      dumpSingleJson: true,
      noWarnings: true,
      referer: "https://www.tiktok.com",
      userAgent: "Mozilla/5.0",
    });

    const downloadUrl = result?.url || result?.formats?.find(f => f.ext === "mp4")?.url;
    console.log(downloadUrl)
    if (!downloadUrl) {
      return res.status(404).json({ error: "Video URL not found" });
    }

    res.status(200).json({ videoUrl: downloadUrl });
  } catch (error) {
    console.error("yt-dlp error:", error.message);
    res.status(500).json({ error: "Failed to extract TikTok video." });
  }
};


export const tiktokDownloaderController = (req, res) => {
  const { file } = req.query;
  if (!file) return res.status(400).send("Missing file");

  const filePath = path.join(downloadsDir, file);
  console.log(filePath)
  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found");
  }

  res.download(filePath, "video.mp4", (err) => {
    if (err) {
      console.error("Download error:", err.message);
    } else {
      setTimeout(() => {
        fs.unlink(filePath, (unlinkErr) => {
          if (unlinkErr) {
            console.error("Error deleting file:", unlinkErr.message);
          } else {
            console.log(`✅ Deleted TikTok file: ${file}`);
          }
        });
      }, 10000); // Delete after 10 seconds
    }
  });
};
