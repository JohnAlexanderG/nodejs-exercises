const { getUUIdv4, getAge } = require("../plugins");

const buildMakePerson = ({getUUIdv4, getAge}) => {
    return ({name, birthDate}) => {
        return {
            id: getUUIdv4(),
            name: name,
            birthDate: birthDate,
            age: getAge(birthDate)
        }
    }
}

module.exports = {
    buildMakePerson
}
