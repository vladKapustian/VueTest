import { IResults } from "~/types/character";

const findVisitedCharacters = async () => {
    if (typeof window === "undefined") return null;
  
    const visitedCharactersArray: string[] = JSON.parse(localStorage.getItem("visitedCharacters") || "[]");
  
    let visitedCharacters: IResults[];
    if (visitedCharactersArray) {
      visitedCharacters = await Promise.all(
        visitedCharactersArray.map(
          async (characterName) => await $fetch(`https://swapi.dev/api/people?search=${characterName}`)
        )
      );
      return visitedCharacters.map((char) => char.results[0]);
    } else {
      return null;
    }
  };

export default findVisitedCharacters