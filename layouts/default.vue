<template>
  <a-layout id="body-layout">
    <side-nav :collapsed="collapsed" />
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-row>
          <a-col :span="1">
            <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="() => (collapsed = !collapsed)"
            />
          </a-col>
          <a-col :span="4">
            <logo />
          </a-col>
          <a-col :span="19" style="padding-right: 1rem">
            <search />
          </a-col>
          <!--           <a-col :span="4">
            <ul class="actions text-right">
              <li>
                <a-button type="primary" class="btn-primary-color" icon="upload"
                  >Upload</a-button
                >
              </li>
            </ul>
          </a-col> -->
        </a-row>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '1.5rem 1rem',
          padding: '1rem',
          flex: 1
        }"
      >
        <nuxt />
      </a-layout-content>
      <a-layout-footer style="textAlign: right">
        <a-row>
          <a-col :span="12">
            <p class="text-left">2020 @ Youtube Clone</p>
          </a-col>
          <a-col :span="12">
            <p>Versão 1.0.0</p>
          </a-col>
        </a-row>
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import SideNav from '../components/SideNav'
import Logo from '../components/Logo'
import Search from '../components/Search'
export default {
  components: {
    'side-nav': SideNav,
    logo: Logo,
    search: Search
  },
  data() {
    return {
      collapsed: true
    }
  }
}
</script>

<style lang="scss" scoped>
.actions {
  list-style: none;
  margin: 0 2rem;
  li {
    display: inline-block;
    margin-left: 1.5rem;
  }
}
</style>
