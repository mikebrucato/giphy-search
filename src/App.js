import React, { useState, useEffect } from "react";
export default function SearchForm() {
    const [search, setSearch] = useState("")
    const [searchList, setSearchList] = useState("")
    const handleChange = (event) => {
        const searchItem = event.target.value
        console.log('search', searchItem)
        setSearch(searchItem)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setSearchList(search)
    }
    console.log('searchlist', searchList)
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="search giphy"
                    type="text"
                    value={search}
                    onChange={handleChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

