import "./App.css";

import products from "./product";

import Product from "./components/Product/Product";
import FormProduct from "./components/FormProduct/FormProduct";
import { useState } from "react";

console.log(products);

function App() {
  const [product, setProducts] = useState(products);
  const [sum, setSum] = useState(0);

  console.log(product);

  function handelAddProduct(product) {
    setProducts((products) => [...products, product]);
    setSum(product.price + product.price);
  }

  return (
    <div className="App">
      <div>
        <Product products={product} />

        <FormProduct onHandelAdd={handelAddProduct} />
      </div>
      <p>{sum}</p>
    </div>
  );
}

export default App;
