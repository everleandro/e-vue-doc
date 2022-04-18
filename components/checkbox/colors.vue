<template>
  <e-col col="24">
    <app-box title="Colors">
      <e-row>
        <e-col cols="12" lg="8">
          <e-checkbox color="primary" dense label="Primary" />
        </e-col>
        <e-col cols="12" lg="8">
          <e-checkbox color="secondary" dense label="Secondary" />
        </e-col>
        <e-col cols="12" lg="8">
          <e-checkbox color="warning" dense label="Warning" />
        </e-col>
        <e-col cols="12" lg="8">
          <e-checkbox color="info" dense label="Info" />
        </e-col>
        <e-col cols="12" lg="8">
          <e-checkbox color="success" dense label="Success" />
        </e-col>
        <e-col cols="12" lg="8">
          <e-checkbox color="error" dense label="Error" />
        </e-col>
      </e-row>
      <template #code>
        <!-- prettier-ignore -->
        <div v-prism>&lt;template>
  &lt;e-row>
    &lt;e-col cols="12" lg="8">
      &lt;e-checkbox color="primary" label="Primary" />
    &lt;/e-col>
    &lt;e-col cols="12" lg="8">
      &lt;e-checkbox color="secondary" label="Secondary" />
    &lt;/e-col>
    &lt;e-col cols="12" lg="8">
      &lt;e-checkbox color="warning" label="Warning" />
    &lt;/e-col>
    &lt;e-col cols="12" lg="8">
      &lt;e-checkbox color="info" label="Info" />
    &lt;/e-col>
    &lt;e-col cols="12" lg="8">
      &lt;e-checkbox color="success" label="Success" />
    &lt;/e-col>
    &lt;e-col cols="12" lg="8">
      &lt;e-checkbox color="error" label="Error" />
    &lt;/e-col>
  &lt;/e-row>
&lt;/template></div>
      </template>
    </app-box>
  </e-col>
</template>

<script>
export default {
  name: 'CheckboxColors',
}
</script>

<style></style>
