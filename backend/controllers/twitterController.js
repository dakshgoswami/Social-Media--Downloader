import axios from "axios";
import { exec } from "child_process";
import youtubedl from 'youtube-dl-exec';

export const twitterController = async (req, res) => {
  const { tweetUrl } = req.body;

  if (!tweetUrl || (!tweetUrl.includes("twitter.com") && !tweetUrl.includes("x.com"))) {
    return res.status(400).json({ error: "Invalid Twitter URL" });
  }

  try {
    const result = await youtubedl(tweetUrl, {
      dumpSingleJson: true,
      noWarnings: true,
      referer: "https://twitter.com",
      userAgent: "Mozilla/5.0",
    });

    const downloadUrl = result?.url || result?.formats?.find(f => f.ext === "mp4")?.url;

    if (!downloadUrl) {
      return res.status(404).json({ error: "Video URL not found" });
    }

    res.status(200).json({ videoUrl: downloadUrl });
  } catch (error) {
    console.error("yt-dlp error:", error.message);
    res.status(500).json({ error: "Failed to extract Twitter video." });
  }
};


export const twitterDownloaderController = async (req, res) => {
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
      'attachment; filename="twitter-video.mp4"'
    );
    res.setHeader("Content-Type", "video/mp4");
    response.data.pipe(res);
  } catch (err) {
    console.error("Download error:", err.message);
    res.status(500).send("Download failed");
  }
};
