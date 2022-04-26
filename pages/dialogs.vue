<template>
  <div class="dialog-page">
    <h1 class="">Dialogs</h1>
    <p>
      The <code>e-dialog</code> component inform users about a specific task and
      may contain critical information, require decisions, or involve multiple
      tasks. Use dialogs sparingly because they are interruptive.
    </p>
    <e-row>
      <dialog-usage />
      <e-col col="24">
        <h2>Props</h2>
      </e-col>
      <dialog-api />
    </e-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',

  data: () => ({
    dialog1: false,
    fullscreen: false,
    persistant: false,
    maxWidth: 400,
  }),
  mounted() {},
})
</script>

<style lang="scss"></style>
