const axios = require('axios');

const httpClientPlugin = {
    get: async (url) => {
        const { data } = await axios.get(url)
        return data
    },
    post: async (url) => { },
    put: async (url) => { },
    delete: async (url) => { },
}

module.exports = {
    httpClientPlugin
}