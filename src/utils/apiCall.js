const apiCall = async (url, loadedSetter, dataSetter) => {
  loadedSetter(false);
  const data = await fetch(url);
  const returnedData = await data.json();
  dataSetter(returnedData);
  loadedSetter(true);
};

export default apiCall;
