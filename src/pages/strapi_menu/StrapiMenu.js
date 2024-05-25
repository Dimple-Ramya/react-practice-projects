import { useState } from "react"
import "./StrapiMenu.css"

const StrapiMenu = () => {
    const [isHoveredProd, setIsHoveredProd] = useState(false);
    const [isHoveredSol, setIsHoveredSol] = useState(false);
    const [isHoveredRes, setIsHoveredRes] = useState(false);

    return (
        <div className="outer-container">
            <div className="header">
                <h1>strapi</h1>
                <div className="items" >
                    <h4
                        onMouseOver={() => setIsHoveredProd(true)}
                        onMouseLeave={() => setIsHoveredProd(false)}
                    >
                        Product
                    </h4>
                    <h4
                        onMouseOver={() => setIsHoveredSol(true)}
                        onMouseLeave={() => setIsHoveredSol(false)}
                    >Solution
                    </h4>
                    <h4
                        onMouseOver={() => setIsHoveredRes(true)}
                        onMouseLeave={() => setIsHoveredRes(false)}
                    >
                        Resources
                    </h4>
                </div>
            </div>
            <div
                className={`prod-box ${isHoveredProd ? 'slide-in' : 'slide-out'}`}
            >
                <h5 >Product List</h5>
            </div>
            <div
                className={`prod-box ${isHoveredSol ? 'slide-in' : 'slide-out'}`}
            >
                <h5 >Solution</h5>
            </div>
            <div
                className={`prod-box ${isHoveredRes ? 'slide-in' : 'slide-out'}`}
            >
                <h5 >Resources</h5>
            </div>
            <div>
                <p className="para" style={{ textAlign: "center", marginTop: "20%", fontSize: "30px" }}>Manage Any Content Anywhere</p>
            </div>
        </div >
    )
}

export default StrapiMenu