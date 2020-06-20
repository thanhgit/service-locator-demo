module.exports = serviceLocator =>  {
	const dbname = serviceLocator.get('dbName')
	if(dbname == "mysql"){
		return {
			token: "1234",
			username: "mysql",
			password: "mysql"
		}
	}else if (dbname == "mongodb"){
		return {
			token: "2345",
			username: "mongodb",
			password: "mongodb"
		}
		
	}else{
		return {
			token: "3456",
			username: "nothing",
			password: "nothing"
		}
	}
}
