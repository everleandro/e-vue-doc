<template>
  <div class="button-page">
    <h1 class="">Text field</h1>
    <p>
      The <code> e-text-field </code> component is used for collecting user
      provided information.
    </p>
    <e-row>
      <e-col col="24">
        <h3>Local use</h3>
        <!-- prettier-ignore -->
        <div v-prism="{ class: 'language-javascript' }">import { ETextField } from '@ever.leandros91/e-vue'</div>
      </e-col>
      <text-field-usage />
      <e-col col="24">
        <h2>Props</h2>
      </e-col>
      <text-field-api />
      <e-col col="24">
        <h2>SASS Variables</h2>
      </e-col>
      <text-field-sass />
    </e-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({}),
})
</script>

<style lang="scss">
.button-page {
}
</style>
