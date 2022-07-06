import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {SocialProofPage} from './Molecules/SocialProofPage.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <SocialProofPage/>
  )
}

export default App
