import React, { useState } from "react";

const FormProduct = ({ onHandelAdd }) => {
  // const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  function handelSubmit(e) {
    e.preventDefault();

    if (!name || !quantity) return;
    const newProduct = {
      id: crypto.randomUUID(),
      name,
      title: "",
      quantity,
      price: Math.trunc(Math.random() * 10) + 1,
    };

    onHandelAdd(newProduct);
    console.log(newProduct);

    // setCategory("");
    setName("");
    setQuantity("");
  }

  return (
    <form className="form-add-product" onSubmit={handelSubmit}>
      <label>Product name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Quantity</label>
      <input
        type="text"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />

      <button className="button">Add</button>
    </form>
  );
};

export default FormProduct;
