import { useState } from "react"

export default function Entry(props){
    const [isShown, setIsShown] = useState(false)

    const toggle = function(){
        setIsShown(prevSetIsShown => !prevSetIsShown)
    }

    return(
        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" src={props.entry.img.src} alt={props.entry.img.alt} />
            </div>
            <div className="info-container">
                <img className="marker" src="/location-icon.png" alt="marker" />
                <span className="country">{props.entry.country}</span>
                <a href={props.entry.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.entry.title}</h2>
                <p className="trip-date">{props.entry.dates}</p>
                {isShown && <p className="entry-text">
                    {props.entry.text}
                </p>}
                <button onClick={toggle}>{isShown ? "Hide" : "Show"} Description</button>
            </div>
        </article>
    )
}