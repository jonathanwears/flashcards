async function createNewWord(postOptions) {
  const data = await fetch('http://localHost:8000/create', postOptions);
  const res = data.json();
}

export default createNewWord;
