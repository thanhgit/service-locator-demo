const serviceLocator = require('./serviceLocator.js')()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = process.env.PORT || 8080

app.use(bodyParser.json())

// business logic
serviceLocator.register('dbName', 'mysql')
serviceLocator.register('tokenSecret', '1234')
serviceLocator.factory('db', require('./DB/db'))
serviceLocator.factory('authService', require('./authService/service'))
serviceLocator.factory('authController', require('./authController/controller'))

const controller = serviceLocator.get('authController')
//

app.get('/', (req, res) => {
	
	res.status(200).json({ message: "Hello world" })
})

app.post('/login',controller.login)
app.post("/checktoken",controller.checkToken)

app.listen(port)


