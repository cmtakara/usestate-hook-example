import { useState } from 'react';

export default function Counter(props) {
    // initiate counter at 0, setCounter lets us update the counter
    // useState() returns an array where the first thing is the state variable
    //  and the second is the setter for that variable
    const [ counter, setCounter ] = useState(0);
    const [ divFive, setDivFive] = useState(true);
    // this won't trigger rerender because it isn't state
    // let divFive = true;

    // function that adds one to the state
    const addOne = () => {
        // sets counter to its current value + 1
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        // ===== the above will not add three because of the way that state is updated

        // ===== the below WOULD add 4 each time
        setCounter(prevCount => prevCount + 1);
        // setCounter(prevCount => prevCount + 1);
        // setCounter(prevCount => prevCount + 1);
        // setCounter(prevCount => prevCount + 1);
        setDivFive(counter%5 === 0);
        // divFive = (counter % 5 === 0);
        // console.log(divFive)
    }

    // function that subtracts one from the state
    const subtractOne = () => {
        // sets counter to its current value - 1
        setCounter(counter - 1);
        setDivFive(counter%5 === 0);
        // divFive = (counter % 5 === 0);
        // console.log(divFive)
    }

    const reset = () => {
        setCounter(0);
        setDivFive(true);
        // divFive = (counter % 5 === 0);
        // console.log(divFive)
    }

    // the h1 displays the counter and the buttons runs the addOne()
    return (
        <div>
            <h1>{counter}</h1>
            <h2>{divFive ? <> divisible by 5</> : <>not divisible by 5</>}</h2>
            <button onClick={addOne}>Click Me to Add One</button>
            <button onClick={subtractOne}>Click Me to Subtract One</button>
            <button onClick={reset}>Click Me to Reset</button>
        </div>
    )
}