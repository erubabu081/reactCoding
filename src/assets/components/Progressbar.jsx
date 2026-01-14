import React, {useState} from 'react'


const Progressbar = ({changeProgress}) => {
  const [progress, setProgress] = useState(0)
  const handleIncrement = () => {
    setProgress(prevProgress => (prevProgress+5))
    changeProgress(prevProgress => (prevProgress+5))
  }
  const handleDecrement = () => {
    setProgress(prevProgress => (prevProgress-5))
  }
  return (
    <div className='progress-bar'>
      <h3>Progress Bar</h3>
      <div className='outer-div'>
          <div className="inner-div" style = {{transform:`translatex(${progress-100}%)`}}></div>

      </div>
      <div className='button-wrapper'>
        <button name="increment" value="+" onClick={handleIncrement}>+</button>
        <button name="increment" value="+" onClick={handleDecrement}>-</button>
      </div>
    </div>
  )
}

export default Progressbar