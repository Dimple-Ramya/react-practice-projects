import "./Cart.css";
import { BsCartPlus } from "react-icons/bs";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import s8 from "./s8.png";
import pixel from "./pixel.png";
import redmi from "./redmi.png";
import s22 from "./s22.png";
import { useEffect, useState } from "react";

const Cart = () => {
    // const [cart, setCart] = useState({ 1: quantity1, 2: quantity2, 3: quantity3, 4: quantity4 })
    const [total, setTotal] = useState(0)
    const data = [
        {
            id: 1,
            img: s8,
            name: "Samsung Galaxy S8",
            price: 25000,
            quantity: 1
        },
        {
            id: 2,
            img: pixel,
            name: "Google Pixel",
            price: 65000,
            quantity: 1
        },
        {
            id: 3,
            img: redmi,
            name: "Redmi Note 12",
            price: 35000,
            quantity: 1
        },
        {
            id: 4,
            img: s22,
            name: "Samsung Galaxy S22",
            price: 55000,
            quantity: 1
        },

    ]
    const [dummyData, setDummyData] = useState(data)

    // useEffect(() => {
    //     setCart({ 1: quantity1, 2: quantity2, 3: quantity3, 4: quantity4 })
    // }, [quantity1, quantity2, quantity3, quantity4])



    // const upBtnHandler = (id) => {
    //     console.log(id)
    //     switch (id) {
    //         case 1: setQuantity1(quantity1 + 1)
    //             break;
    //         case 2: setQuantity2(quantity2 + 1)
    //             break;
    //         case 3: setQuantity3(quantity3 + 1)
    //             break;
    //         case 4: setQuantity4(quantity4 + 1)
    //             break;
    //     }
    // }

    // const downBtnHandler = (id) => {
    //     console.log(id)
    //     // const temp_data = data.filter((each) => each.id === id)
    //     // console.log(temp_data)
    //     // if (temp_data[0].quantity === 0) {
    //     //     const dummy2 = data.filter((each) => each.id !== id)
    //     //     console.log(dummy2)
    //     //     setDummyData(dummy2)
    //     // }
    //     // else {
    //     switch (id) {
    //         case 1: setQuantity1(quantity1 - 1)
    //             break;
    //         case 2: setQuantity2(quantity2 - 1)
    //             break;
    //         case 3: setQuantity3(quantity3 - 1)
    //             break;
    //         case 4: setQuantity4(quantity4 - 1)
    //             break;
    //     }
    //     // }
    // }

    const handleTotal = () => {
        let dummyTest = [...dummyData]
        let totalPrice = dummyTest.reduce((total, each) => {
            let final = total += each.price * each.quantity
            // console.log(final)
            // console.log("total", total)
            // console.log(each)
            return (final)
        }, 0)
        console.log(totalPrice)
        setTotal(totalPrice)
    }

    useEffect(() => { handleTotal() }, [dummyData])


    const upBtnHandler = (itemId) => {
        let itemData = dummyData.filter((each) => each.id === itemId)
        itemData[0].quantity += 1
        // console.log(itemData)
        let index_of_item = dummyData.indexOf(itemData[0])
        // console.log(index_of_item)
        let dummyArr1 = [...dummyData]
        dummyArr1.splice(index_of_item, 1, itemData[0])
        // console.log(dummyArr1)
        setDummyData(dummyArr1)
    }

    const downBtnHandler = (itemId) => {
        let itemData = dummyData.filter((each) => each.id === itemId)
        itemData[0].quantity > 0 ?
            itemData[0].quantity -= 1 : itemData[0].quantity = 0

        let index_of_item = dummyData.indexOf(itemData[0])
        // console.log(index_of_item)
        let dummyArr1 = [...dummyData]
        dummyArr1.splice(index_of_item, 1, itemData[0])
        // console.log(dummyArr1)
        setDummyData(dummyArr1)
    }

    return (
        <div className="outer-cart-container">
            <div className="header">
                <h2 className="heading-name">Shopping Spot</h2>
                <button className="cart-btn"><BsCartPlus style={{ color: "white", height: "40px", width: "80px" }} /></button>
            </div>
            <div style={{ textAlign: "center" }}>
                <h1>YOUR BAG</h1>
                <div style={{ marginLeft: "20%" }}>
                    {dummyData.map((item) =>
                        <div style={{ display: "flex", justifyContent: "space-around", width: "800px", margin: "10px" }}>
                            <div style={{ display: "flex", width: "200px" }}>
                                <img src={item.img} />
                                <div>
                                    <h4>{item.name}</h4>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                            <div>
                                <button className="up-btn" onClick={() => upBtnHandler(item.id)}><MdKeyboardArrowUp style={{ height: "30px", width: "30px" }} /></button>
                                <p>{item.quantity}</p>
                                <button className="up-btn" onClick={() => downBtnHandler(item.id)}><MdKeyboardArrowDown style={{ height: "30px", width: "30px" }} /></button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <hr style={{ width: "800px", color: "rgba(88, 85, 254, 0.899)", marginLeft: "20%" }} />
            <div style={{ display: "flex", textAlign: "center", width: "550px", justifyContent: "space-between", marginLeft: "38%" }}>
                <h3 style={{ margin: 0, color: "rgba(88, 85, 254, 0.899)" }}>Total</h3>
                <h3 className="total-price">{total}</h3>
            </div>
        </div>
    )
}

export default Cart