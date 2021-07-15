async function getData() {
  const data = await fetch('http://localhost:8000/words');
  const res = await data.json();
  return res;
}

export default getData;
