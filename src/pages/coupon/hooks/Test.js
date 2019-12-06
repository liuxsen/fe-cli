import React, { useState, useEffect } from 'react';

export const Test = () => {
  const [count, setCount] = useState(0);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  useEffect(()=>{
    console.log(1);
    document.title = count;
  }, [count]);
  return <div>
    <p>{ count }</p>
    <p>{fruit}</p>
    <div>{
      todos.map((todo, i) => {
        return <p key={i}>{ todo.text }</p>;
      })
    }</div>
    <button onClick={()=>{
      setCount(count+1);
    }}>add</button>
    <button onClick={()=> {
      todos.push({
        text: '1'
      });
      setTodos([...todos]);
    }
    }>add TODO</button>
  </div>;
};