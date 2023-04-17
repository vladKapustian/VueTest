<script setup lang="ts">
import { ICharacter } from "~/types/character";
defineProps<{ props: ICharacter }>();

// const char = toRefs(props);
</script>

<template>
  <NuxtLink :to="`/character/${props.name}`">
    <a-card>
      <h3>
        Имя: <strong>{{ props.name }}</strong>
      </h3>
      <div>
        <p>Год рождения: {{ props.birth_year }}</p>
        <p>Пол: {{ props.gender }}</p>
      </div>
    </a-card>
  </NuxtLink>
</template>

<style module></style>
