const header = {
  apikey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnYWN5a2V5b3ZmamVobHhvaWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2ODM2ODAsImV4cCI6MjA2ODI1OTY4MH0.xf49MDbUN4oHP7lf4W_xb2EI78foHo4JlpPBwNrImiw",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnYWN5a2V5b3ZmamVobHhvaWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2ODM2ODAsImV4cCI6MjA2ODI1OTY4MH0.xf49MDbUN4oHP7lf4W_xb2EI78foHo4JlpPBwNrImiw",
  "content-type": "application/json",
  Prefer: "return=representation",
};

// below is the Get Method Using api

export const fetchAllProducts = async () => {
  const response = await fetch("http://localhost:3001/products");
  console.log("response", response);
  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  const result = await response.json();
  console.log("result", result);
  return result;
};

export const fetchSingleItem = async (itemid) => {
  console.log("myid", itemid);
  const response = await fetch(`http://localhost:3001/products/${itemid}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  const result = await response.json();
  return result;
};

export const deletSingleProduct = async (itemid) => {
  const response = await fetch(`http://localhost:3001/products/${itemid}`, {
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
  const response = await fetch(`http://localhost:3001/products`, {
    method: "POST",
    header: { "Content-type": "application/json" },
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
  const response = await fetch(`http://localhost:3001/products/${info.id}`, {
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
