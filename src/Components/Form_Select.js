import React from 'react'

const FormSelect = () => {
    const [myCar, setMyCar] = React.useState('Volvo');

    const handleChange = (event) => {
        setMyCar(event.target.value);
    }

  return (
    <form action="">
        <select value={myCar} onChange={handleChange}>
            <option value="Volvo">Volvo</option>
            <option value="Saab">Saab</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Audi">Audi</option>
        </select>
    </form>
  )
}

export default FormSelect