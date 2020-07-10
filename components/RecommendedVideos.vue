<template>
  <div class="recommended-videos card-style">
    <a-row>
      <a-col>
        <h2>Vídeos Recomendados</h2>
      </a-col>
    </a-row>
    <a-row type="flex" :gutter="[16, 32]">
      <a-col v-for="video in videos" :key="video.id" :span="8">
        <a-card>
          <img slot="cover" alt="example" :src="video.cover" />
          <!-- <template slot="actions" class="ant-card-actions">
            <a-icon key="setting" type="setting" />
            <a-icon key="edit" type="edit" />
            <a-icon key="ellipsis" type="ellipsis" />
          </template>-->
          <a-card-meta>
            <template slot="title">
              <a :href="video.url" target="_blank">{{ video.title }}</a>
            </template>
            <template slot="description">
              <div>
                <a :href="video.canal.url">{{ video.canal.name }}</a>
              </div>
              <div>{{ video.info }}</div>
            </template>
            <a-avatar slot="avatar" :src="video.canal.avatar" />
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          id: 1,
          url: 'https://www.youtube.com/watch?v=A3vzjX8I6Kw',
          cover: 'http://i.ytimg.com/vi/A3vzjX8I6Kw/maxresdefault.jpg',
          title: 'Por Que Não Gravam Vídeos Na Caixa Preta? EP. 652',
          canal: {
            name: 'Aviões e Música',
            avatar:
              'https://yt3.ggpht.com/a/AATXAJyW22c0_UznqaZ_w1IyPFqbE-6r_HQ90gDBjuToCw=s176-c-k-c0x00ffffff-no-rj-mo',
            url: 'https://www.youtube.com/c/avioesemusicas'
          },
          info: '127 mil visualizações - há 1 dia'
        },
        {
          id: 2,
          url: 'https://www.youtube.com/watch?v=WJwiBpX1QNQ',
          cover: 'http://i.ytimg.com/vi/WJwiBpX1QNQ/maxresdefault.jpg',
          title: 'A Revolução do Raio X',
          canal: {
            name: 'Ciência todo Dia',
            avatar:
              'https://yt3.ggpht.com/a/AATXAJz9L6pN59vveMCMaDGZT5ngUWiH1cPnhWg2Czv2JQ=s176-c-k-c0x00ffffff-no-rj-mo',
            url: 'https://www.youtube.com/c/CienciaTodoDia'
          },
          info: '81 mil visualizações - há 2 dias'
        },
        {
          id: 3,
          url: 'https://www.youtube.com/watch?v=AT_8gwcFj0o',
          cover: 'http://i.ytimg.com/vi/Hw9_A-l2vaY/maxresdefault.jpg',
          title: 'O Maníaco do Parque | Nerdologia Criminosos',
          canal: {
            name: 'Nerdologia',
            avatar:
              'https://yt3.ggpht.com/a/AATXAJz4RU8GAAUihZpwRtfWg1M_2I1LNPPuT97cLyV7Ow=s176-c-k-c0x00ffffff-no-rj-mo',
            url: 'https://www.youtube.com/c/nerdologia'
          },
          info: '165 mil visualizações - há 2 dias'
        }
      ]
    }
  }
}
</script>

<style></style>
