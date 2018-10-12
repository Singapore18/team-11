var config = {};

// This is the file to store enviornment variables.

config.db = {};
config.server = {};

config.db.addr = 'mongodb://localhost:27017/minds';

config.server.http_port = 3000;
config.server.routes = './routes/routes';

module.exports = config;