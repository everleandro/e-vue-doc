<template>
  <e-col col="24" class="buttons-page-usage">
    <app-box title="Example">
      <e-row no-gutters>
        <e-col
          col="24"
          lg="12"
          class="d-flex justify-center align-center br-divider pa-4"
        >
          <e-select
            label="default"
            :items="selectItems"
            :color="selectedColor.value"
            :prepend-icon="selectedPrependIcon.value"
            :append-icon="selectedAppendIcon.value"
            :disabled="disabled"
            :clearable="clearable"
            :readonly="readonly"
            :dense="dense"
            :outlined="outlined"
          ></e-select>
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
            <e-checkbox
              v-model="clearable"
              dense
              label="clearable"
            ></e-checkbox>
            <e-checkbox v-model="outlined" dense label="outlined"></e-checkbox>
            <e-checkbox v-model="readonly" dense label="readonly"></e-checkbox>
          </div>
        </e-col>
      </e-row>
      <template #code>
        <!-- prettier-ignore -->
        <div v-prism>&lt;template>
    &lt;e-select
              v-model="selectModel"
              label="default"
              :items="items"
              :color="color"
              :prepend-icon="prependIcon"
              :append-icon="appendIcon"
              :disabled="disabled"
              :clearable="clearable"
              :readonly="readonly"
              :dense="dense"
              :outlined="outlined"
    >&lt;/e-select>
&lt;/template></div>
      </template>
    </app-box>
  </e-col>
</template>

<script>
export default {
  name: 'TextFieldUsage',
  data: () => ({
    detail: 'text message!!',
    selectedColor: { label: 'default', value: undefined },
    selectedPrependIcon: { label: 'none', value: null },
    selectedAppendIcon: { label: 'none', value: null },
    selectItems: ['item 1', 'item 2', 'item 3', 'item 4'],
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
    dense: false,
    clearable: false,
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
