<template>
  <div class="search-content">
    <a-input-search
      placeholder="Pesquisar..."
      size="large"
      @search="onSearch"
    />
  </div>
</template>

<script>
export default {
  methods: {
    onSearch(value) {
      this.$router.push({
        path: '/search/' + value
      })
    }
  }
}
</script>
