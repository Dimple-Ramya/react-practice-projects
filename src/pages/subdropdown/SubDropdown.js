import React, { useState } from 'react'
import "./SubDropdown.css"
const SubDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false)
    const [showSubDropdown, setShowSubDropdown] = useState(false)
    const [city, setCity] = useState([])

    const data = [
        {
            country: "India",
            city: [
                "Delhi", "Mumbai", "Banglore", "Hyderabad"
            ]
        },
        {
            country: "USA",
            city: [
                "California", "New York", "Los Angeles", "San Diego"
            ]
        },
        {
            country: "UK",
            city: [
                "London", "Birmingham", "Manchester", "Warwick"
            ]
        },
        {
            country: "Japan",
            city: [
                "Tokyo", "Nagasaki", "Osaka", "Hiroshima"
            ]
        }
    ]

    const handleHover = (count) => {
        console.log(`This is ${count}`)
        let citiesList = data.filter((each) => each.country === count)
        setCity(citiesList.length !== 0 && citiesList[0].city)
        console.log(citiesList)
        setShowSubDropdown(true)
    }

    // console.log(city)

    return (
        <div style={{ marginLeft: "40%" }}>
            <h4>SubDropdown</h4>

            <button onClick={() => setShowDropdown(!showDropdown)} >Select Country ⬇️</button>
            {
                showDropdown &&
                <>
                    <ul className='dropdown'>
                        {data.map((each, index) => {
                            return (
                                <li key={index} className='items' onMouseOut={() => setShowSubDropdown(false)} onMouseEnter={() => handleHover(each.country)}>{each.country}</li>
                            )
                        })}
                    </ul>

                    <ul className='sub-dropdown '>
                        {showSubDropdown &&
                            city.map((each1, i) => {
                                return (
                                    <li key={i} className='items item-bg'>{each1}</li>
                                )
                            })
                        }
                    </ul>
                </>
            }
        </div>
    )
}

export default SubDropdown