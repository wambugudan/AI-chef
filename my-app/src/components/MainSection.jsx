import { useState } from "react"

export default function MainSection(){
    
    const [ingridients, setIngridients] = useState([])

    const ingridientsList = ingridients.map(ingridient => (
        <li key={ingridient}>{ingridient}</li>
    ))

    // const addIngridient = function (formData){
    //     const newIngridient = formData.get("ingridient")
    //     setIngridients(prevIngridients => [...prevIngridients, newIngridient])
    // }


    function addIngridient(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngridient = formData.get("ingridients")
        setIngridients(prevIngridients => [...prevIngridients, newIngridient])
        document.getElementById("ingridient").value = ""
    }

    const [isRecipeShown, setIsRecipeShown] = useState(false)

    // Function to toggle show recipe to true or false
    const showRecipe = function(){
        setIsRecipeShown(prevRecipeIsShown => !prevRecipeIsShown)
    }


    return(
        <>
            <form className="add-ingidient-form" onSubmit={addIngridient}>
                <input 
                    type="text"
                    placeholder="e.g beans"
                    aria-label="Add Ingridient"
                    name="ingridients"
                    id="ingridient" 
                />

                <button>Add Ingridients</button>
                
            </form>

            <div className="recipe-content-area">
                {ingridients.length === 0 ? null :<h2 className="ingridients-title">Ingridients on hand:</h2>}

                <ul>
                    {ingridientsList}
                </ul>


                {/* Dispay generate recipe container based on given condition */}
                {   
                    ingridients.length < 4 ? null :
                    <div className="generate-recipe-container">
                        <div className="generate-recipe-text" >
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe for your list of ingridients</p>
                        </div>
                        <button onClick={showRecipe}>Get a recipe</button>
                    </div>
                }
            </div>

            {/* Render recipe based on the set condition */}

            { isRecipeShown &&
                <div className="suggested-recipe-container">
                    <h2>Suggested Recipe</h2>
                    <p>Based on the provided recipe, I suggests <strong>Beef Stew Chapati</strong> recipe </p>
                    <h3>Ingridients</h3>
                    {ingridientsList}
                    <h3>Instructions</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Libero fugit incidunt tempora voluptatem hic quas unde 
                        ex sit tempore nihil eligendi numquam quasi porro ea, 
                        similique aliquid fugiat ullam quis.
                    </p>
                </div>
            }
        </>
        
    )
}