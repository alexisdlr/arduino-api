import express from "express"
import arduinoRoutes from './routes/arduino.routes.js'
import indexRoutes from './routes/index.routes.js'
const app = express()

app.use(express.json())

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

app.use('/', indexRoutes)
app.use('/api/arduino', arduinoRoutes)

export default app

