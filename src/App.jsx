import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Menu from './components/Menu'
import KnowUs from './components/KnowUs'
import Jobs from './components/Jobs'
import Products from './components/Products'
import Contact from './components/Contact'
import SocilaNet from './components/SocilaNet'

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
      <Products />
      <Contact />
      <SocilaNet />
    </main>
  )
}

export default App
