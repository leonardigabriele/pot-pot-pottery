<template>
  <header class="header">
    <prismic-image class="header__image" :field="header.image" />
    <div class="header__text">
      <prismic-rich-text class="header__text__title" :field="header.title" />
      <prismic-rich-text :field="header.description" />
    </div>
  </header>
</template>

<script>
export default {
  props: {
    header: Object,
  },
};
</script>

<style lang="scss">
.header {
  display: grid;

  &__image {
    object-fit: cover;
    height: 75vh;
  }

  &__text {
    display: grid;
    row-gap: 10rem;
    height: 25vh;
    text-align: center;

    &__title {
      font-size: 50rem;
      align-self: end;
    }
  }
}
</style>
