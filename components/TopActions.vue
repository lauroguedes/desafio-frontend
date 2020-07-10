<template>
  <div class="top-actions-content">
    <a-row>
      <a-col :span="4">
        <a-dropdown>
          <a-menu slot="overlay">
            <a-menu-item key="1"> <a-icon type="user" />Nome </a-menu-item>
            <a-menu-item key="2"> <a-icon type="user" />Status </a-menu-item>
            <a-menu-item key="3"> <a-icon type="user" />Telefone</a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px">
            <a-icon type="filter" /> Filtrar <a-icon type="down" />
          </a-button>
        </a-dropdown>
      </a-col>
      <a-col :span="6">
        <a-input-search placeholder="Buscar por nome..." style="width: 200px" />
      </a-col>
      <a-col :span="14" class="text-right">
        <a-button
          type="primary"
          icon="plus"
          class="btn-secondary-color"
          @click="() => $router.push(linkAdd)"
        >
          ADICIONAR
        </a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  props: {
    linkAdd: {
      type: String,
      require: true,
      default: '/'
    }
  }
}
</script>

<style lang="scss" scoped></style>
