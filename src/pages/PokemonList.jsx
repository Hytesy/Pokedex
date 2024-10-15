import { useContext } from "react"
import { LoadLessPokemon, LoadMorePokemon } from "../components/pokemonQuantityButtons";
import TypesFilter from "../components/typesFilter";
import List from "../components/pokemonList";
import { Footer, Header } from "../components/HeadFooter";
import { ButtonsMoreLess, Page } from "./PageStyled";
import { ThemeContext } from "../themes/contextTheme";
import { ToggleButton } from "../components/themeToggleButton/button";
import { usePokemonData } from "../hooks/usePokemonData";
import { moreLessButton } from "../services/moreLessButton";
import { handleFilterChange } from "../services/handleFilterChange";

const PokemonList = () => {
  const initialCount = 10
  const counter = 10
  const { loadMorePokemon, loadLessPokemon, pokemonCount} = moreLessButton(initialCount, counter)
  const {filter, filterChange} = handleFilterChange()
  const {loading, pokemonList} = usePokemonData(pokemonCount, filter)
  const { theme } = useContext(ThemeContext)
  console.log(pokemonList)

  return (
    <Page theme={theme}>
      <Header />
      <main>
        <TypesFilter value={filter} onChange={filterChange} />
        <ToggleButton/>
        <List pokemons={pokemonList} isLoading={loading}>
          <ButtonsMoreLess>
            <LoadLessPokemon onClick={loadLessPokemon} />
            <LoadMorePokemon onClick={loadMorePokemon} />
          </ButtonsMoreLess>
        </List>
      </main>
      <Footer />
    </Page>
  );
};

export default PokemonList



 // const counter = 10
  // const [pokemonList, setPokemonList] = useState()
  // const [pokemonCount, setPokemonCount] = useState(counter)
  // const [filter, setFilter] = useState('')
  // const [loading, setLoading] = useState(false)


  // useEffect(() => {
  //   async function fetchData() {
  //     setLoading(true)
  //     try {
  //       const listName = await getNames(pokemonCount)
  //       const pokemons = await getPokemon(listName)
  //       setPokemonList(pokemons)
  //     } catch (error) {
  //       console.error("Erro ao buscar dados", error)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   async function fetchFiltredData(type) {
  //     setLoading(true)
  //     try {
  //       const listName = await getPokemonsPerType(type)
  //       const pokemons = await getPokemon(listName)
  //       setPokemonList(pokemons)
  //     } catch (error) {
  //       console.error("Erro ao buscar dados filtrados", error)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }
  //   if (!filter) {
  //     fetchData()
  //   } else {
  //     fetchFiltredData(filter)
  //   }

  // }, [pokemonCount, filter])

  // const loadMorePokemon = () => {
  //   setPokemonCount(prevCount => prevCount + counter)
  // }
  // const loadLessPokemon = () => {
  //   if (pokemonCount > counter) {
  //     setPokemonCount(prevCount => prevCount - counter)
  //   }
  // }

  // const handleFilterChange = (event) => {
  //   setFilter(event.target.value)
  // }