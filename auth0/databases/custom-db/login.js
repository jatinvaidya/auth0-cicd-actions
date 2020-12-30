function login(email, password, callback) {
	console.info(`SQLSERVER_HOST: ${configuration.SQLSERVER_HOST}`);
  console.info(`SQLSERVER_USER: ${configuration.SQLSERVER_USER}`);
  console.info(`SQLSERVER_PASS: ${configuration.SQLSERVER_PASS}`);
	return callback(new WrongUsernameOrPasswordError(email, "test-only-script"));
}
