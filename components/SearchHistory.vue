<template>
  <div class="search-history card-style">
    <h2>Histórico de Busca</h2>
    <a-list
      item-layout="horizontal"
      :pagination="pagination"
      :data-source="list"
    >
      <a-list-item slot="renderItem" slot-scope="item, index" :row-key="index">
        <a-list-item-meta>
          <nuxt-link slot="title" :to="`/videos/${item.id}`" class="link">{{
            item.title
          }}</nuxt-link>
          <div slot="description">
            {{ item.channelTitle }} |
            <div>
              <span> <a-icon type="eye" /> {{ item.views }} </span>
              |
              <span
                ><a-icon type="calendar" />
                {{
                  $moment(item.publishedAt).format('DD/MM/YYYY H:mm:ss')
                }}</span
              >
            </div>
          </div>
          <a-avatar slot="avatar" :src="item.cover" />
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      pagination: {
        pageSize: 3
      }
    }
  },
  computed: mapState('history', ['list'])
}
</script>
<style lang="scss">
.search-history {
  h2 {
    font-size: 1rem;
  }
}
</style>
