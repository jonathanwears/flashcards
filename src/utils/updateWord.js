async function updateWord(postOptions) {
  await fetch('http://localHost:8000/editEntry', postOptions);
}

export default updateWord;
