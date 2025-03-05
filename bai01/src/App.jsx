import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headers from './components/header'
import Footer from './components/Footer'
import Center from './components/center'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
      <Headers></Headers>
      <br />
      <Center/>
      <br/>
      <Footer></Footer>
     </div>
    </>
  )
}

export default App

