import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div style={{background:"aliceblue",width:"600px",height:"300px",textAlign:"center",alignItems:"center",position:"relative"}}><label style={{background:"Aliceblue",textAlign:"center",color:"Blue"}}>This is page..</label></div>
  )
}


export default App
