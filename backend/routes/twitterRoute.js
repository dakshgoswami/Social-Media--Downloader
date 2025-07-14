import express from 'express'
import { twitterController, twitterDownloaderController } from '../controllers/twitterController.js'
const twitterRouter = express.Router()

twitterRouter.post('/', twitterController)
twitterRouter.get('/download', twitterDownloaderController)

export default twitterRouter