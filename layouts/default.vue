<template>
  <e-app>
    <e-drawer v-model="val" nav>
      <div class="d-flex justify-space-between align-center">
        <logo />
        <span class="pa-4 e-label">v0.1.65</span>
      </div>
      <e-list>
        <e-list-item to="/" exact>Getting started</e-list-item>
        <e-list-item to="/buttons">Butons</e-list-item>
        <e-list-item to="/checkbox">Checkboxes</e-list-item>
        <e-list-item to="/radio-buttons">Radio buttons</e-list-item>
        <e-list-item to="/text-field">Text field</e-list-item>
        <e-list-item to="/slider">Slider</e-list-item>
        <e-list-item to="/form">Forms</e-list-item>
        <e-list-item to="/dialogs">Dialogs</e-list-item>
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
  data: () => ({
    val: true,
    val2: false,
  }),
  mounted() {},
})
</script>
<style lang="scss">
.e-app {
  .e-drawer {
    position: fixed !important;
  }
  .flex-grow-1 {
    flex-grow: 1;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .e-main__wrapper {
    overflow: auto;
  }
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    background: rgba(1, 60, 60, 0.05);
  }
  .e-bar.e-bar--depressed {
    box-shadow: none;
  }

  .e-divider {
    display: block;
    flex: 1 1 0;
    max-width: 100%;
    height: 0;
    max-height: 0;
    border-width: thin 0 0 0;
    transition: inherit;
    border-color: rgba(0, 0, 0, 0.12);
    &--vertical {
      align-self: stretch;
      border-width: 0 thin 0 0;
      display: inline-flex;
      height: inherit;
      min-height: 100%;
      max-height: 100%;
      max-width: 0;
      width: 0;
      vertical-align: text-bottom;
      margin: 0 -1px;
      &.e-divider--inset {
        margin-top: 12px;
        margin-bottom: 12px;
      }
    }
  }
}
</style>
