import React, { useState } from 'react'
import "./Grocery.css";

const Grocery = () => {
    const [itemsList, setItemsList] = useState([])
    const [item, setItem] = useState("")
    const [checked, setChecked] = useState(false)
    const [checkedVal, setCheckedVal] = useState("")
    const [checkedItemsList, setCheckedItemsList] = useState([])

    const itemHandler = (e) => {
        setItem(e.target.value)
    }

    const addHandler = () => {
        setItemsList((prev) => [...prev, item])
        setItem("")
    }

    const checkHandler = (e) => {
        // console.log(e.target.checked, e.target.value)
        setChecked(e.target.checked)
        setCheckedVal(e.target.value)
        if (e.target.checked === true) {
            setCheckedItemsList((checkedItem) => [...checkedItem, e.target.value])
        } else {
            let index_of_item = checkedItemsList.indexOf(e.target.value)
            checkedItemsList.splice(index_of_item, 1)
        }

    }
    // console.log(checkedVal, checked)
    // console.log(checkedItemsList)

    const delHandler = (e, value) => {
        console.log(value)
        let deleteList = itemsList.filter((each) => each !== value)
        console.log(deleteList)
        setItemsList(deleteList)
        // let index_of_item = itemsList.indexOf(value)
        // itemsList.splice(index_of_item, 1)

    }

    console.log(item)
    console.log(itemsList)


    return (
        <div>
            <div className='grocery-card'>
                <h4>Grocery</h4>
                <div>
                    <input type='text' value={item} onChange={itemHandler} />
                    <button className='add-btn' onClick={addHandler}>Add</button>
                </div>
            </div>

            <div className='items-card'>
                <ul>
                    {itemsList.map((each, index) => {
                        return (
                            <div key={index} style={{ display: "flex", justifyContent: "space-between", width: "90%" }}>
                                <div style={{ display: "flex" }}>
                                    <input type='checkbox' value={each} onChange={checkHandler} />
                                    <li
                                        className={(checkedItemsList.includes(each)) ? 'item-striked item-name' : 'item-name'}
                                    // className='item-name'
                                    >
                                        {each}
                                    </li>
                                </div>
                                <button style={{ backgroundColor: "white", border: "none" }} onClick={(e) => delHandler(e, each)}>🗑️</button>
                            </div>

                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Grocery