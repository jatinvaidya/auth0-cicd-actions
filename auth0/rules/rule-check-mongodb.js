function (user, context, callback) {
  const MONGO_HOST = configuration.MONGO_HOST;
  const MONGO_USER = configuration.MONGO_USER;
  const MONGO_PASS = configuration.MONGO_PASS;
  
  // connect to mongo db etc ...
  // ... not relevant here
  
  return callback(null, user, context);
}