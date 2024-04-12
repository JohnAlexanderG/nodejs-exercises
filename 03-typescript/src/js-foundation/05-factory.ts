interface BuildMakePerson {
    getUUIdv4: () => string;
    getAge: (birthDate: string) => number
}

interface PersonOptions {
    name: string;
    birthDate: string;
}

export const buildMakePerson = ({getUUIdv4, getAge}: BuildMakePerson) => {
    return ({name, birthDate}: PersonOptions) => {
        return {
            id: getUUIdv4(),
            name: name,
            birthDate: birthDate,
            age: getAge(birthDate)
        }
    }
}
