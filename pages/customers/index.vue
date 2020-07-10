<template>
  <div class="index-content">
    <top-actions link-add="customers/new" />
    <data-table :data="data" :columns="columns" />
  </div>
</template>

<script>
import TopActions from '../../components/TopActions'
import DataTable from '../../components/DataTable'
export default {
  components: {
    'top-actions': TopActions,
    'data-table': DataTable
  },
  async asyncData({ $axios }) {
    const { results } = await $axios.$get(
      'https://randomuser.me/api/?results=12'
    )
    return { data: results }
  },
  data() {
    return {
      columns: [
        {
          title: 'Nome',
          dataIndex: 'name.first',
          key: 'name'
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          width: 80,
          scopedSlots: { customRender: 'status' }
        },
        {
          title: 'Telefone',
          dataIndex: 'phone',
          key: 'phone'
        },
        {
          title: 'E-mail',
          dataIndex: 'email',
          key: 'email'
        },
        {
          title: '',
          dataIndex: 'actions',
          key: 'actions',
          scopedSlots: { customRender: 'action' }
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.index-content {
}
</style>
