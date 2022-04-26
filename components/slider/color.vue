<template>
  <e-col col="24" class="buttons-page-usage">
    <app-box
      title="Colors"
      subtitle="You can set the colors of the slider using the props color, track-color and thumb-color."
    >
      <div>
        <e-slider
          v-model="sliderModel1"
          label="color"
          color="primary"
        ></e-slider>
        <e-slider
          v-model="sliderModel2"
          label="track-color"
          color="primary"
          track-color="secondary"
        ></e-slider>
        <e-slider
          v-model="sliderModel3"
          thumb-label
          label="thumb-color"
          color="primary"
          thumb-color="success"
        ></e-slider>
      </div>
      <template #code>
        <!-- prettier-ignore -->
        <div v-prism>&lt;template>
  &lt;div>
    &lt;e-slider
            v-model="sliderModel1"
            label="color"
            color="primary"
          >&lt;/e-slider>
    &lt;e-slider
            v-model="sliderModel2"
            label="track-color"
            color="primary"
            track-color="secondary"
        >&lt;/e-slider>
    &lt;e-slider
            v-model="sliderModel3"
            thumb-label
            label="thumb-color"
            color="primary"
            thumb-color="success"
        >&lt;/e-slider>
  &lt;/div>
&lt;/template></div>
      </template>
    </app-box>
  </e-col>
</template>

<script>
export default {
  name: 'SliderColor',
  data: () => ({
    sliderModel1: 10,
    sliderModel2: 50,
    sliderModel3: 20,
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
