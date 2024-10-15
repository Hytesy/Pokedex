import { useContext, useEffect, useState } from "react"
import { getTypes } from "../../services/requestApi"
import { Filter } from "./styled"
import { ThemeContext } from "../../themes/contextTheme"

const TypesFilter = ({value, onChange}) => {


    const [types, setTypes] = useState([])
    const { theme } = useContext(ThemeContext)
    useEffect(() => {
        async function fetchTypes() {
            const response = await getTypes()
            setTypes(response)
        }
        fetchTypes()
    }, [])
    return (
        <Filter theme={theme} value={value} onChange={onChange}>
            <option value=''>All</option>
            {types.map((type, i) => {
                if (i === types.length - 1 || i === types.length - 2) {
                    return
                }
                return (
                    <option key={i} value={type.name}>{type.name}</option>
                )
            }
            )}
        </Filter>
    )
}

export default TypesFilter
