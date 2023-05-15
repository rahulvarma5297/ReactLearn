import React, {useState} from 'react'


const FavoriteColor = () => {
  const [color, setColor] = useState("red");
  const hello = {
    backgroundColor: color,
    color: "white",
  };
  return (
    <>
      <h1 style={hello}>My favorite color is {color}</h1>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
    </>
  )
}

export default FavoriteColor