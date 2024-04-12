import { getAge } from "../../src/plugins";

describe('get-age.plugin.ts', () => { 
    
    test('getAge() should return the age of a person', () => { 
        const birthDate = '1993-06-21'
        const age = getAge(birthDate);

        expect(typeof age).toBe('number')
    })
    
    test('getAge() should return current age', () => { 
        const birthDate = '1993-06-21'
        const age = getAge(birthDate);

        const currentAge = new Date().getFullYear() - new Date(birthDate).getFullYear();

        expect(age).toBe(currentAge)
    })

    test('getAge() should return 0 years', () => { 
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1993);

        const birthDate = '1993-06-21';
        const age = getAge(birthDate);
        // console.log("🚀 ~ test ~ age:", age)
        
        expect(age).toBe(0);
        expect(spy).toHaveReturned();
        
    })

})