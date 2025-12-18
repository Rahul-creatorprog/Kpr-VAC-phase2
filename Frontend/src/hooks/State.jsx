import React, { useEffect, useState } from 'react'

const State = () => {
    const [count,setCount]=useState(15)
    const [like,setLike]=useState(0)
    useEffect(()=>{
      console.log('count clicked');
    },[count])
  return (
    <div>
        <h3>Count:{count}</h3>
        <button onClick={()=>setCount(count+1)}>Increase</button>
          <button onClick={()=>setCount(count-1)}>Decrease</button>
          <h3>Like:{like}</h3>
          <button onClick={()=>setLike(like+1)}>👍</button>
          <button onClick={()=>setLike(like-1)}>👎</button>
    </div>
  )
}

export default State