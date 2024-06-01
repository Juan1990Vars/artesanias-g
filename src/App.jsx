import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import KnowUs from './components/KnowUs'
import Jobs from './components/Jobs'
import Products from './components/Products'
import Contact from './components/Contact'
import SocilaNet from './components/SocilaNet'
import Commons from './components/Commons'
import Shopping from './components/Shopping'

function App() {

  const [types, setTypes] = useState(true)
  const handleToggles = () => {
    setTypes(!types)
  }

  return (
      <main className={types ? 'ligth' : 'dark'}>
        <Header />
        <Menu types={types} handleToggles={handleToggles} />
        <KnowUs />
        <Jobs />
        <Shopping />
      <  Products />
        <Contact />
        <SocilaNet />
        <Commons />
    </main>
  )
}

export default App
