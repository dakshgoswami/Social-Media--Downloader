import axios from "axios";
import { exec } from "child_process";
import youtubedl from "youtube-dl-exec";

export const youtubeController = async (req, res) => {
  const { youtubeUrl } = req.body;
  // console.log(youtubeUrl)
  if (!youtubeUrl) {
    return res.status(400).json({ error: "Invalid YouTube URL" });
  }

  // Command to get direct video+audio URL (merged stream or best)
  try {
    const result = await youtubedl(youtubeUrl, {
      dumpSingleJson: true,
      noWarnings: true,
      preferFreeFormats: true,
      skipDownload: true,
    });

     const format = result.formats.find(
      (f) => f.ext === "mp4" && f.acodec !== "none" && f.vcodec !== "none"
    );
    // console.log(format)
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
