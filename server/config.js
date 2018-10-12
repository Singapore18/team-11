var config = {};

// This is the file to store enviornment variables.

config.db = {};
config.server = {};

config.db.addr = 'mongodb://localhost/minds';

config.server.http_port = 3000;
config.server.route = './routes/routes';

module.exports = config;