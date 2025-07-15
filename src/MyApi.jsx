export const fetchAllData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  const result = await response.json();
  return result;
};

export const showAllRecord = async (userid) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userid}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  const result = await response.json();
  return result;
};

export const handleDeleteRecord = async (userid) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userid}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error(`HTTP error Status : ${response.status}`);
  }
  const result = await response.json();
  console.log("2nd", response.ok);
  return response.ok;
};
