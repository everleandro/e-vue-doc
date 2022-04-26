<template>
  <div class="pa-4">
    <h1>Radio buttons</h1>
    <p>
      The e-radio component is a simple radio button. When combined with the
      v-radio-group component you can provide groupable functionality to allow
      users to select from a predefined set of options.
    </p>
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
