import React, { useState, useEffect } from "react";

const Table = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status : ${response.status}`);
      }
      const result = await response.json();
      setUsers(result);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(flase);
    }
  };

  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <p>Loading the page</p>;

  return (
    <div className="max-w-1366 mx-auto">
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
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return (
                <tr key={i}>
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
