<script setup lang="ts">
import { ICharacter, IResults } from "types/character";

definePageMeta({ layout: "default" });

const searchValue = ref("");
const characters = ref<IResults | null>(null);

const onSearch = async () => {
  characters.value = await $fetch(`https://swapi.dev/api/people?search=${searchValue.value}`);
};

const findVisitedCharacters = async () => {
  if (typeof window === "undefined") return null;

  const visitedCharactersArray: string[] = JSON.parse(localStorage.getItem("visitedCharacters") || "[]");
  console.log(visitedCharactersArray);

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

const visitedCharacters = await findVisitedCharacters();
</script>

<template>
  <div :class="$style.body">
    <h1 :class="$style.head">Удобное приложение для поиска персонажей и Star Wars</h1>
    <div v-if="visitedCharacters">
      <h3>Вы ранее просматривали:</h3>
      <div :class="$style.gridContainer">
        <CharacterCard v-for="chars in visitedCharacters" :props="chars"></CharacterCard>
      </div>
    </div>
    <a-input-search
      :value="searchValue"
      @input="(event:Event) => {(searchValue = (event.target as HTMLInputElement).value)}"
      placeholder="Введите имя персонажа"
      @search="onSearch"
    />

    <div v-if="characters" :class="$style.gridContainer">
      <CharacterCard v-for="char in characters.results" :props="char"></CharacterCard>
    </div>

    <h3 :class="$style.notFoundParagraph" v-else>Пока ничего не найдено</h3>
  </div>
</template>

<style module>
.body {
  flex-grow: 1;
  padding: 36px 20px;
  display: flex;
  flex-direction: column;
  padding: 30px;
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
  padding: 20px 0px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

.notFoundParagraph {
  padding: 10px 0px;
}
</style>
