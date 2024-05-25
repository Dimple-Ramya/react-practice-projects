import Child1 from "./Child1"

const Parent = () => {
    const dataP = "apple"
    return (
        <div style={{ border: "solid 1px green", height: "600px", width: "800px", margin: "30px" }}>
            This is parent
            <Child1 datafromPtoC1={dataP} />
        </div>
    )
}
export default Parent