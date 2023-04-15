<script setup lang="ts">
import { ICharacter } from "~/types/character";
defineProps<{ props: ICharacter }>();

// const char = toRefs(props);
</script>

<template>
  <NuxtLink :to="`/character/${props.name}`" :class="$style.cardContainer">
    <h3 :class="$style.name">
      Имя: <strong>{{ props.name }}</strong>
    </h3>
    <div :class="$style.infoContainer">
      <p :class="$style.additionalInfo">Год рождения: {{ props.birth_year }}</p>
      <p :class="$style.additionalInfo">Пол: {{ props.gender }}</p>
    </div>
  </NuxtLink>
</template>

<style module>
.cardContainer {
  margin: 10px 0px;
  border: solid 2px gray;
  max-height: 1fr;
}
.name {
  font-size: 16px;
}

.infoContainer {
  display: flex;
}

.additionalInfo {
}
</style>
