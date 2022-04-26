<template>
  <div class="checkbox-page">
    <h1>Checkbox</h1>
    <p>
      The <code>e-checkbox</code> component provides users the ability to choose
      between two distinct values.
    </p>
    <e-row>
      <e-col col="24">
        <h3>Local use</h3>
        <!-- prettier-ignore -->
        <div v-prism="{ class: 'language-javascript' }">import { ECheckbox } from '@ever.leandros91/e-vue'</div>
      </e-col>
      <checkbox-usage />
      <checkbox-colors />
      <checkbox-states />
      <e-col col="24">
        <h2>Props</h2>
      </e-col>
      <checkbox-api />
    </e-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',

  data: () => ({
    state: 'normal',
    falseValue: 'false',
    model: false,
    selectedColor: 'primary',
    trueValue: 'true',
    label: 'label',
    colors: ['primary', 'secondary', 'warning', 'success'],
  }),
  mounted() {},
  methods: {
    test(evt: any): void {
      console.log(evt)
    },
  },
})
</script>

<style lang="scss">
label {
  white-space: nowrap;
}
.e-field__slot,
.e-text-field__slot {
  max-width: 100%;
}
</style>
