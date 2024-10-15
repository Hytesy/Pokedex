import { useEffect, useState } from "react";
import { getNames, getPokemon, getPokemonsPerType } from "../services/requestApi";
import { all } from "axios";

const usePokemonData = (pokemonCount, filter) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            try {
                const listName = await getNames(pokemonCount);
                const pokemons = await getPokemon(listName);
                setPokemonList(pokemons)
            } catch (error) {
                console.error('Erro ao buscar dados:' + error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [pokemonCount, filter]);


    useEffect(() => {
        if (filter) {
            async function fetchFiltredData() {
                try {
                    const listName = await getPokemonsPerType(filter);
                    const pokemons = await getPokemon(listName);
                    setPokemonList(pokemons);
                } catch (error) {
                    console.error('Erro ao buscar dados filtrados' + error);
                }
            }
            fetchFiltredData();
        }
    }, [filter]);

    return { pokemonList, loading };
};

export { usePokemonData };









