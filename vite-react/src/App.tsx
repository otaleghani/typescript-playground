import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Basics from './components/basics'
import Conditional from './components/conditional'
import Lists from './components/lists'
import Events from './components/events'
import { UpdateOnlyMe, UpdateTogether } from './components/useState'


function App() {
  function handleClick() {
    setCount(count + 1)
  }
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Basics />
        <Conditional />
        <Lists />
        <Events />
        <UpdateOnlyMe/>
        <UpdateOnlyMe/>
        <UpdateTogether count={count} onClick={handleClick} />
        <UpdateTogether count={count} onClick={handleClick} />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
