<template>
  <e-container class="px-0" fluid>
    <app-box title="Colors">
      <!-- Diseño de juego a mostrar -->
      <e-row>
        <e-col col="24" md="12" lg="12" xl="12">
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
      <!-- Códígo ejemplo de un fichero completo -->
      <template #code>
        <div>
          <e-row no-gutters>
            <e-col col="24">
              <div v-prism>
                <script type="prism-html-markup">
<template>
  <e-radio-group v-model="selectedColor">
      <e-radio
                 v-for="color in colors"
                 :key="color"
                 :color="color"
                 :input-value="color"
                 :label="color"
              />
  </e-radio-group>
</template>
                </script>
              </div>
            </e-col>
          </e-row>
        </div>
      </template>
    </app-box>
  </e-container>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'colors',
  data: () => ({
    selectedColor: 'primary',
    colors: [
      'primary',
      'secondary',
      'info',
      'warning',
      'success',
      'error',
      'none',
    ],
  }),
})
</script>

<style scoped></style>

<style scoped></style>
