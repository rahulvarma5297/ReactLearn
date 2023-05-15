import React, { useState } from "react";

const FormMultipleInputs = () => {
  const [inputs, setInputs] = useState({
    username: "",
    age: "",
  });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prev) => ({ ...prev, [name]: value }));
    }
  return (
    <form>
    </form>
  );
};

export default FormMultipleInputs;
