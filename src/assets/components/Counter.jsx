import React, {useState} from 'react'

const CounterApp = ({onChange}) => {
    const [counter, setCounter] = useState(0)
    const handleIncrement= () => {
        setCounter((prevCount) => prevCount +15)
        onChange((prevCount) => prevCount +15)
    }
    const handleDecrement= () => {
        setCounter((prevCount) => prevCount -15)
        onChange((prevCount) => prevCount -15)
    }
return (
    <>  
        <p>Counter Value: {counter}</p>
        <button name = 'increment' onClick={handleIncrement} >+</button>
        <button name = 'decrement' onClick={handleDecrement} >-</button>
    </>
)



}

export default CounterApp