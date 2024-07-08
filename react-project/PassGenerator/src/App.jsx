import { useState } from 'react'


function App() {
  let [length, setLength] = useState(8)
  const [password,setPassword] = useState('')
  const [number,setNumber] = useState(false)
  const [char,setChar] = useState(false)

  return (
    <>
      <div>
        <input type="text"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
         />
         <button type="button"> Copy</button>
         <label > Length {length}</label>
         <input type="checkbox"
         onChange={()=>setNumber(!number)} />
          <label > Charecter {length}</label>
         <input type="checkbox"
         onChange={()=>setChar(!char)} />
       </div>
    </>
  )
}

export default App
