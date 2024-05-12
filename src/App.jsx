import { useState } from 'react'

import './App.css'
import Login from "./componentes/login"
import Registro from './componentes/registro2'
function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div>
      <Login/>
      <Registro/>
    </div>
  )
}

export default App
