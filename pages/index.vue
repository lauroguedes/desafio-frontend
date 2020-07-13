<template>
  <div class="index-content">
    <a-row :gutter="[0, 32]">
      <a-col :span="24">
        <all-videos />
      </a-col>
    </a-row>
    <a-row :gutter="16">
      <a-col :span="16">
        <more-videos />
      </a-col>
      <a-col :span="8">
        <search-history />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import AllVideos from '../components/AllVideos'
import MoreVideos from '../components/MoreVideos'
import SearchHistory from '../components/SearchHistory'
export default {
  components: {
    'all-videos': AllVideos,
    'more-videos': MoreVideos,
    'search-history': SearchHistory
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
