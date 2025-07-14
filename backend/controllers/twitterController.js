import axios from "axios";
import { exec } from "child_process";
import youtubedl from "youtube-dl-exec";

export const twitterController = async (req, res) => {
  const { tweetUrl } = req.body;
  console.log(tweetUrl);
  if (!tweetUrl || !tweetUrl.includes("x.com")) {
    return res.status(400).json({ error: "Invalid Twitter URL" });
  }

  try {
    const output = await youtubedl(tweetUrl, {
      dumpSingleJson: true,
      noWarnings: true,
      noCallHome: true,
      preferFreeFormats: true,
      youtubeSkipDashManifest: true,
    });

    const videoUrl = output?.url || output?.formats?.[0]?.url;
    console.log(videoUrl)
    if (!videoUrl) {
      return res.status(404).json({ error: "Video URL not found" });
    }

    return res.status(200).json({ videoUrl });
  } catch (err) {
    console.error("youtube-dl-exec error:", err.message);
    return res.status(500).json({ error: "Failed to fetch video URL" });
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
