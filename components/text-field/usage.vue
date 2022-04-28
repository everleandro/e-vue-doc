<template>
  <e-col col="24" class="buttons-page-usage">
    <app-box title="Example">
      <e-row no-gutters>
        <e-col
          col="24"
          lg="12"
          class="d-flex justify-center align-center br-divider pa-4"
        >
          <e-text-field
            label="default"
            :color="selectedColor.value"
            :prepend-icon="selectedPrependIcon.value"
            :append-icon="selectedAppendIcon.value"
            :disabled="disabled"
            :limit="limit > 0 ? limit : null"
            :counter="counter"
            :readonly="readonly"
            :dense="dense"
            :outlined="outlined"
          ></e-text-field>
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
              v-model="selectedPrependIcon"
              label="prepend"
              outlined
              :items="icons"
            ></e-select>
            <e-select
              v-model="selectedAppendIcon"
              label="prepend"
              outlined
              dense
              :items="icons"
            ></e-select>
            <e-text-field v-model="detail" outlined />
          </div>
        </e-col>
        <hr class="e-divider e-divider--vertical" />
        <e-col col="24" lg="6">
          <div class="pa-4">
            <e-checkbox v-model="disabled" dense label="disabled"></e-checkbox>
            <e-checkbox v-model="dense" dense label="dense"></e-checkbox>
            <e-checkbox v-model="counter" dense label="counter"></e-checkbox>
            <e-checkbox v-model="outlined" dense label="outlined"></e-checkbox>
            <e-checkbox v-model="readonly" dense label="readonly"></e-checkbox>
            <e-slider
              v-model="limit"
              label="limit"
              class="mt-10"
              :max="10"
            ></e-slider>
          </div>
        </e-col>
      </e-row>
      <template #code>
        <!-- prettier-ignore -->
        <div v-prism>&lt;template>
    &lt;e-text-field
              label="default"
              :color="color"
              :prepend-icon="prependIcon"
              :append-icon="appendIcon"
              :disabled="disabled"
              :limit="limit"
              :counter="counter"
              :readonly="readonly"
              :dense="dense"
              :outlined="outlined"
    >&lt;/e-text-field>
&lt;/template></div>
      </template>
    </app-box>
  </e-col>
</template>

<script>
export default {
  name: 'TextFieldUsage',
  data: () => ({
    limit: 10,
    detail: 'text message!!',
    selectedColor: { label: 'default', value: undefined },
    selectedPrependIcon: { label: 'none', value: null },
    selectedAppendIcon: { label: 'none', value: null },
    colors: [
      { label: 'success', value: 'success' },
      { label: 'secondary', value: 'secondary' },
      { label: 'error', value: 'error' },
      { label: 'default', value: undefined },
    ],
    icons: [
      { label: 'alert', value: 'mdi mdi-alert-octagram' },
      { label: 'bell', value: 'mdi mdi-bell-ring' },
      { label: 'account', value: 'mdi mdi-account' },
      { label: 'none', value: undefined },
    ],
    disabled: false,
    readonly: false,
    counter: false,
    dense: false,
    outlined: true,
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
