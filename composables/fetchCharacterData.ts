import { IResults, ICharacter } from "~/types/character";

const fetchCharacterData = async (pending: Ref<boolean>, character: Ref<ICharacter | null>, hasFilms: Ref<boolean>) => {
  pending.value = true;
  const route = useRoute();
  try {
    const response = await $fetch<IResults>(`https://swapi.dev/api/people?search=${route.params.name}`);

    character.value = response.results[0];
    if (character.value?.films?.[0]) {
      hasFilms.value = true;
    }
  } catch (error) {
    console.error(error);
  }
  pending.value = false;
};

export default fetchCharacterData;
