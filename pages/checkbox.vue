<template>
  <div class="dialog-page">
    <h1 class="v-heading text-h3 text-sm-h3 mb-4">Checkbox</h1>
    <p>
      The <code>e-checkbox</code> component provides users the ability to choose
      between two distinct values.
    </p>
    <div class="e-card pa-4">
      <e-row>
        <e-col col="24" md="7" lg="6" class="box">
          <e-checkbox
            v-model="model"
            :readonly="state === 'readonly'"
            :disabled="state === 'disabled'"
            :color="selectedColor"
            :label="label + ':' + model"
            :false-value="falseValue"
            :true-value="trueValue"
          />
        </e-col>
        <e-col col="24" md="10" lg="12">
          <e-text-field v-model="label" label="label" outlined></e-text-field>
          <e-text-field
            v-model="falseValue"
            label="false value"
            outlined
          ></e-text-field>
          <e-text-field
            v-model="trueValue"
            label="true value"
            outlined
          ></e-text-field>
        </e-col>
        <e-col col="24" md="7" lg="6">
          <e-radio-group v-model="state">
            <e-radio label="readonly" input-value="readonly" />
            <e-radio label="disabled" input-value="disabled" />
            <e-radio label="normal" input-value="normal" />
          </e-radio-group>
          <e-radio-group v-model="selectedColor">
            <e-radio
              v-for="color in colors"
              :key="color"
              :color="color"
              :input-value="color"
              :label="color"
            />
          </e-radio-group>
        </e-col>
      </e-row>
    </div>
    <!-- <div class="mt-4">
      <e-row no-gutters>
        <e-col col="24" class="code-box-image">
          <img src="~/assets/components/dialog.jpg" alt="" />
        </e-col>
      </e-row>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',

  data: () => ({
    state: 'normal',
    falseValue: false,
    model: false,
    selectedColor: 'primary',
    trueValue: true,
    label: 'label',
    colors: ['primary', 'secondary', 'warning', 'success'],
  }),
  mounted() {},
})
</script>

<style lang="scss">
</style>
