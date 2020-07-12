<template>
  <div class="search-page-content">
    <a-row>
      <a-col>
        <h1>Resultado da Pesquisa</h1>
      </a-col>
    </a-row>
    <a-row>
      <a-col> Pesquisa: {{ query }} </a-col>
    </a-row>
    <div class="search-result card-style">
      <a-row type="flex" :gutter="[16, 32]">
        <a-col v-for="video in videos.items" :key="video.etag" :span="8">
          <a-card>
            <img
              slot="cover"
              alt="example"
              :src="video.snippet.thumbnails.high.url"
            />
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
  </div>
</template>

<script>
const url = process.env.urlApi + 'search'
const apiKey = process.env.apiKey

export default {
  watchQuery: true,
  async asyncData({ params, $axios }) {
    const results = await $axios.$get(url, {
      params: {
        part: 'snippet',
        key: apiKey,
        type: 'video',
        q: params.query,
        maxResults: 10,
        order: 'viewCount'
      }
    })
    return { videos: results, query: params.query }
  },
  data() {
    return {
      videos: [],
      query: ''
    }
  }
}
</script>
