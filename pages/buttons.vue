<template>
  <div class="button-page">
    <h1 class="">Buttons</h1>
    <p>
      The <code>e-btn</code> component replaces the standard html button with a
      material design theme and a multitude of options. Any color helper class
      can be used to alter the background or text color.
    </p>
    <e-row>
      <e-col col="24">
        <h3>Local use</h3>
        <!-- prettier-ignore -->
        <div v-prism="{ class: 'language-javascript' }">import { EButton } from '@ever.leandros91/e-vue'</div>
      </e-col>
      <button-usage />
      <button-basic />
      <button-colors />
      <button-fab-size />
      <e-col col="24">
        <h2>Props</h2>
      </e-col>
      <button-api />
      <e-col col="24">
        <h2>SASS Variables</h2>
      </e-col>
      <button-sass />
    </e-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
  data: () => ({}),
})
</script>

<style lang="scss">
.button-page {
}
</style>
