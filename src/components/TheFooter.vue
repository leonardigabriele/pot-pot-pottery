<template>
  <footer class="footer">
    <prismic-rich-text :field="footer.title" />
    <div class="footer__links">
      <prismic-link :field="footer.instagram">Instagram</prismic-link>
      <prismic-link :field="footer.facebook">Facebook</prismic-link>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    footer: Object,
  },
};
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  padding: $gap;
  margin-top: $gap;

  &__links {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: $gap;
  }
}
</style>
