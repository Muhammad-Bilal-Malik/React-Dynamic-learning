import React, { useState } from "react";

const Modal = ({ userData, terminate }) => {
  return (
    <>
      <div
        onClick={terminate}
        className=" w-screen h-screen top-0 left-0 right-0 bottom-0 fixed bg-[rgba(49,49,49,0.99)]"
      >
        <div className="flex justify-end ">
          <button
            onClick={terminate}
            className="bg-gray-200 py-1 px-2.5 rounded mt-3 mr-8 cursor-pointer"
          >
            Close
          </button>
        </div>
        <div className="flex flex-col justify-center items-center absolute top-[20%] left-[25%] bg-white w-2xl rounded">
          <table className="border-2 my-3">
            <tbody>
              <tr>
                <td className="border px-1.5 py-0.5 bg-gray-300 font-bold text-left">
                  Name
                </td>
                <td className="border px-1.5 py-0.5 bg-gray-300 text-left text-nowrap">
                  {userData.name}
                </td>
              </tr>
              <tr>
                <td className="border px-1.5 py-0.5 bg-gray-300 font-bold text-left">
                  Username
                </td>
                <td className="border px-1.5 py-0.5 bg-gray-300 text-left text-nowrap">
                  {userData.username}
                </td>
              </tr>
              <tr>
                <td className="border px-1.5 py-0.5 bg-gray-300 font-bold text-left">
                  Email
                </td>
                <td className="border px-1.5 py-0.5 bg-gray-300 text-left text-nowrap">
                  {userData.email}
                </td>
              </tr>
              <tr>
                <td className="border px-1.5 py-0.5 bg-gray-300 font-bold text-left">
                  Phone No.
                </td>
                <td className="border px-1.5 py-0.5 bg-gray-300 text-left text-nowrap">
                  {userData.phone}
                </td>
              </tr>
              <tr>
                <td className="border px-1.5 py-0.5 bg-gray-300 font-bold text-left">
                  Website
                </td>
                <td className="border px-1.5 py-0.5 bg-gray-300 text-left text-nowrap">
                  {userData.website}
                </td>
              </tr>
              <tr className="font-bold flex justify-center">
                <td>Address</td>
              </tr>
              <tr>
                <td className="border px-1.5 py-0.5 bg-gray-300 font-bold text-left">
                  Street
                </td>
                <td className="border px-1.5 py-0.5 bg-gray-300 text-left text-nowrap">
                  {userData.address.street}
                </td>
              </tr>
              <tr>
                <td className="border px-1.5 py-0.5 bg-gray-300 font-bold text-left">
                  Suit
                </td>
                <td className="border px-1.5 py-0.5 bg-gray-300 text-left text-nowrap">
                  {userData.address.suite}
                </td>
              </tr>
              <tr>
                <td className="border px-1.5 py-0.5 bg-gray-300 font-bold text-left">
                  City
                </td>
                <td className="border px-1.5 py-0.5 bg-gray-300 text-left text-nowrap">
                  {userData.address.city}
                </td>
              </tr>
              <tr>
                <td className="border px-1.5 py-0.5 bg-gray-300 font-bold text-left">
                  ZipCode
                </td>
                <td className="border px-1.5 py-0.5 bg-gray-300 text-left text-nowrap">
                  {userData.address.zipcode}
                </td>
              </tr>
              <tr>
                <td className="border px-1.5 py-0.5 bg-gray-300 font-bold text-left">
                  Company
                </td>
                <td className="border px-1.5 py-0.5 bg-gray-300 text-left text-nowrap">
                  {userData.company.name}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Modal;
