<script setup lang="ts">
import { AsyncData } from "#app";
import { Data } from "ant-design-vue/lib/_util/type";
import { ICharacter } from "~/types/character";

definePageMeta({
  layout: "default",
});

let value = ref<string>("");

let characters = ref<ICharacter | null>(null);
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
    <div v-if="!characters"><p>Пока ничего не найдено</p></div>
    <div v-else>
      <div v-for="char in characters.results">
        <h3>{{ char.name }}</h3>
      </div>
    </div>
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
</style>
