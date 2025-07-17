import React, { useEffect, useState } from "react";
import {
  deletSingleProduct,
  fetchAllProducts,
  fetchSingleItem,
} from "./ProductApi";
import Spinner from "./assets/Spinner.svg";
import SingleProduct from "./SingleProduct";
import ConfirmDeletModal from "./ConfirmDeletModal";
import Form from "./Form";
const Product = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [singleItem, setSingleItem] = useState(null);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [myId, setMyId] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const [formUpdate, setFormUpdate] = useState(null);
  console.log("check", singleItem);
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetchAllProducts();
      console.log("check", response);
      setAllProducts(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <img className="absolute top-[]" src={Spinner} alt="" />;

  const fetchOneItem = async (itemid) => {
    try {
      const response = await fetchSingleItem(itemid);
      setSingleItem(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    stopScroll();
  };

  const deleteProduct = async (itemid) => {
    setLoading(true);

    try {
      const response = await deletSingleProduct(itemid);
      setAllProducts(allProducts.filter((item) => item.id !== itemid));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const onClose = () => {
    setSingleItem(null);
    document.body.classList.remove("overflow-hidden");
  };

  const stopScroll = () => {
    if ((fetchOneItem, openForm)) {
      document.body.classList.add("overflow-hidden");
    }
  };

  return (
    <div className="max-w-1366 mx-auto ">
      <div className="text-center py-5">
        <button
          onClick={() => setOpenForm(true)}
          className="bg-green-500 px-2.5 py-1 rounded font-bold text-2xl hover:bg-green-600 transition-all"
        >
          Add +
        </button>
      </div>

      <div className="w-[95%] mx-auto overflow-scroll">
        <table className="w-full border-2 rounded-lg">
          <thead className=" py-1.5">
            <tr className="bg-gray-500 font-bold">
              <td className="py-1 text-center border">Title</td>
              <td className="py-1 text-center border">Category</td>
              <td className="py-1 text-center border">Price</td>
              <td className="py-1 text-center border">Stock</td>
              <td className="py-1 text-center border">Description</td>
              <td className="py-1 text-center border">Action</td>
            </tr>
          </thead>
          <tbody>
            {allProducts.map((item, i) => {
              return (
                <tr
                  key={i}
                  className="hover:cursor-pointer"
                  onClick={() => fetchOneItem(item.id)}
                >
                  <td className="py-1.5 text-left px-2 border-2 text-nowrap">
                    {item.title}
                  </td>
                  <td className="py-1.5 text-left px-2 border-2 text-nowrap">
                    {item.category}
                  </td>
                  <td className="py-1.5 text-left px-2 border-2 text-nowrap">
                    {item.price}
                  </td>
                  <td className="py-1.5 text-left px-2 border-2 text-nowrap">
                    {item.stock}
                  </td>
                  <td className="py-1.5 text-left px-2 border-2 text-nowrap">
                    {item.description}
                  </td>
                  <td
                    onClick={(e) => e.stopPropagation()}
                    className="text-center cursor-auto"
                  >
                    <button
                      onClick={() => {
                        setOpenForm(true);
                        setFormUpdate(item);
                      }}
                      className="py-1 rounded bg-red-600 px-2 mr-1 cursor-pointer"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        setOpen(true);
                        setMyId(item.id);
                      }}
                      className="py-1 rounded bg-green-700 px-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {singleItem && (
        <SingleProduct productData={singleItem} terminate={onClose} />
      )}
      <ConfirmDeletModal
        open={open}
        onClose={() => setOpen(false)}
        deleteItem={() => deleteProduct(myId)}
      />
      {openForm && (
        <Form
          openForm={openForm}
          frezeScrole={stopScroll}
          closeForm={() => setOpenForm(false)}
          addData={formUpdate}
        />
      )}
    </div>
  );
};

export default Product;
