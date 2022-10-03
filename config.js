const dotenv = require("dotenv");
const cfg = {};
dotenv.config({path: './vars/.env'});

cfg.port = process.env.PORT;
cfg.api_key = process.env.api_key;
cfg.list_id = process.env.list_id;

module.exports = cfg;