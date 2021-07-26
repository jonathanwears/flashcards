async function updateWord(postOptions) {
  const data = await fetch('http://localHost:8000/editEntry', postOptions);
}

export default updateWord;
