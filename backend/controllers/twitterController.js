import axios from "axios";
import { exec } from "child_process";

export const twitterController = async (req, res) => {
  const { tweetUrl } = req.body;

  if (
    !tweetUrl ||
    (!tweetUrl.includes("twitter.com") && !tweetUrl.includes("x.com"))
  ) {
    return res.status(400).json({ error: "Invalid Twitter URL" });
  }

  // Command to get direct video+audio URL (merged stream or best)
  const command = `yt-dlp -f "mp4" -g "${tweetUrl}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error("yt-dlp error:", error.message);
      return res.status(500).json({ error: "Failed to get video URL" });
    }

    const videoUrl = stdout.trim();

    if (!videoUrl) {
      return res.status(404).json({ error: "Video URL not found" });
    }

    return res.status(200).json({ videoUrl });
  });
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
