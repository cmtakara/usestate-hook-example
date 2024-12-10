import { useState } from 'react'

function Arrays() {
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState([]);

    // https://react.dev/learn/updating-arrays-in-state

    const addIngredient = () => {
        console.log(...ingredients);
        setIngredients([...ingredients, name])
        setName('');
    }
    console.log(ingredients)

  return (
    <>
        <h1>Array Example</h1>
        <input 
            value={name}
            onChange={evt => setName(evt.target.value)}
        />
        <button onClick={addIngredient}>Add Ingredient</button>
        <h2>ingredients list</h2>
        <ul>
            { ingredients.length && 
                ingredients.map(ingr => {
                return(<li>{ingr}</li>)})
            }
        </ul>
    </>
    
  )
}

export default Arrays