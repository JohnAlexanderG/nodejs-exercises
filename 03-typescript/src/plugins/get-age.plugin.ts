// const getAgeVendor = require('get-age');

export const getAge = (birthDate: string) => {
    
    // console.log({ currentYear: new Date().getFullYear() });

    return new Date().getFullYear() - new Date(birthDate).getFullYear();
}
