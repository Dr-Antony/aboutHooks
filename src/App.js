import React, { useCallback, useEffect, useMemo, useState } from "react";
import './App.css'
import { Button } from 'react-bootstrap';
import ItemsList from "./ItemsList";
import Main from "./Main";
import Alert from "./AlertProvider/Alert";

import AlertProvider from "./AlertProvider/AlertContext";


const App = () => {

  return (
    <AlertProvider>
      <div className={'App'}>
        <Alert />
        <Main  />
      </div>
    </AlertProvider>
  )
}



export default App;



















/////////////////////////////////////////////////////////////////////



const UseCallbacks = () => {
  const [number, setNumber] = useState(0);
  const [colored, setColored] = useState(false);
  const style = {
    color: colored ? 'green' : 'red'
  }
  const generateItems = useCallback(() => {
    return new Array(number).fill('').map((_, i) => { return `Element ${i + 1}` })
  }, [number]);
  return (
    <div className={'App'}>
      <h1 style={style}>Number:{number}</h1>
      <Button onClick={() => { setNumber(prev => prev + 1) }}>Increment</Button>
      <Button onClick={() => { setColored(prev => !prev) }}>Change</Button>
      <ItemsList getItems={generateItems} />
    </div>
  )
}




/////////////////////////////////////////////////////////////////////


const ComplexComputed = (num) => {
  console.log('reRender')
  let i = 0
  while (i < 100000000) {
    i++
  }
  return num * 2
}


const UseMemos = () => {
  const [number, setNumber] = useState(0);
  const [colored, setColored] = useState(false);
  const computed = useMemo(() => { return ComplexComputed(number) }, [number]);
  const style = {
    color: colored ? 'green' : 'red'
  }
  return (
    <div className={'App'}>
      <h1 style={style}>Number:{computed}</h1>
      <Button onClick={() => { setNumber(prev => prev + 1) }}>Increment</Button>
      <Button onClick={() => { setNumber(prev => prev - 1) }}>Decrement</Button>
      <Button onClick={() => { setColored(prev => !prev) }}>Change</Button>
    </div>
  )
}

/////////////////////////////////////////////////////////////////////

const UseEffects = () => {
  const [type, setType] = useState('users');
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type]);
  const mouseMoveHendler = (event) => {
    setPos({ x: event.clientX, y: event.clientY })
  }
  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHendler);
    return () => {
      window.removeEventListener('mousemove', mouseMoveHendler);
    }
  }, [])
  return (
    <div className={'App'}>
      <h1>Resurs: {type}</h1>
      <Button onClick={() => { setType('users') }}>Users</Button>
      <Button onClick={() => { setType('todos') }}>Todo</Button>
      <Button onClick={() => { setType('posts') }}>Posts</Button>

      {/* <div>{JSON.stringify(data,null,2)}</div> */}
      <div>{JSON.stringify(pos, null, 2)}</div>
    </div>
  )
}



/////////////////////////////////////////////////////////////////////

const UseStater = () => {
  const [count, setCount] = useState(0);
  const addFunction = () => {
    setCount(count + 1)
  }
  const removeFunction = () => {
    setCount(count - 1)
  }
  return (
    <div className="App">
      <h1>Счётчик</h1>
      <h2>{count}</h2>
      <div className={'btns'}>
        <Button onClick={addFunction}>Add</Button>
        <Button onClick={removeFunction}>Remove</Button>
      </div>
    </div>
  )
}