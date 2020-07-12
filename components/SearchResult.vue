<template>
  <div class="search-result card-style">
    <a-row type="flex" :gutter="[16, 32]">
      <a-col v-for="video in videos.items" :key="video.etag" :span="8">
        <a-card>
          <img
            slot="cover"
            alt="example"
            :src="video.snippet.thumbnails.high.url"
          />
          <!-- <template slot="actions" class="ant-card-actions">
            <a-icon key="setting" type="setting" />
            <a-icon key="edit" type="edit" />
            <a-icon key="ellipsis" type="ellipsis" />
          </template>-->
          <a-card-meta>
            <template slot="title">
              <a
                :href="`https://www.youtube.com/watch?v=${video.id.videoId}`"
                target="_blank"
                >{{ video.snippet.title }}</a
              >
            </template>
            <template slot="description">
              <div>
                <a
                  :href="
                    `https://www.youtube.com/channel/${video.snippet.channelId}`
                  "
                  >{{ video.snippet.channelTitle }}</a
                >
              </div>
              <div>{{ video.snippet.publishTime }}</div>
            </template>
            <a-avatar
              slot="avatar"
              :src="video.snippet.thumbnails.default.url"
            />
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
const url = process.env.urlApi + 'search'
const apiKey = process.env.apiKey

export default {
  data() {
    return {
      load: false,
      videos: []
    }
  },
  methods: {
    async getResults(query) {
      this.load = true
      console.log(query)
      const result = await this.$axios.$get(url, {
        params: {
          part: 'snippet',
          key: apiKey,
          type: 'video',
          q: query,
          maxResults: 10,
          order: 'viewCount'
        }
      })
      this.videos = result
      this.load = false
    }
  }
}
</script>
