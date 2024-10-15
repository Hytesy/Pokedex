import { useState } from "react"

const handleFilterChange = () => {
    const [filter, setFilter] = useState('')
    const filterChange = (event) => {
        setFilter(event.target.value)
    }
    return {filter, filterChange}
}

export { handleFilterChange }
