import React, { useEffect, useState } from "react";
import { addProduct, updateRecord } from "./ProductApi";

const Form = ({ openForm, frezeScrole, closeForm, addData }) => {
  const [myInput, setMyInput] = useState({
    id: 0,
    title: "",
    category: "",
    price: 0,
    stock: 0,
    description: "",
  });
  useEffect(() => {
    if (addData) {
      setMyInput({
        id: addData.id,
        title: addData.title,
        category: addData.category,
        price: addData.price,
        stock: addData.stock,
        description: addData.description,
      });
    }
  }, [addData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (addData) {
        const response = await updateRecord(myInput);
      } else {
        const { id, ...rest } = myInput;
        const response = await addProduct(rest);
      }
      closeForm();
    } catch (error) {}
  };

  return (
    <div
      onClick={closeForm}
      className="w-screen h-screen top-0 left-0 right-0 bottom-0 fixed bg-[rgba(49,49,49,0.99)] overflow-scroll"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[60%] mx-auto bg-white px-3.5 rounded  my-2.5"
      >
        <form action="/submit" method="post">
          <h2 className="font-bold text-3xl text-center py-2">
            User Information
          </h2>

          <div className="flex items-center mb-3">
            <label htmlFor="title" className="w-32 font-bold">
              Title:
            </label>
            <input
              onChange={(e) =>
                setMyInput((prev) => ({ ...prev, title: e.target.value }))
              }
              type="text"
              value={myInput.title}
              id="title"
              name="title"
              required
              className="flex-1 border rounded px-3 py-2"
            />
          </div>

          <div className="flex items-center mb-3">
            <label htmlFor="category" className="w-32 font-bold">
              Category:
            </label>
            <input
              onChange={(e) =>
                setMyInput((prev) => ({ ...prev, category: e.target.value }))
              }
              type="text"
              value={myInput.category}
              id="category"
              name="category"
              required
              className="flex-1 border rounded px-3 py-2"
            />
          </div>

          <div className="flex items-center mb-3">
            <label htmlFor="price" className="w-32 font-bold">
              Price:
            </label>
            <input
              onChange={(e) =>
                setMyInput((prev) => ({ ...prev, price: e.target.value }))
              }
              type="number"
              value={myInput.price}
              id="price"
              name="price"
              required
              className="flex-1 border rounded px-3 py-2"
            />
          </div>

          <div className="flex items-center mb-3">
            <label htmlFor="stock" className="w-32 font-bold">
              Stock:
            </label>
            <input
              onChange={(e) =>
                setMyInput((prev) => ({ ...prev, stock: e.target.value }))
              }
              type="number"
              value={myInput.stock}
              id="stock"
              name="stock"
              className="flex-1 border rounded px-3 py-2"
            />
          </div>
          <div className="flex items-center mb-3">
            <label htmlFor="description" className="w-32 font-bold">
              Description:
            </label>
            <input
              onChange={(e) =>
                setMyInput((prev) => ({ ...prev, description: e.target.value }))
              }
              type="text"
              value={myInput.description}
              id="description"
              name="description"
              className="flex-1 border rounded px-3 py-2"
            />
          </div>

          <div className="flex justify-center mb-6">
            <button
              onClick={handleSubmit}
              className="font-semibold text-gray-900 bg-gray-400 hover:bg-gray-500 px-3 py-1.5 rounded"
              type="submit"
            >
              {addData ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
