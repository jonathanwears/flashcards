async function deleteEntry(options) {
  const deleteEntry = await fetch('localhost:8000/deleteEntry', options);
}

export default deleteEntry;
