import React, { useState } from 'react'

const StateLifting = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    return (
        <div>
            <Panel title="Component A" active={activeIndex === 0} handleOpen={() => setActiveIndex(0)}>
                Hi, this is A
            </Panel>
            <Panel title="Component B" active={activeIndex === 1} handleOpen={() => setActiveIndex(1)}>
                Hello, this is B
            </Panel>
        </div>
    )
}

const Panel = ({ title, children, active, handleOpen }) => {

    return (
        <div>
            <h3>{title}</h3>
            {active ?
                <p>{children}</p>
                :
                <button onClick={handleOpen}>Open</button>
            }
        </div>
    )
}


export default StateLifting