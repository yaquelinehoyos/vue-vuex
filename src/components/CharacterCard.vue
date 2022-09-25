<template>
  <div class="character-card">
    <img class="character-card__img" :src="character.image" />
    <div class="character-card__info">
      <h2 class="character-name">{{ character.name }}</h2>
      <section class="character-section">
        <span class="subtitle">Species:</span>
        <span class="value">{{ character.species }}</span>
      </section>
      <section class="character-section">
        <span class="subtitle">Type:</span>
        <span class="value">{{ character.type }}</span>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharacterCard",
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.character-card {
  display: flex;
  flex-direction: row;
  border-radius: 15px;
  background-color: rgb(60, 62, 68);
  width: 550px;
  height: 220px;
  margin: 20px 0px;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
    rgb(0 0 0 / 6%) 0px 2px 4px -1px;
}

.character-card__img {
  display: block;
  border-radius: 15px 0px 0px 15px;
}

.character-card__info {
  padding: 20px 30px;
  text-align: left;
}

.character-name {
  color: #f5f5f5;
  font-weight: bold;
}

h2 {
  margin-top: 0px;
}

.character-section {
  padding: 10px 0px;
}

.subtitle {
  color: rgb(158, 158, 158);
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
}

.value {
  color: rgb(245, 245, 245);
}
</style>
