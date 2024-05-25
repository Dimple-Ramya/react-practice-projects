import React from 'react'

const State = () => {
    let x = 0
    const handleInc = () => {
        x = x + 1
        console.log(x)
    }
    return (
        <div>
            <h2>Counter</h2>
            <button onClick={handleInc}>Increase</button>
            <h3>value: {x}</h3>
        </div>
    )
}

export default State