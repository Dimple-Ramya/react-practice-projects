import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [product, setProduct] = useState("")

    useEffect(() => {
        console.log(`${product} is in the cart`)
        // console.log("hi this is dimple")
    }, [product])
    return (
        <div>
            <p>Count of {product} is {count}</p>
            <input type='text' onChange={(e) => setProduct(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count - 1)}>Remove</button>
        </div>
    )
}

export default UseEffect