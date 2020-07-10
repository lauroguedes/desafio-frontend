<template>
  <div class="data-table-content card-style">
    <a-table
      :columns="columns"
      :data-source="data"
      :row-selection="rowSelection"
    >
      <span slot="status" class="label-light">Cliente</span>
      <div slot="action" class="text-right">
        <a-dropdown :trigger="['click']">
          <a
            class="ant-dropdown-link text-right"
            @click="(e) => e.preventDefault()"
          >
            <a-icon type="more" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              <a href="javascript:;"><a-icon type="plus" /> Detalhar</a>
            </a-menu-item>
            <a-menu-item key="1">
              <a href="javascript:;"><a-icon type="delete" /> Excluir</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </a-table>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      rowSelection: {}
    }
  }
}
</script>

<style lang="scss">
.data-table-content {
  margin-top: 2rem;
}
</style>
