// https://pokeapi.co/api/v2/pokemon/#

import { httpClientPlugin } from "../plugins";

export const getPokemonNameById = async (id: string|number): Promise<string> => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = await httpClientPlugin.get(url)
        return pokemon.name
    } catch (error) {
        throw `Pokemon not found with id ${id}`;
    }
}
