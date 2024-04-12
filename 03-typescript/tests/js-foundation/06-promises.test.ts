import { getPokemonNameById } from "../../src/js-foundation/06-promises";

describe('06-promises.ts', () => { 
    
    test('getPokemonById should return a pokemon', async () => { 
        const pokemonId = 12;
        const pokemonName = await getPokemonNameById(pokemonId);

        expect(pokemonName).toBe('butterfree')
    });
    
    test('Shold return an error if pokemon does not exist', async () => { 
        const pokemonId = 1218987213;

        try {
            await getPokemonNameById(pokemonId);
            expect(true).toBeFalsy();
        } catch (error) {
            expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
        }

    });

});
