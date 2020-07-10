<template>
  <div class="avaliations-last-content card-style">
    <a-row>
      <a-col :span="12">
        <h2>Últimas Avaliações</h2>
      </a-col>
      <a-col :span="12" class="text-right">
        <a-dropdown :trigger="['click']">
          <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
            Hoje <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item key="0">
              Ontem
            </a-menu-item>
            <a-menu-item key="1">
              Últimos 7 dias
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="3">
              Últimos 30 dias
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-col>
    </a-row>
    <div class="header-data">
      <a-row>
        <a-col :span="8">
          Dados do Veículo
        </a-col>
        <a-col :span="8" class="text-center">
          Valor
        </a-col>
        <a-col :span="8" class="text-center">
          Status
        </a-col>
      </a-row>
    </div>
    <a-list item-layout="horizontal" :data-source="data" :loading="load">
      <a-list-item slot="renderItem" slot-scope="item, index" :row-key="index">
        <a-list-item-meta>
          <div slot="title">
            <a-row>
              <a-col :span="8">
                <h4>{{ item.brand_name }} {{ item.model_name }}</h4>
                <div class="info-car text-light-style uppercase">
                  <div>{{ item.name }}</div>
                  <div>{{ item.model_year }} - {{ item.fuel_type }}</div>
                  <div>{{ item.transmission_type }}</div>
                  <div>{{ formatMileage(item.mileage) }}</div>
                </div>
              </a-col>
              <a-col :span="8">
                <div class="text-light-style uppercase">Anúncio</div>
                <div>{{ formatCurrency(item.ad_selling_price) }}</div>
                <div class="text-light-style uppercase">Mínimo Aceito</div>
                <div>{{ formatCurrency(item.ad_selling_price) }}</div>
              </a-col>
              <a-col :span="8">
                <div class="label-light">Aguardando precificação</div>
                <div class="text-light-style text-center">
                  18/04/2019 às 14:35
                </div>
              </a-col>
            </a-row>
          </div>
          <a-avatar slot="avatar" :src="item.image" shape="square" :size="80" />
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      load: false
    }
  },
  mounted() {
    this.fetchCarsList()
  },
  methods: {
    async fetchCarsList() {
      this.load = true
      const cars = await this.$axios.$get(
        'https://www.mocky.io/v2/5eb553df31000060006994a8'
      )
      this.data = cars
      this.load = false
    },
    formatCurrency(value) {
      const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      })
      return formatter.format(value)
    },
    formatMileage(value) {
      return `${value.toLocaleString('pt-BR', {
        maximumSignificantDigits: 3
      })} Km`
    }
  }
}
</script>

<style lang="scss" scoped>
.avaliations-last-content {
  h2 {
    font-size: 1rem;
  }
  .header-data {
    border-bottom: 1px solid darken($color: #f3f4f6, $amount: 5%);
    padding-bottom: 1rem;
    margin-bottom: 0.8rem;
  }
}
</style>
