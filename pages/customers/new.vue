<template>
  <div class="customers-new-content">
    <h1>Adicionar Cliente</h1>
    <div class="form card-style">
      <a-tabs default-active-key="1" @change="callback">
        <a-tab-pane key="1" tab="Dados do Cliente">
          <a-form-model
            :model="form"
            :label-col="labelCol"
            :wrapper-col="wrapperCol"
          >
            <a-form-model-item>
              <a-input v-model="form.firstName" placeholder="Nome" />
              <a-input v-model="form.lastName" placeholder="Sobrenome" />
            </a-form-model-item>
            <a-form-model-item :wrapper-col="{ span: 14 }">
              <a-button type="primary" @click="onSubmit">
                Salvar
              </a-button>
              <a-button style="margin-left: 10px;">
                Cancelar
              </a-button>
            </a-form-model-item>
          </a-form-model>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Dados do Veículo" force-render>
          Content of Tab Pane 2
        </a-tab-pane>
        <a-tab-pane key="3" tab="Intenção de Compra">
          Content of Tab Pane 3
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        firstName: '',
        lastName: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
