import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import ConfirmDeletModal from "./ConfirmDeletModal";
import Spinner from "./assets/Spinner.svg";
import { fetchAllData, handleDeleteRecord, showAllRecord } from "./MyApi";
const Table = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [singleUser, setSingleUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [myId, setMyId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetchAllData();
      setUsers(response);
      console.log("reponse", response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <img className="absolute top-[]" src={Spinner} alt="" />;

  const showRecord = async (userid) => {
    try {
      const response = await showAllRecord(userid);
      setSingleUser(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
    stopScroll();
  };

  const onClose = () => {
    setSingleUser(null);
    document.body.classList.remove("overflow-hidden");
  };

  const stopScroll = () => {
    if (showRecord) {
      document.body.classList.add("overflow-hidden");
    }
  };

  const handleDelete = async (userid) => {
    setLoading(true);
    try {
      const response = await handleDeleteRecord(userid);
      setUsers(users.filter((user) => user.id !== userid));
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-1366 mx-auto ">
      <div className="py-2.5 my-4 flex justify-center items-center">
        <label htmlFor="">
          Enter ID :
          <input className="border py-1 px-1.5 mx-2 rounded-sm" type="number" />
          <button className="bg-gray-400 rounded-sm text-black font-semibold hover:bg-gray-500 py-1 px-2">
            Submit
          </button>
        </label>
      </div>
      <div className="w-[95%] mx-auto overflow-scroll">
        <table className="w-full border-2 rounded-lg">
          <thead className=" py-1.5">
            <tr className="bg-gray-500 font-bold">
              <td className="py-1 text-center border">Name</td>
              <td className="py-1 text-center border">User Name</td>
              <td className="py-1 text-center border">Email</td>
              <td className="py-1 text-center border">Phone No.</td>
              <td className="py-1 text-center border">Website</td>
              <td className="py-1 text-center border">Company</td>
              <td className="py-1 text-center border">Action</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return (
                <tr
                  className="hover:cursor-pointer"
                  key={i}
                  onClick={() => showRecord(user.id)}
                >
                  <td className="py-1.5 text-left px-2 border-2 text-nowrap">
                    {user.name}
                  </td>
                  <td className="py-1.5 text-left px-2 border-2 text-nowrap">
                    {user.username}
                  </td>
                  <td className="py-1.5 text-left px-2 border-2 text-nowrap">
                    {user.email}
                  </td>
                  <td className="py-1.5 text-left px-2 border-2 text-nowrap">
                    {user.phone}
                  </td>
                  <td className="py-1.5 text-left px-2 border-2 text-nowrap">
                    {user.website}
                  </td>
                  <td className="py-1.5 text-left px-2 border-2 text-nowrap">
                    {user.company.name}
                  </td>
                  <td onClick={(e) => e.stopPropagation()}>
                    <button className="py-1 rounded bg-red-600 px-2 mr-1">
                      Update
                    </button>
                    <button
                      onClick={() => {
                        setOpen(true);
                        setMyId(user.id);
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

        {myId && (
          <ConfirmDeletModal
            open={open}
            onClose={() => setOpen(false)}
            userId={() => handleDelete(myId)}
          />
        )}
      </div>
      {singleUser && <Modal userData={singleUser} terminate={onClose} />}
    </div>
  );
};

export default Table;
