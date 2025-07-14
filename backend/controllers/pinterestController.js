import { exec } from "child_process";
import path from "path";
import fs from "fs";
import downloadsDir from "../utils/downloadPath.js";

export const pinterestController = async (req, res) => {
  const { pinterestUrl } = req.body;

  console.log(pinterestUrl);

  if (!pinterestUrl || !pinterestUrl.includes("https://pin.it")) {
    return res.status(400).json({ error: "Invalid Pinterest URL" });
  }

  const outputFile = `Pinterest_${Date.now()}.mp4`;
  const outputPath = path.join(downloadsDir, outputFile);
  console.log(outputPath);

  const command = `yt-dlp --cookies ./cookies.txt -f "bv+ba/best" --merge-output-format mp4 -o "${outputPath}" "${pinterestUrl}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error("yt-dlp error:", error.message);
      return res.status(500).json({ error: "Failed to get video URLs" });
    }

    console.log("✅ Downloaded:", outputFile);
    return res.status(200).json({ video: outputFile });
  });
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
