import { useState } from "react"

export default function MainSection(){
    const ingridients = ["chicken", "Tomatoes", "onions"]


    const items = ingridients.map(item => (
        <li key={item}>{item}</li>
    ))

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngridient = formData.get("ingridients")
        ingridients.push(newIngridient)
        console.log(ingridients)
    }

   
    const [count, setCount] = useState(0)

    function handleAddClick(){
        setCount(prevCount => prevCount + 1)
    }

    function handleMinusClick(){
        setCount(prevCount => prevCount - 1)
    }


    return(
        <>
        <form className="add-ingidient-form" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="e.g beans"
                aria-label="Add Ingridient"
                name="ingridients" 
            />

            <button>Add Ingridients</button>
            
        </form>

        <ul>
            {items}
        </ul>

        <button onClick={handleMinusClick}>-</button>
        <h2>{count}</h2>
        <button onClick={handleAddClick}>+</button>
        </>
        
    )
}