<template>
  <a-layout-sider v-model="collapsed" theme="light" :trigger="null" collapsible>
    <a-menu theme="light" mode="inline" :default-selected-keys="['1']">
      <a-menu-item key="1" @click="() => $router.push('/')">
        <a-icon type="home" theme="filled" />
        <span>Início</span>
      </a-menu-item>
      <a-menu-item key="2" @click="() => $router.push('search')">
        <a-icon type="youtube" />
        <span>Pesquisar</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
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
