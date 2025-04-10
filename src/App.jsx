import { useState } from 'react'
import { Headera } from './components/Headera'
import { Infor } from './components/Infor'
import { Caarus } from './components/Caarus'
import { Artikl } from './components/Artikl'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Headera />
     <Infor />
    <Caarus />
    <Artikl />
   
    </>
  )
}

export default App
