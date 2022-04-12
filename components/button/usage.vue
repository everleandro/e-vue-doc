<template>
  <e-col col="24" class="buttons-page-usage">
    <app-box title="Example">
      <e-row no-gutters>
        <e-col
          col="12"
          md="12"
          lg="12"
          class="d-flex justify-center align-center br-divider pa-4"
        >
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
        <hr class="e-divider e-divider--vertical" />
        <e-col lg="6">
          <div class="pa-4">
            <e-select
              v-model="selectedColor"
              label="color"
              outlined
              :items="colors"
            ></e-select>
            <e-select
              v-model="selectedSize"
              label="Size"
              outlined
              :items="sizes"
            ></e-select>
          </div>
        </e-col>
        <hr class="e-divider e-divider--vertical" />
        <e-col lg="6">
          <div class="pa-4">
            <e-checkbox v-model="disabled" dense label="disabled"></e-checkbox>
            <e-checkbox v-model="fab" dense label="fab"></e-checkbox>
            <e-checkbox
              v-model="depressed"
              dense
              label="depressed"
            ></e-checkbox>
            <e-checkbox v-model="outlined" dense label="outlined"></e-checkbox>
            <e-checkbox v-model="block" dense label="block"></e-checkbox>
            <e-checkbox v-model="rounded" dense label="rounded"></e-checkbox>
            <e-checkbox v-model="icon" dense label="icon"></e-checkbox>
          </div>
        </e-col>
      </e-row>
      <template #code>
        <!-- prettier-ignore -->
        <div v-prism>&lt;template>
         &lt;e-button> Button &lt;/e-button>
         &lt;/template></div>
      </template>
    </app-box>
  </e-col>
</template>

<script>
export default {
  name: 'AppUsage',
  data: () => ({
    disabled: false,
    selectedColor: null,
    colors: ['primary', 'secondary', 'none'],
    selectedSize: 'large',
    sizes: ['XSmall', 'small', 'large', 'XLarge'],
    fab: false,
    depressed: false,
    outlined: false,
    block: false,
    rounded: false,
    icon: false,
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
