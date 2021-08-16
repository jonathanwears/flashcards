async function deleteEntry(options) {
  const deleteEntry = fetch('http://localhost:8000/deleteEntry', options);
}

export default deleteEntry;
