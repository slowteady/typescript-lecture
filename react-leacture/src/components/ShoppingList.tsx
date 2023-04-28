import React from "react";


interface Item {
  id: number;
  product: string;
  quantity: number;
}

interface ShoppingListProps {
  items: Item[];
}
//2. props도 타입 설정 해주어야 한다.
const ShoppingList = ({items}: ShoppingListProps): JSX.Element => {
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.product} - {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
