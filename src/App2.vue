<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import ListCharacters from '@/components/ListCharacters.vue'
import FilterByStatus from '@/components/FilterByStatus.vue';
import FilterByName from './components/FilterByName.vue';
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <HelloWorld msg="Rick and Morty!" />
    </div>
  </header>
  <main>
    <FilterByStatus/>
    <FilterByName />
    <ListCharacters />
  </main>
</template>

<style lang="scss">
@import './assets/base.css';
:root{
  --background-body: #24282F;
  --background-card: #3C3E44;
  --text-white: #FFFFFF;
  --text-gray: #c0c0c0;
  --text-orange: #FF9800;
  --text-green: #4CAF50;
  --text-red: #F44336;
}
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    // display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 3fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
