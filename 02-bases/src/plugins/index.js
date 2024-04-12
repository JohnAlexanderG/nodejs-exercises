const { getAge } = require("./get-age.plugin");
const { getUUIdv4 } = require("./get-uuid.plugin");
const { httpClientPlugin } = require("./http-client.plugin");
const buildLogger = require("./logger.plugin");

module.exports = {
    getUUIdv4,
    getAge,
    httpClientPlugin,
    buildLogger,
}