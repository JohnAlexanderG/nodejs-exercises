const { v4: uuidv4 } = require('uuid');

const getUUIdv4 = () => {
    return uuidv4()
}

module.exports = {
    getUUIdv4
}
