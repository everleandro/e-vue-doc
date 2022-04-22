<template>
  <e-col col="24">
    <app-box
      title="States"
      subtitle="can have different states such as <b>default</b>, <b>disabled</b> and <b>readonly</b>"
    >
      <e-row>
        <e-col
          col="12"
          class="d-flex justify-center align-center br-divider pa-4"
        >
          <e-checkbox
            v-model="checkboxModel"
            :label="checkboxModel ? 'on' : 'off'"
            v-bind="{ [selectedState]: true }"
          />
        </e-col>
        <hr class="e-divider e-divider--vertical" />
        <e-col col="12">
          <e-radio-group v-model="selectedState">
            <e-radio
              v-for="state in states"
              :key="state"
              :input-value="state"
              :label="state"
            />
          </e-radio-group>
        </e-col>
      </e-row>
      <template #code>
        <!-- prettier-ignore -->
        <div v-prism>&lt;template>
  &lt;e-row>
    &lt;e-col>
      &lt;e-checkbox
                v-model="checkboxModel"
                :label="checkboxModel ? 'on' : 'off'"
                v-bind="{ [selectedState]: true }"
            />
    &lt;/e-col>
  &lt;/e-row>
&lt;/template></div>
        <!-- prettier-ignore -->
        <div v-prism>&lt;script>
  export default {
    name: 'CheckboxStates',
    data: () => ({
        checkboxModel: true,
        states: ['default', 'disabled', 'readonly'],
        selectedState: 'default',
    }),
  }
&lt;/script></div>
      </template>
    </app-box>
  </e-col>
</template>

<script>
export default {
  name: 'CheckboxStates',
  data: () => ({
    checkboxModel: true,
    states: ['default', 'disabled', 'readonly'],
    selectedState: 'default',
  }),
}
</script>

<style></style>
