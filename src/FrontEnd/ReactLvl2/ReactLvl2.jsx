import React, { useState } from 'react'
import './ReactLvl2.css'

const ReactLvl2 = () => {
    const [userInput, setUserInput] = useState('')
    const [gitHubData, setGitHubData] = useState({});

    const fetchData = async (user) => {
        const response = await fetch(`https://api.github.com/search/users?q=${user}`)
        const result = await response.json()
        setGitHubData(result)
    }
    const handleUserChange = (e) => {
        setUserInput(e.target.value)
        fetchData(e.target.value)
    }

    return (
        <>
            <div className='mainContainerLvl2'>

                <h1>React level 2</h1>


                {gitHubData.message ? <p>Error: {gitHubData.message}</p> : ""}
                <input className='mainInput' type="text" value={userInput} placeholder='Find a user...' onChange={handleUserChange} />
                <div>
                    <label>Search result: </label>
                    <select onChange={handleUserChange}>
                        {gitHubData?.items?.map((item, i) => (
                            <option key={i} value={item.login}>
                                {item.login}
                            </option>
                        ))}
                    </select>
                </div>
                <ul>
                    {gitHubData?.items?.filter((user) => user.login === userInput)
                        .length === 1 &&
                        Object.entries(
                            gitHubData?.items.filter((user) => user.login === userInput)[0]
                        ).map(([key, value], i) => (
                            <li key={'list' + i}>
                                {key}: {value}
                            </li>
                        ))}
                </ul>
            </div>
        </>
    )
}

export default ReactLvl2
