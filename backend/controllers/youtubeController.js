import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";
import youtubedl from "youtube-dl-exec";
// Needed to resolve current file path in ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your cookies file in root
const cookiesPath = path.join(__dirname, "../cookies.txt");

export const youtubeController = async (req, res) => {
  const { youtubeUrl } = req.body;

  if (!youtubeUrl) {
    return res.status(400).json({ error: "Invalid YouTube URL" });
  }

  try {
    const result = await youtubedl(youtubeUrl, {
      dumpSingleJson: true,
      noWarnings: true,
      preferFreeFormats: true,
      skipDownload: true,
      cookies: cookiesPath, // ✅ Add this line
    });

    const format = result.formats.find(
      (f) => f.ext === "mp4" && f.acodec !== "none" && f.vcodec !== "none"
    );

    if (!format || !format.url) {
      return res.status(404).json({ error: "No downloadable format found." });
    }

    return res.status(200).json({ videoUrl: format.url });
  } catch (error) {
    console.error("youtube-dl-exec error:", error.message);
    return res.status(500).json({ error: "Failed to get video URL" });
  }
};


export const youtubeDownloaderController = async (req, res) => {
  const { video } = req.query;
  if (!video) {
    return res.status(400).send("Missing video or audio URL");
  }

  try {
    const response = await axios.get(video, {
      responseType: "stream",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/114.0.0.0 Safari/537.36",
      },
    });
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="youtube-video.mp4"'
    );
    res.setHeader("Content-Type", "video/mp4");
    response.data.pipe(res);
  } catch (err) {
    console.error("Download error:", err.message);
    res.status(500).send("Download failed");
  }
};
