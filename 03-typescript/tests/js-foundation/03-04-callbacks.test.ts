import { getUserById } from "../../src/js-foundation/03-04-callbacks";

describe("03-04-callbacks.ts", () => {
    
    test('getUserById should return an error if user does not exist', (donde) => {
       
        const id = 10;
       
        getUserById({id, callback: (err, user) => {
            expect(err).toBe(`User not found with ${id}`)
            expect(user).toBeUndefined();
            donde();
        }});
    })

    test('getUserById must return an object if the user exists.', (donde) => {
       
        const id = 2;
      
        getUserById({id, callback: (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toEqual({
                id: 2,
                name: 'jon doe'
            });
            donde();
        }});
    })

});
