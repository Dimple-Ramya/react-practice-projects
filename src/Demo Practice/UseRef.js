import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    // const [name, setName] = useState("")
    // const [count, setCount] = useState(0)

    // const countRef = useRef(0)

    // useEffect(() => {
    //     // setCount(count + 1)
    //     countRef.current = countRef.current + 1
    // })
    // return (
    //     <div>
    //         <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
    //         <h3>component is being rendered this many times: {countRef.current}</h3>
    //     </div>
    // )

    const [y, setY] = useState(0)

    const refValue = useRef(0)

    let x = 0
    const handleX = () => {
        x = x + 1
        console.log(x)
    }

    const handleRef = () => {
        refValue.current = refValue.current + 1
        console.log(refValue.current)
    }

    const handleFocus = () => {
        refValue.current.value="hello"
    }


    return (
        <div>
            <h2>this is x:{x}</h2>
            <button onClick={handleX}>Increase x</button>

            <h2>this is y:{y}</h2>
            <button onClick={() => setY(y + 1)}>Increase y</button>

            <h2 >this is ref value:{refValue.current}</h2>
            <button onClick={handleRef}>Increase Ref</button>

            <input type='text' ref={refValue} />
            <button onClick={handleFocus}>Focus</button>
        </div>
    )


}

export default UseRef