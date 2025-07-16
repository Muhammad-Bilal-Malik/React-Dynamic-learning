import React, { useState } from "react";

const SingleProduct = ({ productData, terminate }) => {
  return (
    <>
      <div
        onClick={terminate}
        className=" w-screen h-screen top-0 left-0 right-0 bottom-0 fixed bg-[rgba(49,49,49,0.99)] overflow-scroll"
      >
        <div className="flex justify-end ">
          <button
            onClick={terminate}
            className="bg-gray-200 py-1 px-2.5 rounded mt-3 mr-8 cursor-pointer"
          >
            Close
          </button>
        </div>
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col justify-center items-center absolute top-[20%] left-[25%] bg-white w-2xl rounded "
        >
          <table className="border-2 my-3">
            <tbody>
              <tr>
                <td className="border px-1.5 py-0.5 bg-gray-300 font-bold text-left">
                  Title
                </td>
                <td className="border px-1.5 py-0.5 bg-gray-300 text-left text-nowrap">
                  {productData.title}
                </td>
              </tr>
              <tr>
                <td className="border px-1.5 py-0.5 bg-gray-300 font-bold text-left">
                  Category
                </td>
                <td className="border px-1.5 py-0.5 bg-gray-300 text-left text-nowrap">
                  {productData.category}
                </td>
              </tr>
              <tr>
                <td className="border px-1.5 py-0.5 bg-gray-300 font-bold text-left">
                  Price
                </td>
                <td className="border px-1.5 py-0.5 bg-gray-300 text-left text-nowrap">
                  {productData.price}
                </td>
              </tr>
              <tr>
                <td className="border px-1.5 py-0.5 bg-gray-300 font-bold text-left">
                  Rating
                </td>
                <td className="border px-1.5 py-0.5 bg-gray-300 text-left text-nowrap">
                  {productData.rating}
                </td>
              </tr>
              <tr>
                <td className="border px-1.5 py-0.5 bg-gray-300 font-bold text-left">
                  Brand
                </td>
                <td className="border px-1.5 py-0.5 bg-gray-300 text-left text-nowrap">
                  {productData.brand}
                </td>
              </tr>
              <tr>
                <td className="border px-1.5 py-0.5 bg-gray-300 font-bold text-left">
                  Reviews
                </td>
                {productData.reviews.map((review) => {
                  return (
                    <div className="text-wrap">
                      <div>
                        <td>
                          <span className="font-bold">rating :</span>
                          {review.rating}
                        </td>
                      </div>
                      <div>
                        <td>
                          <span className="font-bold">Comment :</span>
                          {review.comment}
                        </td>
                      </div>
                      <div>
                        <td>
                          <span className="font-bold">Date :</span>
                          {review.date}
                        </td>
                      </div>
                      <div>
                        <td>
                          <span className="font-bold">Name :</span>
                          {review.reviewerName}
                        </td>
                      </div>
                      <div>
                        <td>
                          <span className="font-bold">Email :</span>
                          {review.reviewerEmail}
                        </td>
                      </div>
                    </div>
                  );
                })}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
