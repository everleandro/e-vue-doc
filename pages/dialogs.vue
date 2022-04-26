<template>
  <div class="dialog-page">
    <h1 class="">Dialogs</h1>
    <p>
      The <code>e-dialog</code> component inform users about a specific task and
      may contain critical information, require decisions, or involve multiple
      tasks. Use dialogs sparingly because they are interruptive.
    </p>
    <e-row>
      <e-col col="24">
        <h3>Local use</h3>
        <!-- prettier-ignore -->
        <div v-prism="{ class: 'language-javascript' }">import { EDialog } from '@ever.leandros91/e-vue'</div>
      </e-col>
      <dialog-usage />
      <e-col col="24">
        <h2>Props</h2>
      </e-col>
      <dialog-api />
      <e-col col="24">
        <h2>SASS Variables</h2>
      </e-col>
      <dialog-sass />
    </e-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',

  data: () => ({}),
  mounted() {},
})
</script>

<style lang="scss"></style>
