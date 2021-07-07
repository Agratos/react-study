import React , { useState, useEffect } from 'react';

const UseStateTest = () => {
  const [ count , setCount ] = useState(0);

  useEffect(() => {
    console.log(count);
  },[count])
  

  const CountUp = () => {
    setCount(count + 1 );
  }

  return(
    <div>
      <button onClick={CountUp}>1증가</button>
      <p>{ count }</p>
    </div>
  )
}

export default UseStateTest;