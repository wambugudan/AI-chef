import {useState} from "react"

export default function Pad(props){

    const [btnOn, setBtnOn] = useState(props.on)

    // const handleClick = function(){
    //     setBtnOn(prevBtnOn => !prevBtnOn)
    // }

     return(
        <div>
            <button 
                className={btnOn ? "pads-btn-on" : "pads-btn-off"} 
                key={props.id} 
                style={{backgroundColor: props.color}}
                onClick={props.btnClicked}
            >
                Btn
            </button>
        </div>
     )
}