import React, { useRef } from "react";

interface ShoppingListFormProps {
  onAddItem: (item: string) => void;
}

// 3. event와 같은 파라미터들도 타입을 명시해주어야한다.
const ShoppingListForm = ({onAddItem}: ShoppingListFormProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = inputRef.current!.value;
    onAddItem(newProduct);
    inputRef.current!.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" ref={inputRef} />
        <button type="submit">Add Item</button>
      </form>
    </>
  );
};

export default ShoppingListForm;
