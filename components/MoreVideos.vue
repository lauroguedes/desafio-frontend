<template>
  <div class="more-videos card-style">
    <a-row>
      <a-col>
        <h2>6 Vídeos mais Populares</h2>
      </a-col>
    </a-row>
    <a-row type="flex" :gutter="[16, 32]">
      <a-col :span="24">
        <a-list :grid="{ gutter: 16, md: 3 }" :data-source="videos">
          <a-list-item slot="renderItem" slot-scope="item, index">
            <a-card :key="index" style="max-width: 100%">
              <img
                slot="cover"
                alt="example"
                :src="item.snippet.thumbnails.medium.url"
              />
              <a-card-meta>
                <template slot="title">
                  <nuxt-link :to="`/videos/${item.id}`" class="link">{{
                    item.snippet.title
                  }}</nuxt-link>
                </template>
                <template slot="description">
                  <div>
                    <a
                      target="_blank"
                      :title="item.snippet.channelTitle"
                      :href="
                        `https://youtube.com/channel/${item.snippet.channelId}`
                      "
                      >{{ truncate(item.snippet.channelTitle, 30) }}</a
                    >
                  </div>
                  <div>
                    <a-icon type="eye" /> {{ item.statistics.viewCount }}
                  </div>
                </template>
              </a-card-meta>
            </a-card>
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>
  </div>
</template>

<script>
const url = process.env.urlApi + 'videos'
const apiKey = process.env.apiKey

export default {
  data() {
    return {
      videos: []
    }
  },
  mounted() {
    this.getVideos()
  },
  methods: {
    async getVideos() {
      try {
        const videos = await this.$axios.$get(url, {
          params: {
            part: 'statistics,snippet',
            chart: 'mostPopular',
            maxResults: 6,
            key: apiKey
          }
        })
        this.videos = videos.items
      } catch (err) {
        this.$message.error(err.response.data.error.message)
      }
    },
    truncate(str, num) {
      if (str.length <= num) {
        return str
      }
      return str.slice(0, num) + '...'
    }
  }
}
</script>
