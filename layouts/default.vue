<template>
  <e-app>
    <e-drawer v-model="val" nav>
      <logo /><e-list>
        <e-list-item to="/" exact>Getting started</e-list-item>
        <e-list-item to="/buttons">Butons</e-list-item>
        <e-list-item to="/dialogs">Dialogs</e-list-item>
        <e-list-item to="/checkbox">Checkbox</e-list-item>
        <e-list-item to="/slider">Slider</e-list-item>
        <e-list-item to="/radio-buttons">Radio buttons</e-list-item>
      </e-list>
    </e-drawer>

    <e-bar app fixed>
      <e-button icon color="primary" @click="val = !val">
        <e-icon
          :path="['M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z']"
          x-large
        ></e-icon>
      </e-button>
    </e-bar>
    <e-main>
      <e-container>
        <Nuxt />
      </e-container>
    </e-main>
  </e-app>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
  mounted() {},
  data: () => ({
    val: true,
    val2: false,
  }),
})
</script>
<style lang="scss">
.e-app {
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    background: rgba(1, 60, 60, 0.05);
    border: thin solid rgba(0, 0, 0, 0.12);
  }
  .code-box-image {
    background-color: rgb(40, 44, 53);
  }
}
</style>
