<template>
  <div>
    <div>Имя: {{ $route.params.name }}</div>
    <div v-if="characters">{{ characters.data }}</div>
    <div v-else>Loading data...</div>

    <!-- <div v-if="pending">Data is loading</div> -->
  </div>
</template>

<script setup lang="ts">
import { IResults } from "~/types/character";
import { useRoute } from "vue-router";
import { useLazyAsyncData } from "#app";

const route = useRoute();

const fetchData = async () => {
  try {
    const response = await fetch(`https://swapi.dev/api/people?search=${route.params.name}`);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

const characters = useLazyAsyncData<IResults>(fetchData);
</script>

<style module></style>
