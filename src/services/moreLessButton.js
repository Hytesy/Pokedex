import { useState } from "react"

const moreLessButton = (initialCounter, counter) => { 
    const [pokemonCount, setPokemonCount] = useState(initialCounter)
    async function loadMorePokemon() {
        setPokemonCount(prevCount => prevCount + counter)
    }

    function loadLessPokemon() {
        if(pokemonCount >= counter){
        setPokemonCount(prevCount => prevCount - counter)
        } 
    }
    return {loadMorePokemon, loadLessPokemon, pokemonCount}
}

export { moreLessButton }