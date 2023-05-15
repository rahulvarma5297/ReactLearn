import React, {useState} from 'react'

const SubmitForm = () => {
    const [name, setName] = useState("Rahul Varma");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello ${name}`);
        setName("");
    };
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="">
            Enter Your Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
    </form>
  )
}

export default SubmitForm