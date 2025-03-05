import { useState } from 'react'
import Timeline from './Timeline'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex flex-col justify-center items-center bg-gray-900 text-white text-base pb-8 sm:text-lg">
        <Timeline defaultColor="bg-green-800" />
    </div>
    </>
  )
}

export default App
