import React, { useContext } from 'react'
import { UserData } from './UseContext'

const ChildComponent = () => {
    const userData = useContext(UserData)
    console.log(userData)
    return (
        <div>
            {userData.map((each) =>
                <p>Person's name is {each.name}</p>
            )}
        </div>
    )
}

export default ChildComponent