<template>
  <div class="video-detail-page">
    <a-row :gutter="[16, 32]">
      <a-col :span="24">
        <h1>Detalhes do Video</h1>
      </a-col>
    </a-row>
    <a-row :gutter="[16, 32]" class="card-style">
      <a-col :span="14">
        <div class="iframe-container">
          <iframe
            :src="`https://youtube.com/embed/${id}`"
            allowfullscreen
          ></iframe>
        </div>
      </a-col>
      <a-col :span="10">
        <a-row :gutter="[16, 32]">
          <a-col :span="12">
            <a-statistic
              title="Likes"
              :value="video.statistics.likeCount"
              style="margin-right: 50px"
            >
              <template #suffix>
                <a-icon type="like" theme="twoTone" two-tone-color="#52c41a" />
              </template>
            </a-statistic>
          </a-col>
          <a-col :span="12">
            <a-statistic
              title="Dislikes"
              :value="video.statistics.dislikeCount"
            >
              <template #suffix>
                <a-icon
                  type="dislike"
                  theme="twoTone"
                  two-tone-color="#eb2f96"
                />
              </template>
            </a-statistic>
          </a-col>
        </a-row>
        <a-row :gutter="[16, 32]">
          <a-col :span="12">
            <a-statistic
              title="Comentários"
              :value="video.statistics.commentCount"
              style="margin-right: 50px"
            >
              <template #suffix>
                <a-icon type="edit" theme="twoTone" />
              </template>
            </a-statistic>
          </a-col>
          <a-col :span="12">
            <a-statistic
              title="Favoritos"
              :value="video.statistics.favoriteCount"
            >
              <template #suffix>
                <a-icon type="star" theme="twoTone" two-tone-color="#f1c40f" />
              </template>
            </a-statistic>
          </a-col>
        </a-row>
        <a-row :gutter="[16, 32]">
          <a-col :span="24">
            <a-statistic
              title="Visualizações"
              :value="video.statistics.viewCount"
            >
              <template #suffix>
                <a-icon type="eye" theme="twoTone" two-tone-color="#c0392b" />
              </template>
            </a-statistic>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
    <a-row :gutter="[16, 64]">
      <a-col :span="24">
        <h2>Descrição</h2>
        <p>{{ video.snippet.description }}</p>
      </a-col>
    </a-row>
  </div>
</template>

<script>
const url = process.env.urlApi + 'videos'
const apiKey = process.env.apiKey

export default {
  watchQuery: true,
  async asyncData({ params, $axios }) {
    const results = await $axios.$get(url, {
      params: {
        part: 'statistics,snippet',
        id: params.id,
        key: apiKey
      }
    })
    return { video: results.items[0], id: params.id }
  },
  data() {
    return {
      video: {},
      id: ''
    }
  }
}
</script>

<style lang="scss">
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%; // 16:9 aspect ratio
  position: relative;
  iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
}
</style>
