import { useState } from 'react'

const Challenge = () => {
  const [boxColor, setBoxColor] = useState('')  
  return (
    <>
    <div style={{
        backgroundColor: `${boxColor}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: "black", 
        borderWidth: 3, 
        borderStyle: "solid", 
        padding: 20,
        width: 300, 
        height: 300}} >
        <p>{boxColor ? boxColor: 'Empty Value'}</p>
    </div>
    <input
        autoFocus
        type="text"
        required
        value={boxColor}
        placeholder="Add color name"
        onChange={(e) => setBoxColor(e.target.value)}
    ></input>
    </>
  )
}

export default Challenge