<template>
  <e-col col="24">
    <app-box
      title="Model"
      subtitle="Can use different type of model. Default type: Boolean "
    >
      <e-row no-gutters>
        <e-col
          cols="24"
          lg="12"
          class="d-flex justify-center align-center br-divider pa-4"
        >
          <e-checkbox
            v-model="model"
            :true-value="trueValue"
            :false-value="falseValue"
            :label="`label : ${model}`"
          />
        </e-col>
        <hr class="e-divider e-divider--vertical" />
        <e-col col="24" lg="12">
          <div class="pa-4">
            <e-text-field
              v-model="trueValue"
              label="true value"
              outlined
            ></e-text-field>
            <e-text-field
              v-model="falseValue"
              label="False Value"
              outlined
            ></e-text-field>
          </div>
        </e-col>
      </e-row>
      <template #code>
        <!-- prettier-ignore -->
        <div v-prism="'language-javascript'">&lt;template>
  &lt;e-checkbox
    v-model="model"
    :true-value="trueValue"
    :false-value="falseValue"
    :label="'label : ' + model"
  />
&lt;/template></div>
        <!-- prettier-ignore -->
        <div v-prism>&lt;script>
    export default {
      name: 'CheckboxUsage',
      data: () => ({
        model: false,
        trueValue: true,
        falseValue: false,
      }),
    }
&lt;/script></div>
      </template>
    </app-box>
  </e-col>
</template>

<script>
export default {
  name: 'CheckboxUsage',
  data: () => ({
    model: false,
    trueValue: true,
    falseValue: false,
  }),
}
</script>

<style></style>
