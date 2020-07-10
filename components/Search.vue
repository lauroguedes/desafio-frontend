<template>
  <div class="search-content">
    <a-input-search
      placeholder="Pesquisar..."
      @search="onSearch"
      size="large"
    />
  </div>
</template>

<script>
export default {
  methods: {
    onSearch(value) {
      console.log(value)
    }
  }
}
</script>
