<template>
  <div class="profile-content">
    <a-row type="flex" justify="space-around" align="middle" :gutter="48">
      <a-col :span="collapsed ? 24 : 6">
        <a-avatar
          class="avatar-border"
          :size="48"
          src="https://thispersondoesnotexist.com/image"
        />
      </a-col>
      <a-col v-show="!collapsed" :span="18">
        <div class="name">Lauro Guedes</div>
        <a href="#" class="logout-link"><a-icon type="poweroff" /> Sair</a>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  props: {
    collapsed: Boolean
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.profile-content {
  padding: 0.8rem;
  .name {
    color: #000;
  }
  .logout-link {
    color: #e0e0e0;
    display: block;
    &:hover {
      color: darken($color: #e0e0e0, $amount: 15%);
    }
  }
}
</style>
