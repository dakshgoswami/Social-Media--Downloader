import express from "express";
import cors from "cors";
import dotenv from 'dotenv'
dotenv.config()
// import instagramRouter from "./routes/instagramRoute.js";
import tiktokRouter from "./routes/tiktokRoute.js";
import twitterRouter from "./routes/twitterRoute.js";
import youtubeRouter from "./routes/youtubeRote.js";
import pinterestRouter from "./routes/pinterestRoute.js";
import downloadsDir from "./utils/downloadPath.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/downloads", express.static(downloadsDir));

// app.use('/api/instagram', instagramRouter)
app.use('/api/tiktok', tiktokRouter)
app.use('/api/twitter', twitterRouter)
app.use('/api/youtube', youtubeRouter)
app.use('/api/pinterest', pinterestRouter)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
