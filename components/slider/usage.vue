<template>
  <e-col col="24" class="buttons-page-usage">
    <app-box title="Example">
      <e-row no-gutters>
        <e-col
          col="24"
          lg="12"
          class="d-flex justify-center align-center br-divider pa-4"
        >
          <e-slider
            v-model="sliderModel"
            :disabled="disabled"
            :decimal="decimal"
            :thumb-label="thumbLabel"
            label="label"
            :color="selectedColor"
            :track-color="trackColor"
            :thumb-color="thumbColor"
          ></e-slider>
        </e-col>
        <hr class="e-divider e-divider--vertical" />
        <e-col col="24" lg="6">
          <div class="pa-4">
            <e-select
              v-model="selectedColor"
              label="color"
              outlined
              :items="colors"
            ></e-select>
            <e-select
              v-model="trackColor"
              label="track color"
              outlined
              :items="colors"
            ></e-select>
            <e-select
              v-model="thumbColor"
              label="Thumb Color"
              outlined
              :items="colors"
            ></e-select>
          </div>
        </e-col>
        <hr class="e-divider e-divider--vertical" />
        <e-col col="24" lg="6">
          <div class="pa-4">
            <e-checkbox v-model="disabled" dense label="disabled"></e-checkbox>
            <e-checkbox v-model="decimal" dense label="decimal"></e-checkbox>
            <e-checkbox
              v-model="thumbLabel"
              dense
              label="thumb label"
            ></e-checkbox>
          </div>
        </e-col>
      </e-row>
    </app-box>
  </e-col>
</template>

<script>
export default {
  name: 'SliderUsage',
  data: () => ({
    disabled: false,
    selectedColor: 'primary',
    trackColor: null,
    thumbColor: null,
    sliderModel: 10,
    decimal: false,
    colors: ['primary', 'secondary', 'error'],
    thumbLabel: false,
  }),
}
</script>

<style lang="scss">
.buttons-page-usage {
  .e-divider.e-divider--vertical {
    margin-bottom: -16px;
    margin-top: -16px;
  }
  .e-field--checkbox {
    .e-field__slot {
      height: 35px;
    }
  }
}
</style>
