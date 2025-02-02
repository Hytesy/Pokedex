import { Link, useParams } from "react-router-dom"
import { getAbiltyInfo, getCardDetails } from "../../services/requestApi"
import { useContext, useEffect, useState } from "react"
import { AbilitiesSection, Buttons, DetailsSection, Div, GeneralSection, MovesSection, TypesSection } from "./styled"
import { ThemeContext } from "../../themes/contextTheme"
import { Footer } from "../HeadFooter"
import { ToggleButton } from "../themeToggleButton/button"


const PokemonCardDetails = () => {
    const { nameOrId } = useParams()
    const [pokemonDetails, setPokemonDetails] = useState({})
    const [pokemonAbility, setPokemonAbility] = useState([])
    const moves = pokemonDetails.moves
    const types = pokemonDetails.types
    const image = pokemonDetails.sprites?.other['official-artwork'].front_default
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        async function fetchData() {
            const details = await getCardDetails(nameOrId)
            const abilityInfo = await getAbiltyInfo(details)
            setPokemonDetails(details)
            setPokemonAbility(abilityInfo)
        }
        fetchData()
    }, [])

    return (
        <Div>
            <DetailsSection theme={theme}>
                <Buttons theme={theme}>
                    <Link to={`/`}></Link>
                    <ToggleButton/>
                </Buttons>
                
                <GeneralSection>
                    <h1>{pokemonDetails.name}</h1>
                    <img srcSet={image ? image : '../src/images/notFound.jpg'} />
                </GeneralSection>

                <GeneralSection>
                    <h2>moves</h2>
                    <MovesSection>
                        {moves?.map((moves, index) => {
                            return <li key={index}>{moves.move.name}</li>
                        })}
                    </MovesSection>
                </GeneralSection>

                <GeneralSection>
                    <h1>abilities</h1>
                    <AbilitiesSection>
                        {pokemonAbility?.map((abilities, index) => {
                            return (
                                <li key={index}>
                                    <h3>{abilities.name}</h3>
                                    <p>{abilities.flavor_text_entries[abilities.flavor_text_entries.length - 1].flavor_text}</p>
                                </li>
                            )
                        })}
                    </AbilitiesSection>
                </GeneralSection>
                <GeneralSection>
                    <h2>types</h2>
                    <TypesSection>
                        {types?.map((types, index) => {
                            return <li key={index}>{types.type.name}</li>
                        })}
                    </TypesSection>
                </GeneralSection>

            </DetailsSection>
            <Footer/>
        </Div>
    )
}

export default PokemonCardDetails
