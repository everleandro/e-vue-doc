<template>
  <div class="pa-4">
    <h1>Radio buttons</h1>
    <p>
      The e-radio component is a simple radio button. When combined with the
      e-radio-group component you can provide groupable functionality to allow
      users to select from a predefined set of options.
    </p>
    <div>
      <h3>Local use</h3>
      <!-- prettier-ignore -->
      <div v-prism="{ class: 'language-javascript' }">import { ERadioGroup, ERadio } from '@ever.leandros91/e-vue'</div>
    </div>
    <radio-buttons-usage />
    <radio-buttons-colors />
    <radio-buttons-direction />
    <radio-buttons-api-group />
    <radio-buttons-api-radio />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
  data: () => ({
    radioGroup: 1,
  }),
})
</script>

<style scoped></style>
