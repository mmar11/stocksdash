import { Router } from 'express'
import * as controllers from './src/controllers/index.js'

import multer from 'multer'
const upload = multer({ dest: 'uploads/' })

const routes = Router()

routes.get('/', controllers.indexControlGet)
routes.get('/exibe', controllers.indexControlGet)
routes.post('/exibe', upload.none(), controllers.indexControlexibe)











export default routes