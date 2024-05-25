import React, { useState } from 'react'
import "./MultiStepForm.css"
import QRCode from "react-qr-code";

const MultiStepForm = () => {
    const [stage, setStage] = useState(0)
    const formArray = [1, 2, 3, 4]
    const [completed, setCompleted] = useState("Pending!")
    const [payVal, setPayVal] = useState("")

    const nextHandler = () => {
        setStage(stage + 1)
        // setCompleted("Completed!")
    }
    const prevHandler = () => {
        setStage(stage - 1)
        // setCompleted("Pending!")
    }

    const handlePay = (e) => {
        console.log(e.target.value)
        setPayVal(e.target.value)
    }

    return (
        <div className='outer-card'>
            <div className='side-panel'>
            </div>
            <div className='form'>

                <div className='state-container'>
                    {formArray.map((state) => {
                        return (
                            <>
                                <div className='state-name-container'>
                                    <div className='round-state'>
                                        {state > stage ? state : "✅"}
                                    </div>
                                    <h6 className='state-name'>{state > stage ? "Pending!" : "Completed!"}</h6>
                                </div>
                                {state < formArray.length &&
                                    < div className={state > stage ? 'connecting-line' : 'connecting-line completed-line '}></div >
                                }
                            </>
                        )
                    })
                    }

                </div>

                {stage === 0 &&
                    <div className='open-page-container'>
                        <h3>Welcome!</h3>
                        <button className='next-btn' onClick={nextHandler}>
                            Next
                        </button>
                    </div>
                }

                {stage === 1 &&
                    <div className='open-page-container stage-1-container'>
                        <h3>Personal Details</h3>
                        <input type='text' className='input-box' placeholder='Full Name' /><br />
                        <input type='text' className='input-box' placeholder='Email ID' /><br />
                        <input type='text' className='input-box' placeholder='Address' />
                        <div>
                            <button className='next-btn' onClick={prevHandler}>Prev</button>
                            <button className='next-btn' onClick={nextHandler}>Next</button>
                        </div>
                    </div>
                }

                {stage === 2 &&
                    <div className='open-page-container stage-1-container'>
                        <h3>Bank Details</h3>
                        <input type='text' className='input-box' placeholder='Account Holder Name' /><br />
                        <input type='text' className='input-box' placeholder='Account Num' /><br />
                        <input type='text' className='input-box' placeholder='UPI ID' />
                        <div>
                            <button className='next-btn' onClick={prevHandler}>Prev</button>
                            <button className='next-btn' onClick={nextHandler}>Submit</button>
                        </div>
                    </div>
                }

                {stage === 3 &&
                    <div className='open-page-container stage-1-container'>
                        <h3>Payment</h3>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                            <p style={{ marginTop: 0, marginBottom: 0, marginRight: "50px" }}>Choose one</p>
                            <div style={{ marginRight: "5px" }}>
                                <input type='radio' name="pay" value="paytm" onChange={handlePay} />
                                <label>Paytm</label>
                            </div>
                            <div style={{ marginLeft: "5px" }}>
                                <input type='radio' name="pay" value="phonepe" onChange={handlePay} />
                                <label>Phonepe</label>
                            </div>
                        </div>
                        {payVal !== "" &&
                            <QRCode
                                size={130}
                                style={{ margin: "10px" }}
                                value={payVal === "paytm" ? "https://paytm.com/login" : "https://aa.phonepe.com/client/"}
                            />
                        }
                        <div>
                            <button className='next-btn' onClick={prevHandler}>Prev</button>
                            <button className='next-btn' onClick={nextHandler}>Submit</button>
                        </div>
                    </div>
                }



                {stage === 4 &&
                    <div className='open-page-container'>
                        <h3>Thank You!</h3>
                        <h4 className='submitted'>Successfully Submitted</h4>
                    </div>
                }

            </div>
        </div >
    )
}

export default MultiStepForm