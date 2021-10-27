async function deleteEntry(options, id) {
  const deleteEntry = fetch(`http://localhost:8000/deleteEntry?id=${id}`, options);
  const res = await data.json();
}

export default deleteEntry;
