import Entry from "../cards/Entry";
import data from "../data";

export default function MainSection(){
const entryElements = data.map((entry) =>{
    return(
        <Entry 
        // Fetch object using .map() method

            key={entry.id}

        // The below can be substituted with {...entry}
         
            // img={entry.img}
            // title={entry.title}
            // country={entry.country}
            // googleMapsLink={entry.googleMapsLink}
            // dates={entry.dates}
            // text= {entry.text}

            // Shortcut to fetch all objects
            entry = {entry}
        />
    )
})

    return(
        <main>
            {entryElements}
        </main>
        

    )
}