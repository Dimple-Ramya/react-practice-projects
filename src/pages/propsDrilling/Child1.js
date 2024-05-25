import Child2 from "./Child2"

const Child1 = ({ datafromPtoC1 }) => {
    const dataC1 = "banana"
    return (
        <div style={{ border: "solid 1px red", height: "400px", width: "600px", margin: "30px" }}>
            This is Child1
            <p>{datafromPtoC1}</p>
            <Child2 datafromC1={dataC1} />
        </div>
    )
}
export default Child1