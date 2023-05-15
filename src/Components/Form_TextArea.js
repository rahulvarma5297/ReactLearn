import React from 'react'

const FormTextArea = () => {
    const [text, setTextArea] = React.useState('Hello Students');

    const handleChange = (e) => {
        setTextArea(e.target.value);
        console.log(text);
    };
  return (
    <form>
        <textarea value={text} onChange={handleChange}></textarea>
    </form>
  )
}

export default FormTextArea