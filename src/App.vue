<template>
  <div id="app">
    <h1 class="app-title">Rick and Morty vue-vuex</h1>
    <div class="characters">
      <CharacterCard
        v-for="character in characters"
        :key="character.id"
        :character="character"
        class="characters__item"
      />
    </div>
  </div>
</template>

<script>
import CharacterCard from "./components/CharacterCard.vue";

export default {
  name: "App",
  components: {
    CharacterCard,
  },
  data() {
    return {
      characters: [],
    };
  },
  async created() {
    await this.$store.dispatch("fetchCharacters");
    this.characters = this.$store.getters["getCharacters"];
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: rgb(32, 35, 41);
  min-height: 100vh;
  height: 100%;
  padding: 50px 30px;
}

.app-title {
  text-align: center;
  color: #f5f5f5;
}

.characters {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.characters__item {
  justify-self: center;
}

@media (max-width: 1800px) {
  .characters {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 1200px) {
  .characters {
    grid-template-columns: 1fr;
  }
}
</style>
