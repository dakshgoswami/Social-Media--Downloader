import express from 'express'
import { tiktokController, tiktokDownloaderController } from '../controllers/tiktokController.js'
const tiktokRouter = express.Router()

tiktokRouter.post('/', tiktokController)
tiktokRouter.get('/download', tiktokDownloaderController)

export default tiktokRouter