export const getJSON = async function (url) {
  try {
    const fetchPro = fetch(url);
    const res = await fetchPro;
    const data = await res.json();
    console.log(res, data);
    return data;
  } catch (err) {
    // console.log(err);
    // throw err;
  }
};
