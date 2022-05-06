<template>
  <e-col col="24">
    <app-box title="Disabled">
      <!-- Diseño de juego a mostrar -->
      <e-row>
        <e-col xs="24" md="12" lg="12" xl="12">
          <e-select :items="items" disabled outlined label="disabled"></e-select>
        </e-col>
      </e-row>
      <!-- Códígo ejemplo de un fichero completo -->
      <template #code>
        <div>
          <e-row no-gutters>
            <e-col col="24">
              <!-- prettier-ignore -->
              <div v-prism>
                <script type="prism-html-markup">
<template>
  <e-radio-group v-model="radioGroup">
      <e-select
            :items="items"
            disabled
            label="disabled"
          ></e-select>
  </e-radio-group>
</template>
                </script>
              </div>
            </e-col>
          </e-row>
        </div>
      </template>
    </app-box>
  </e-col>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'usage',
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
})
</script>

<style scoped></style>
