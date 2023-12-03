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

  const handelTotal = (item) => {
    item.reduce((acc, item) => acc + item.quantity * item.price);
  };
  // const products = [
  //   {
  //     id: 1,
  //     product_title: "Item 1",
  //     quantity: 2,
  //     price: 100.0,
  //   },
  //   {
  //     id: 2,
  //     product_title: "Item 2",
  //     quantity: 3,
  //     price: 300.0,
  //   },
  // ];
  // const countTotal = (items) =>
  //   items.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);

  // console.log(countTotal(products));
  function handelAddProduct(product) {
    setProducts((products) => [...products, product]);
    setSum(product.quantity * product.price);
    // handelTotal();
    // setSum((product) =>
    //  product.reduce((acc, item) => acc + item.quantity * item.price)
    // );

    // setSum(console.log(product.map((item) => item.price + item.price)));
  }

  function handelDeleteProduct(id) {
    setProducts((products) => products.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <div className="sidebar">
        <Product products={product} onDeleteProduct={handelDeleteProduct} />

        <FormProduct onHandelAdd={handelAddProduct} />
        {sum}
      </div>
    </div>
  );
}

export default App;
