import React, { useState } from 'react'
import './ReacLvl1.css'

const ReactLvl1 = () => {
    const [checkBoxList, setCheckBoxList] = useState({
        1: false,
        2: false,
        3: false,
        4: false
    })
    const [allChecked, setAllChecked] = useState(false)

    const handleAllCheked = () => {
        setAllChecked(!allChecked)
        let newObj = {}
        Object.keys(checkBoxList).forEach(key => {
            newObj = { ...newObj, [key]: !allChecked }
        })
        setCheckBoxList(newObj)
    }
    const handleSelectOne = (boxId) => {
        setCheckBoxList({ ...checkBoxList, [boxId]: !checkBoxList[boxId] })
    }

    return (
        <>
            <div className="mainContainerLvl1">
                <h1>React Level 1</h1>
                <label>Select all
                    <input type="checkbox" checked={allChecked} onChange={handleAllCheked} />
                </label>
                {Object.keys(checkBoxList).map((id) => (
                    <div key={id}>
                        <label>Item{id}</label>
                        <input type="checkbox" checked={checkBoxList[id]} onChange={() => handleSelectOne(id)} />
                    </div>
                )
                )}
            </div>
        </>
    )
}

export default ReactLvl1
