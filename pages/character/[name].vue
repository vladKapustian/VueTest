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
import { ICharacter } from "~/types/character";

const route = useRoute();

const character = ref<ICharacter | null>(null);

const pending = ref(false);

const hasFilms = ref(false);

let filmData = ref<string[] | null>(null);

onMounted(async () => {
  addToLocalStorage(route.params.name.toString());
  await fetchCharacterData(pending, character, hasFilms);
  getFilmData(filmData, character);
});
</script>

<style module>
.container {
  padding: 20px;
}
</style>
