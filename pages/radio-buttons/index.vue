<template>
  <div class="e-card pa-4">
    <h1 class="v-heading text-h3 text-sm-h3 mb-4">Radio buttons</h1>
    <p>
      The e-radio component is a simple radio button. When combined with the
      v-radio-group component you can provide groupable functionality to allow
      users to select from a predefined set of options.
    </p>
    <radio-buttons-usage />
    <radio-buttons-colors />
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
