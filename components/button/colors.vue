<template>
  <e-col col="24">
    <app-box title="Colors">
      <e-button color="primary" class="ma-2">Primary</e-button>
      <e-button color="secondary" class="ma-2">Secondary</e-button>
      <e-button color="warning" class="ma-2"> Warning </e-button>
      <e-button color="info" class="ma-2">Info </e-button>
      <e-button color="success" class="ma-2">Success</e-button>
      <e-button color="error" class="ma-2">Error</e-button>
      <e-button class="ma-2">Default</e-button>
      <template #code>
        <!-- prettier-ignore -->
        <div v-prism>&lt;template>
  &lt;e-button color="primary"> Primary &lt;/e-button>

  &lt;e-button color="secondary"> Secondary &lt;/e-button>

  &lt;e-button color="warning"> Warning &lt;/e-button>

  &lt;e-button color="info"> Info &lt;/e-button>

  &lt;e-button color="success"> Success &lt;/e-button>

  &lt;e-button color="error"> Error &lt;/e-button>

  &lt;e-button color="default"> Default &lt;/e-button>
&lt;/template></div>
      </template>
    </app-box>
  </e-col>
</template>

<script>
export default {
  name: 'colors',
}
</script>

<style scoped></style>
