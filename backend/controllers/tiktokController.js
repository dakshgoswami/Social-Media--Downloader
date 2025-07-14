// ES Module-compatible way to get __dirname
import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import downloadsDir from "../utils/downloadPath.js";

export const tiktokController = async (req, res) => {
  const { tiktokUrl } = req.body;

  if (!tiktokUrl || !tiktokUrl.includes("tiktok.com")) {
    return res.status(400).json({ error: "Invalid TikTok URL" });
  }

  const outputFile = `tiktok_${Date.now()}.mp4`;
  const outputPath = path.join(downloadsDir, outputFile);
  console.log(outputPath)
  const command = `yt-dlp -f mp4 -o "${outputPath}" "${tiktokUrl}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error("yt-dlp error:", error.message);
      return res.status(500).json({ error: "Failed to download TikTok video" });
    }

    res.status(200).json({ video: outputFile });
  });
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
