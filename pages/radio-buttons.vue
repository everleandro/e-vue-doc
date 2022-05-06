<template>
  <div>
    <h1 class="">Radio buttons</h1>
    <p>
      The e-radio component is a simple radio button. When combined with the
      e-radio-group component you can provide groupable functionality to allow
      users to select from a predefined set of options.
    </p>
    <e-row>
      <e-col col="24">
        <h3>Local use</h3>
        <!-- prettier-ignore -->
        <div v-prism="{ class: 'language-javascript' }">import { ERadioGroup, ERadio } from '@ever.leandros91/e-vue'</div>
      </e-col>
      <radio-buttons-usage />
      <radio-buttons-colors />
      <radio-buttons-direction />
      <radio-buttons-api-group />
      <radio-buttons-api-radio />
    </e-row>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
})
</script>

<style scoped></style>
