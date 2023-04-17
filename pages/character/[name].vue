<template>
  <div :class="$style.container">
    <div style="padding: 10px 0px">
      Имя: <strong>{{ character?.name || $route.params.name }}</strong>
    </div>
    <div v-if="character">
      <p>
        Рост: <strong>{{ character.height }}</strong>
      </p>
      <p>
        Вес: <strong>{{ character.mass }}</strong>
      </p>
      <p>
        Год рождения: <strong>{{ character.birth_year }}</strong>
      </p>
      <p>
        Цвет глаз: <strong>{{ character.eye_color }}</strong>
      </p>
      <p>
        Цвет глаз: <strong>{{ character.eye_color }}</strong>
      </p>
      <div v-if="filmData">
        <div style="display: flex">
          Фильмы :
          <p v-for="film in filmData">{{ film }},</p>
        </div>
      </div>
      <div v-else><a-skeleton /></div>
    </div>
    <div v-else><a-skeleton /></div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type { IFilmData, IResults } from "~/types/character";
import { ICharacter } from "~/types/character";

const route = useRoute();

const addToLocalStorage = (characterName: string) => {
  if (typeof window === "undefined") return null;

  const visitedCharacters: string[] = JSON.parse(localStorage.getItem("visitedCharacters") || "[]");

  if (visitedCharacters.includes(characterName)) {
    const index = visitedCharacters.indexOf(characterName);
    visitedCharacters.splice(index, 1);
  }

  visitedCharacters.push(characterName);

  // TODO: limit number of elements in local storage
  if (visitedCharacters.length > 6) visitedCharacters.splice(0, 1);

  localStorage.setItem("visitedCharacters", JSON.stringify(visitedCharacters));
};

addToLocalStorage(route.params.name.toString());

const character = ref<ICharacter | null>(null);

const pending = ref(false);

const hasFilms = ref(false);

const fetchCharacterData = async () => {
  pending.value = true;
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

fetchCharacterData();

//очень страшный код

// TODO: if there are films, fetch their data and display names
let filmData = ref<string[] | null>(null);

const getFilmData = async () => {
  const filmPromises =
    character.value?.films?.map((url) =>
      fetch(url.toString(), {
        headers: {
          "Content-Type": "application/json",
        },
      })
    ) || [];
  // filmData.value = await Promise.all(filmPromises).then((filmResponses) =>
  //   Promise.all(filmResponses.map((respones) => respones.json()))
  // );
  const filmResponses = await Promise.all(filmPromises);
  const reponeses = await Promise.all(filmResponses.map((respones) => respones.json()));
  filmData.value = reponeses.map((response) => response.title);
  console.log(filmData.value);
};

watch(hasFilms, getFilmData);
</script>

<style module>
.container {
  padding: 20px;
}
</style>

<!-- <script setup lang="ts">
import { watch, ref } from "vue";
import { ICharacter, IResults } from "~/types/character";
import { useRoute } from "vue-router";

const route = useRoute();

const fetchCharacterData = async () => {
  try {
    const response = await fetch(`https://swapi.dev/api/people?search=${route.params.name}`);

    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const { data, pending } = useLazyAsyncData<IResults>(fetchCharacterData);

watch(data, (newVal, old) => {
  console.log(newVal);

  data.value = newVal;
});

// const character = result.data.value?.results[0];

// TODO: if there are films, fetch their data and display names
// const fetchFilmsData = async (films: string[]) => {
//   try {
//     const filmsData = character?.films.map((film) => {
//       const filmData = await fetch(`https://swapi.dev/api/people?search=${film}`);
//       return filmData;
//     });
//     return filmsData;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const hasFilms = computed(() => {
  //   return character?.films.length === 0 ? false : true;
// });

// watch(character, () => {
//   if (hasFilms) {
//     const films = fetchFilmsData(character.films);
//   }
// });
</script>

  <template>
    <div>
      <div>
        Имя: <strong>{{ $route.params.name }}</strong>
      </div>
      <div v-if="pending">I`M PENDING</div>
      <div v-if="character">
        <p>
          Рост: <strong>{{ character.height }}</strong>
        </p>
        <p>
          Вес: <strong>{{ character.mass }}</strong>
        </p>
        <p>
          Год рождения: <strong>{{ character.birth_year }}</strong>
        </p>
        <p>
          Цвет глаз: <strong>{{ character.eye_color }}</strong>
        </p>
        <p>
          Цвет глаз: <strong>{{ character.eye_color }}</strong>
        </p>
        <div v-if="character.species[0]">
          <p v-for="species in character.species">
            Вид: <strong>{{ species }}</strong>
          </p>
        </div>
        <div v-if="character.films[0]"><div v-for="film in character.films"></div></div>
      </div>
      <div v-else>Loading data...</div>

    </div>
  </template> -->
