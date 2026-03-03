
import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'

function App() {
  const [category, setCategory] = useState("general")

  return (
    <div>
      <Navbar category={category} setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  )
}

export default App
