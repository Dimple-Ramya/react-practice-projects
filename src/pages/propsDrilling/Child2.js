const Child2 = ({ datafromC1,datafromPtoC2 }) => {
    return (
        <div style={{ border: "solid 1px blue", height: "400px", width: "600px" }}>
            This is Child2
            <p>{datafromC1}</p>
            <p>{datafromPtoC2}</p>
        </div>
    )
}
export default Child2