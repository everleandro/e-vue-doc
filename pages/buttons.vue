<template>
  <div class="button-page">
    <h1 class="v-heading text-h3 text-sm-h3 mb-4">Buttons</h1>
    <p>
      The <code>e-btn</code> component replaces the standard html button with a
      material design theme and a multitude of options. Any color helper class
      can be used to alter the background or text color.
    </p>
    <div class="e-card pa-4">
      <e-row>
        <e-col col="24" md="12" lg="12" class="box">
          <e-button
            :disabled="disabled"
            :fab="fab"
            :color="selectedColor"
            :depressed="depressed"
            :outlined="outlined"
            :block="block"
            :rounded="rounded"
            :icon="icon"
            v-bind="{ [selectedSize]: true }"
          >
            <e-icon v-if="fab || icon">mdi mdi-account</e-icon>
            <template v-else> Button</template>
          </e-button>
        </e-col>
        <e-col>
          <e-checkbox v-model="disabled" dense label="disabled"></e-checkbox>
          <e-checkbox v-model="fab" dense label="fab"></e-checkbox>
          <e-checkbox v-model="depressed" dense label="depressed"></e-checkbox>
          <e-checkbox v-model="outlined" dense label="outlined"></e-checkbox>
          <e-checkbox v-model="block" dense label="block"></e-checkbox>
          <e-checkbox v-model="rounded" dense label="rounded"></e-checkbox>
          <e-checkbox v-model="icon" dense label="icon"></e-checkbox>
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
        <e-col>
          <e-radio-group v-model="selectedSize">
            <e-radio
              v-for="size in sizes"
              :key="size"
              :input-value="size"
              :label="size"
            />
          </e-radio-group>
        </e-col>
      </e-row>
    </div>
    <div class="mt-4">
      <e-row no-gutters>
        <e-col col="24">
          <!-- prettier-ignore -->
          <div v-prism="'language-css'">
.example {
  color : red
}
          </div>
        </e-col>
      </e-row>
    </div>

    <div class="mt-4">
      <e-row no-gutters>
        <e-col col="24">
          <div v-prism>
            <!-- prettier-ignore -->
            <script type="prism-html-markup">
<e-button
  large
  color="info"
>
  Button
</e-button>
            </script>
          </div>
        </e-col>
      </e-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',
  data: () => ({
    disabled: false,
    selectedColor: 'info',
    colors: [
      'primary',
      'secondary',
      'info',
      'warning',
      'success',
      'error',
      'none',
    ],
    selectedSize: 'large',
    sizes: ['XSmall', 'small', 'large', 'XLarge'],
    fab: false,
    depressed: false,
    outlined: false,
    block: false,
    rounded: false,
    icon: false,
  }),
})
</script>

<style lang="scss">
.button-page {
}
</style>
