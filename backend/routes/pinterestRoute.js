import express from 'express'
import { pinterestController, pinterestDownloaderController } from '../controllers/pinterestController.js'
const pinterestRouter = express.Router()

pinterestRouter.post('/', pinterestController)
pinterestRouter.get('/download', pinterestDownloaderController)

export default pinterestRouter