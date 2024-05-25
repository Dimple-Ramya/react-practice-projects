import './Accordion.css';
import { useState } from 'react'

const Accordion = () => {

    const data = [
        {
            id: 1,
            content: "this is ans1"
        },
        {
            id: 2,
            content: "this is ans2"
        },
        {
            id: 3,
            content: "this is ans3"
        },
        {
            id: 4,
            content: "this is ans4"
        }
    ]

    const [openShowBox, setOpenShowBox] = useState(false)
    const [boxnum, setBoxNum] = useState(null)

    const showDialog = (num) => {
        if (boxnum === num) {
            setBoxNum(null)
        }

        setBoxNum(num)
    }

    return (
        <div className="accord-outer-box">
            <h2 className="acc-header">Accordion</h2>
            <div>
                {data.map((each) =>
                    <div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "20px" }}>
                            <h3>ques{ }</h3>
                            <button className='btn' onClick={() => showDialog(each.id)}>{boxnum === each.id ? "-" : "+"}</button>
                        </div>
                        {boxnum === each.id ? <p>{each.content}</p> : null}
                    </div>
                )}
            </div>
            {/* <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "20px" }}>
                    <h3>ques1</h3>
                    <button className='btn' onClick={() => showDialog(1)}>{openShowBox ? "close" : "open"}</button>

                </div>
                {((boxnum === 1) && openShowBox) && <p>this is ans1</p>}
            </div>
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "20px" }}>
                    <h3>ques2</h3>
                    <button className='btn' onClick={() => showDialog(2)}>{openShowBox ? "close" : "open"}</button>
                </div>
                {((boxnum === 2) && openShowBox) && <p>this is ans2</p>}
            </div>
            <div>
                <div style={{ display: "flex" }}>
                    <h3>ques3</h3>
                    <button onClick={() => showDialog(3)}>open</button>
                    {((boxnum === 3) && openShowBox) && <p>this is ans3</p>}
                </div>
            </div>
            <div>
                <div style={{ display: "flex" }}>
                    <h3>ques4</h3>
                    <button onClick={() => showDialog(4)}>open</button>
                    {((boxnum === 4) && openShowBox) && <p>this is ans4</p>}
                </div>
            </div> */}
        </div>
    )
}

export default Accordion