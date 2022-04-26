<template>
  <e-col col="24" class="buttons-page-usage">
    <app-box
      title="States"
      subtitle="You cannot interact with disabled sliders."
    >
      <div>
        <e-slider v-model="sliderModel" label="disabled" disabled></e-slider>
      </div>
      <template #code>
        <!-- prettier-ignore -->
        <div v-prism>&lt;template>
  &lt;div>
    &lt;e-slider v-model="sliderModel" label="disabled" disabled>&lt;/e-slider>
  &lt;/div>
&lt;/template></div>
      </template>
    </app-box>
  </e-col>
</template>

<script>
export default {
  name: 'SliderStates',
  data: () => ({
    sliderModel: 10,
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
