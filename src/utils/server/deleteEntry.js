async function deleteEntry(id) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const deleteEntry = fetch(`http://localhost:8000/deleteEntry?id=${id}`, options);
  const res = await data.json();
}

export default deleteEntry;
