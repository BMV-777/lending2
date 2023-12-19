import React from "react";

const Stats = ({ product }) => {
  const numProduct = product.length;
  const total = product.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
  return (
    <footer
      style={{
        backgroundColor: "aqua",
        width: "280px",
        color: "black",
        padding: "10px",
      }}
    >
      <em>Количество продуктов: {numProduct}</em>
      <p>Общая стоимость товара: {total}</p>
    </footer>
  );
};

export default Stats;
