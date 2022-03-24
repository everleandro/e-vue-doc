<template>
  <div class="button-page">
    <h1 class="v-heading text-h3 text-sm-h3 mb-4">Slider</h1>
    <p>
      The <code>e-slider</code> component is a better visualization of the
      number input. It is used for gathering numerical user data.
    </p>
    <div class="e-card pa-4">
      <e-row>
        <e-col col="24" md="12" lg="12" class="box">
          <e-slider
            v-model="value"
            :disabled="disabled"
            :decimal="decimal"
            :thumb-label="thumbLabel"
            label="label"
            :color="selectedColor"
          ></e-slider>
        </e-col>
        <e-col>
          <e-checkbox v-model="disabled" dense label="disabled"></e-checkbox>
          <e-checkbox v-model="decimal" dense label="decimal"></e-checkbox>
          <e-checkbox
            v-model="thumbLabel"
            dense
            label="thumbLabel"
          ></e-checkbox>
        </e-col>
        <e-col>
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
          <img src="~/assets/components/button.jpg" alt="" />
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
    disabled: false,
    selectedColor: 'info',
    colors: ['primary', 'secondary', 'info', 'warning', 'success', 'error'],
    thumbLabel: true,
    decimal: true,
  }),
  mounted() {},
})
</script>

<style lang="scss">
.button-page {
}
</style>
