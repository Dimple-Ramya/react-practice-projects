import React, { useState } from 'react'
import "./Carousel.css"

const Carousel = () => {

    const [img, setImg] = useState(0)
    const data = [
        {
            id: 0,
            img: "https://media.istockphoto.com/id/1466995518/photo/business-woman-and-worker-portrait-at-office-desk-as-administration-executive-company-manager.jpg?s=612x612&w=0&k=20&c=NvKeG6Fh0_VVfH_N0Ka-5j8284XJhL2VTJfe6IwDkWQ=",
            name: "Mary"
        },
        {
            id: 1,
            img: "https://thumbs.dreamstime.com/b/office-worker-pretty-young-sitting-41462649.jpg",
            name: "Sophie"
        },
        {
            id: 2,
            img: "https://media.istockphoto.com/id/1304344320/photo/young-business-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=zzoim2BuCeQf5pBeGi-FCOpdqkxnr2elwMwkd564JkE=",
            name: "Geetu"
        },
        {
            id: 3,
            img: "https://media.istockphoto.com/id/1377268770/photo/portrait-of-a-businesswoman-working-in-a-modern-office-stock-photo.jpg?s=612x612&w=0&k=20&c=jQuGPJJ-5e4MSOvn0AosnUsFm0M7C1yimu0TfqlUg_0=",
            name: "Keerthi"
        }
    ]


    const handlePrev = () => {
        setImg(img <= 0 ? data.length - 1 : img - 1)
    }

    const handleNext = () => {
        // img === data.length - 1 ? setImg(0) : setImg(img + 1)
        setImg(img === data.length - 1 ? 0 : img + 1)
    }

    return (
        <div className='outer-container-Car'>
            <button onClick={handlePrev} className='btns'>Prev</button>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {data.map((each, index) => {
                    return (index === img &&
                        <div key={index} >
                            <p>id:{each.id}</p>
                            <p>index:{index}</p>
                            <img src={each.img} alt={each.name} className='image' />
                        </div>
                    )
                }
                )}
                <span className='indicators-box'>
                    {data.map((some, i) => {
                        return (
                            <button key={i} className={i === img ? 'indicator indicator-active' : 'indicator'}></button>
                        )
                    })}
                </span>
            </div>
            <button onClick={handleNext} className='btns'>Next</button>
        </div>
    )
}

export default Carousel