import React, { createContext } from 'react'
import ChildComponent from './ChildComponent'

export const UserData = createContext()

const UseContext = () => {
    const data = [
        {
            name: "Vijay",
            age: 23
        },
        {
            name: "Akhil",
            age: 27
        }
    ]

    return (
        <UserData.Provider value={data}>
            <ChildComponent />
        </UserData.Provider>
    )
}

export default UseContext
