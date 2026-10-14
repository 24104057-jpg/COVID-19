import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>COVID-19 Statistics</h1>
        <p>Total Cases: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
      <div>
        <a href="https://disease.sh/v3/covid-19/all" >API Endpoint</a>
      </div>
    </>
  )
}

export default App
