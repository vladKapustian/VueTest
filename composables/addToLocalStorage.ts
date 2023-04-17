const addToLocalStorage = (characterName: string) => {
  if (typeof window === "undefined") return null;

  const visitedCharacters: string[] = JSON.parse(localStorage.getItem("visitedCharacters") || "[]");

  if (visitedCharacters.includes(characterName)) {
    const index = visitedCharacters.indexOf(characterName);
    visitedCharacters.splice(index, 1);
  }

  visitedCharacters.push(characterName);

  if (visitedCharacters.length > 6) visitedCharacters.splice(0, 1);

  localStorage.setItem("visitedCharacters", JSON.stringify(visitedCharacters));
};

export default addToLocalStorage