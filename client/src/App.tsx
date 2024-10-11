import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='text-center'>
        <h1 className="text-3xl font-bold">Hello world!</h1>
        <button 
          className='mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none' 
          onClick={() => setCount((count) => count + 1)}>
          {count}
        </button>
      </div>
    </>
  )
}

export default App;
