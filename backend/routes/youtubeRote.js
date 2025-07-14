import express from 'express'
import { youtubeController, youtubeDownloaderController } from '../controllers/youtubeController.js'
const youtubeRouter = express.Router()

youtubeRouter.post('/', youtubeController)
youtubeRouter.get('/download', youtubeDownloaderController)

export default youtubeRouter