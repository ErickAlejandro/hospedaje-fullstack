import app from './app'
import config from './config'

app.listen(config.port, "0.0.0.0", console.log(`Solicitud recibida corriendo en el puerto ${config.port}`))

console.log("server on port",app.get('port'))