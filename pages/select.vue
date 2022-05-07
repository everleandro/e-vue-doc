<template>
  <div>
    <h1 class="">Selects</h1>
    <p>
      Select fields components are used for collecting user provided information
      from a list of options.
    </p>
    <e-row>
      <e-col col="24">
        <h3>Local use</h3>
        <!-- prettier-ignore -->
        <div v-prism="{ class: 'language-javascript' }">import { ESelect } from '@ever.leandros91/e-vue'</div>
      </e-col>
      <selects-usage />
      <selects-disabled />
      <selects-readonly />
      <selects-api />
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
