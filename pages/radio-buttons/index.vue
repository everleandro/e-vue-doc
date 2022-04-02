<template>
  <div class="e-card pa-4">
    <h1 class="v-heading text-h3 text-sm-h3 mb-4">Radio buttons</h1>
    <p>
      The e-radio component is a simple radio button. When combined with the
      v-radio-group component you can provide groupable functionality to allow
      users to select from a predefined set of options.
    </p>
    <h2 class="v-heading text-h2 text-sm-h3 mb-4">Usage</h2>
    <p>
      Although v-radio can be used on its own, it is best used in conjunction
      with v-radio-group. Using the v-model on the v-radio-group you can access
      the value of the selected radio button inside the group.
    </p>
    <radio-buttons-usage />
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
