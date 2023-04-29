import React from "react";

// 3. event와 같은 파라미터들도 타입을 명시해주어야한다.
const ShoppingListForm = (): JSX.Element => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("SUBMIT");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" />
        <button type="submit">Add Item</button>
      </form>
    </>
  );
};

export default ShoppingListForm;
