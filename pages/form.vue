<template>
  <div id="form-page">
    <h1 class="mb-4">Forms</h1>
    <p>
      The internal <code>e-form</code> component makes it easy to add validation
      to form inputs. All input components have a rules prop which accepts a
      mixed array of types function. These allow you to specify conditions in
      which the input is valid or invalid. Whenever the value of an input is
      changed, each function in the array will receive the new value and each
      array element will be evaluated. If a function or array element returns
      false or a string, validation has failed and the string value will be
      presented as an error message.
    </p>
    <e-row>
      <e-col col="24">
        <h3>Local use</h3>
        <!-- prettier-ignore -->
        <div v-prism="{ class: 'language-javascript' }">import { EForm } from '@ever.leandros91/e-vue'</div>
      </e-col>
      <forms-usage />
      <forms-internal-methods />
      <forms-lazy />
      <e-col col="24">
        <h2>Props</h2>
      </e-col>
      <forms-api />
      <e-col col="24">
        <h2>Functions</h2>
      </e-col>
      <forms-functions />
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
