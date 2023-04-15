<script setup></script>

<template>
  <header :class="$style.headerContainer">
    <nav :class="$style.header">
      <img src="../static/starWarsIcon.svg" :class="$style.logo" alt="Icon" />
      <NuxtLink :class="$style.link" to="./">На главную</NuxtLink>
      <NuxtLink :class="$style.link" to="/history">История поиска</NuxtLink>
    </nav>
  </header>
  <slot />
</template>

<style module>
.headerContainer {
  background-color: #181818;
  height: 60px;
}

.header {
  margin: 0 auto;
  background-color: #181818;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  max-height: 60px;
  height: 100%;
  padding: 0px 20px;
}
.link {
  color: rgba(255, 255, 255, 0.87);
  background-color: #181818;
  text-decoration: none;
  font-size: 24px;
  transition: 0.3s;
}

.link:hover {
  opacity: 0.8;
}

.logo {
  max-height: 48px;
  height: 100%;
  background-color: #181818;
}
</style>
