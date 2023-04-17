import { ICharacter } from "~/types/character";

const getFilmData = async (filmData: Ref<string[] | null>, character: Ref<ICharacter | null>) => {
  const filmPromises =
    character.value?.films?.map((url) =>
      fetch(url.toString(), {
        headers: {
          "Content-Type": "application/json",
        },
      })
    ) || [];
  const filmResponses = await Promise.all(filmPromises);
  const reponeses = await Promise.all(filmResponses.map((respones) => respones.json()));
  filmData.value = reponeses.map((response) => response.title);
  console.log(filmData.value);
};

export default getFilmData;
