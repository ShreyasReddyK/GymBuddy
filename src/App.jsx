import Category from './components/Category'
import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Pages from './pages/Pages'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <Category/>
          <Pages/>
        </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
