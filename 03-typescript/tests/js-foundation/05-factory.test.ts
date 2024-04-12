import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe('05-factory.ts', () => { 
    
    const getUUIdv4 = () => '1234';
    const getAge = () => 31

    test('buildMakePerson should return a function', () => { 
        const makePerson = buildMakePerson({ getAge, getUUIdv4 });
        expect(typeof makePerson).toBe('function');
    });

    test('makePerson should return a person', () => { 
        const makePerson = buildMakePerson({ getAge, getUUIdv4 });
        const johnDoe = makePerson({name: 'John Doe', birthDate: '1993-06-21'})
        expect(johnDoe).toEqual({ id: '1234', name: 'John Doe', birthDate: '1993-06-21', age: 31 })
    });

});
