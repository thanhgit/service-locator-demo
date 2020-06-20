const assert = require('assert')
const serviceLocator = require('../serviceLocator')()

serviceLocator.register('dbName', 'mongodb')
serviceLocator.register('tokenSecret', '2345')
serviceLocator.factory('db', require('../DB/db'))
serviceLocator.factory('authService', require('../authService/service'))


const service = serviceLocator.get('authService')
describe('login test', () => {
	it('login success', () => {
		const username = "mongodb"
		const password = "mongodb"
		token = service.login(username, password)

		const expectedToken = '2345'
		assert.equal(token, expectedToken)
	})
	it('login fail', () => {
		const username = "mysql"
		const password = "mongodb"
		token = service.login(username, password)

		const expectedToken = '2345'
		assert.notEqual(token, expectedToken)
	})
})

describe('get token test', () => {
	it('get token success', () => {
		const token = '2345'
		const status = service.checkToken(token)
		
		const statusExpected = true
		assert.equal(status, statusExpected)
	})
	it('get token false', () => {
		const token = '3456'
		const status = service.checkToken(token)
		
		const statusExpected = true
		assert.notEqual(status, statusExpected)
	})
})
