<template>
  <div class="button-page">
    <h1 class="v-heading text-h3 text-sm-h3 mb-4">Slider</h1>
    <p>
      The <code>e-slider</code> component is a better visualization of the
      number input. It is used for gathering numerical user data.
    </p>
    <e-row>
      <e-col col="24">
        <h3>Local use</h3>
        <!-- prettier-ignore -->
        <div v-prism="{ class: 'language-javascript' }">import { ESlider } from '@ever.leandros91/e-vue'</div>
      </e-col>
      <slider-usage />
      <slider-states />
      <slider-color />
      <slider-api />
    </e-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',

  data: () => ({
    disabled: false,
    selectedColor: 'info',
    value: 10,
    colors: ['primary', 'secondary', 'info', 'warning', 'success', 'error'],
    thumbLabel: true,
    decimal: true,
  }),
  mounted() {},
})
</script>

<style lang="scss">
.button-page {
}
</style>
