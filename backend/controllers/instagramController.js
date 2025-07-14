// // import puppeteer from "puppeteer";
// import puppeteer from "puppeteer-extra";
// import StealthPlugin from "puppeteer-extra-plugin-stealth";
// import axios from "axios";
// import downloadsDir from "../utils/downloadPath.js";
// import { exec } from "child_process";
// import fs from "fs";
// import path from "path";

// puppeteer.use(StealthPlugin());

// export const instagramController = async (req, res) => {
//   const { instagramURL } = req.body;

//   if (!instagramURL || !instagramURL.includes("instagram.com")) {
//     return res.status(400).json({ error: "Invalid Instagram URL." });
//   }

//   let browser;
//   let videoBuffer = null;
//   let audioBuffer = null;

//   try {
//     browser = await puppeteer.launch({
//       headless: "new",
//       args: ["--no-sandbox", "--disable-setuid-sandbox"],
//     });

//     const page = await browser.newPage();

//     await page.setUserAgent(
//       "Mozilla/5.0 (Linux; Android 10; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Mobile Safari/537.36"
//     );

//     await page.setRequestInterception(true);
//     page.on("request", (req) => req.continue());

//     const mediaPromise = new Promise((resolve) => {
//       page.on("response", async (response) => {
//         const url = response.url();
//         const type = response.headers()["content-type"];
//         if (type?.includes("video/mp4")) {
//           const buffer = await response.buffer();

//           if (url.includes("video_dash") && !videoBuffer) {
//             videoBuffer = buffer;
//             console.log("🎥 Video captured:", url);
//           }
//           if (url.includes("audio_dash") && !audioBuffer) {
//             audioBuffer = buffer;
//             console.log("🔊 Audio captured:", url);
//           }

//           if (videoBuffer && audioBuffer) resolve();
//         }
//       });
//     });

//     await page.goto(instagramURL, {
//       waitUntil: "networkidle2",
//       timeout: 60000,
//     });

//      await page.evaluate(() => {
//       window.scrollBy(0, 200);
//     });

//     try {
//       await page.evaluate(() => {
//         const video = document.querySelector('video');
//         if (video) video.play();
//       });
//     } catch (_) {}

//     await Promise.race([
//       mediaPromise,
//       new Promise((_, reject) =>
//         setTimeout(() => reject(new Error("Timeout: Media not found")), 60000)
//       ),
//     ]);

//     await browser.close();

//     if (!videoBuffer || !audioBuffer) {
//       return res
//         .status(404)
//         .json({ error: "Could not capture media streams." });
//     }

//     const timestamp = Date.now();
//     const videoPath = path.join(downloadsDir, `insta_video_${timestamp}.mp4`);
//     const audioPath = path.join(downloadsDir, `insta_audio_${timestamp}.mp4`);
//     const outputPath = path.join(downloadsDir, `instagram_${timestamp}.mp4`);

//     fs.writeFileSync(videoPath, videoBuffer);
//     fs.writeFileSync(audioPath, audioBuffer);

//     const ffmpegCmd = `ffmpeg -i "${videoPath}" -i "${audioPath}" -c:v copy -c:a aac -strict experimental "${outputPath}"`;

//     exec(ffmpegCmd, (err) => {
//       // Cleanup temp files after merging
//       fs.unlinkSync(videoPath);
//       fs.unlinkSync(audioPath);

//       if (err) {
//         console.error("FFmpeg error:", err.message);
//         return res.status(500).json({ error: "Merging failed." });
//       }

//       console.log("✅ Merged video saved:", outputPath);
//       return res.status(200).json({ video: path.basename(outputPath) });
//     });
//   } catch (err) {
//     if (browser) await browser.close();
//     console.error("Scraping error:", err.message);
//     return res.status(500).json({ error: "Failed to scrape Instagram." });
//   }
// };

// export const instagramDownloaderController = async (req, res) => {
//   const { video } = req.query;
//   if (!video) {
//     return res.status(400).send("Missing video or audio URL");
//   }

//   try {
//     const response = await axios.get(video, {
//       responseType: "stream",
//       headers: {
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/114.0.0.0 Safari/537.36",
//       },
//     });
//     res.setHeader(
//       "Content-Disposition",
//       'attachment; filename="youtube-video.mp4"'
//     );
//     res.setHeader("Content-Type", "video/mp4");
//     response.data.pipe(res);
//   } catch (err) {
//     console.error("Download error:", err.message);
//     res.status(500).send("Download failed");
//   }
// };
