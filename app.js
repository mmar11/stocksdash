import express from 'express'

import { Router } from 'express'
import routes from './router.js'

import multer from 'multer'
const upload = multer({ dest: 'uploads/' })

import * as dotenv from 'dotenv'
dotenv.config()

const app = express()

const PORT = 3000

app.use(express.json());

app.use(express.static('./src/public'))

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(routes);

app.listen(process.env.PORT || PORT, () => {
    console.log(`App listening on http://localhost:${PORT}`)
})

