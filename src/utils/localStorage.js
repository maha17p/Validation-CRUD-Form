const addDataToLocalStorage = (payload, tableData) => {
  const indexData = tableData?.findIndex((data) => data.id === payload.id);
  if (indexData === -1) {
    tableData.push(payload);
  } else {
    tableData.splice(indexData, 1, payload);
  }
  localStorage.setItem("formData", JSON.stringify(tableData));

};
const removeDatafromLocalStorage = (payload, tableData) => {
  const indexData = tableData?.findIndex((data) => data.id === payload.id);
  tableData.splice(indexData, 1);
  localStorage.setItem("formData", JSON.stringify(tableData));
};
const getDatafromLocalStorage = () => {
  return localStorage.getItem("formData")
    ? JSON.parse(localStorage.getItem("formData"))
    : [];
};

export {
  addDataToLocalStorage,
  removeDatafromLocalStorage,
  getDatafromLocalStorage,
};
