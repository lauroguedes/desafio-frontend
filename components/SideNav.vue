<template>
  <a-layout-sider v-model="collapsed" theme="light" :trigger="null" collapsible>
    <profile :collapsed="collapsed" />
    <a-menu theme="light" mode="inline" :default-selected-keys="['1']">
      <a-menu-item key="1" @click="() => $router.push('/')">
        <a-icon type="home" theme="filled" />
        <span>Início</span>
      </a-menu-item>
      <a-menu-item key="2" @click="() => $router.push('customers')">
        <a-icon type="youtube" />
        <span>Vídeos</span>
      </a-menu-item>
      <a-menu-item key="3">
        <a-icon type="video-camera" theme="filled" />
        <span>Canais</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import Profile from './Profile'
export default {
  components: {
    profile: Profile
  },
  props: {
    collapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped></style>
