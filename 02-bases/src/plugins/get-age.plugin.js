const getAgeVendor = require('get-age');

const getAge = (birthDate) => {
    if (!birthDate) return new Error('Error al obtener fecha de nacimiento')
    return getAgeVendor(birthDate)
}

module.exports = {
    getAge,
}
