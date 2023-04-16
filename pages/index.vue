<script setup lang="ts">
import { ICharacter, IResults } from "types/character";
definePageMeta({
  layout: "default",
});

let value = ref<string>("");

// useStorage();

let characters = ref<IResults | null>(null);
const onSearch = async () => {
  characters.value = await $fetch(`https://swapi.dev/api/people?search=${value.value}`);
  console.log(characters);
};
</script>

<template>
  <div :class="$style.body">
    <h1 :class="$style.head">Удобное приложение для поиска персонажей и Star Wars</h1>
    <!-- <input :class="$style.input" type="search" name="q" placeholder="" id="charachterSearch" /> -->
    <p>value = {{ value }}</p>
    <a-input-search
      :value="value"
      @input="(event:Event) => {(value = (event.target as HTMLInputElement).value)}"
      placeholder="Введите имя персонажа"
      enter-button
      @search="onSearch"
    />

    <div v-if="characters" :class="$style.gridContainer">
      <CharacterCard v-for="char in characters.results" :props="char"></CharacterCard>
    </div>

    <p v-else>Пока ничего не найдено</p>
  </div>
</template>

<style module>
input[type="search"]::-webkit-search-cancel-button {
  display: none;
}

input[type="search"]::-ms-clear {
  display: none;
}

input[type="search"] {
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f1f1f1;
}

.body {
  padding: 36px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.head {
  font-family: "Inter", sans-serif;
  font-size: 24px;
}
.input {
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f1f1f1;
}

.gridContainer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
</style>
