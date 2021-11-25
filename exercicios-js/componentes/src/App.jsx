import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CurriculoMain from './CurriculoMain'
import Nome from './Nome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <CurriculoMain />
    </div>
  )
}

export default App
