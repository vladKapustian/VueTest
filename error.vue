<template>
  <div :class="$style.container">
    <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
      <template #extra>
        <NuxtLink :to="`/`"> <a-button>Back Home</a-button></NuxtLink>
      </template>
    </a-result>
  </div>
</template>
<script setup lang="ts">
definePageMeta({ layout: "default" });

const props = defineProps({
  error: Object,
});

</script>

<style module>
.container {
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
