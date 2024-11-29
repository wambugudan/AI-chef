export default function Entry(props){
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
                <p className="entry-text">
                    {props.entry.text}
                </p>
            </div>
        </article>
    )
}