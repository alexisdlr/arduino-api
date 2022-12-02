import express from "express"
import arduinoRoutes from './routes/arduino.routes.js'
import indexRoutes from './routes/index.routes.js'
const app = express()

app.use(express.json())

app.use('/', indexRoutes)
app.use('/api/arduino', arduinoRoutes)

export default app

