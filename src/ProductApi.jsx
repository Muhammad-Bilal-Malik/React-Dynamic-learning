// below is the Get Method Using api

export const fetchAllProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  const result = await response.json();
  return result;
};

export const fetchSingleItem = async (itemid) => {
  console.log("myid", itemid);
  const response = await fetch(`https://dummyjson.com/products/${itemid}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  const result = await response.json();
  return result;
};

export const deletSingleProduct = async (itemid) => {
  const response = await fetch(`https://dummyjson.com/products/${itemid}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  const result = await response.json();
  return response.ok;
};

// below is the Post Method using Api

export const addProduct = async (info) => {
  console.log("mydata", info);
  const response = await fetch(`https://dummyjson.com/products/add`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(info),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  const result = await response.json();
  console.log("result", result);
};

// Api for Update the existing Data

export const updateRecord = async (info) => {
  console.log("mydata", info);
  const response = await fetch(`https://dummyjson.com/products/${info.id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      title: info.title,
      category: info.category,
      price: info.price,
      stock: info.stock,
      description: info.description,
    }),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  const result = await response.json();
  console.log("result", result);
};
