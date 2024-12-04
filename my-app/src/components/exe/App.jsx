import Pad from "./Pad"
import { useState } from "react"


export default function App(){


    const [pads, setPads] = useState(Pad)

    const display = pads.map(pad => <button key={pad.id}>{pad.color}</button>)

    return(
        <>
            {display}
        </>
    )
}