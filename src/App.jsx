import { useState } from 'react'
import './index.css';
import { Headera } from './components/Headera'
import { Infor } from './components/Infor'
import { Caarus } from './components/Caarus'
import { Scils } from './components/Scils'
import { Obut } from './components/Obut'
import { Foorm } from './components/Foorm'
import { Footur } from './components/Footur';
import { Sectcii } from './components/Sectcii';







function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Headera />
     <Infor />
     <Scils />
    <Caarus />
   <Obut />
  <Sectcii />
   <Foorm />
   <Footur />
    </>
  )
}

export default App
