<template>
  <e-container class="px-0" fluid>
    <h2 class="v-heading text-h2 text-sm-h3 mb-4">Usage</h2>
    <p>
      Although v-radio can be used on its own, it is best used in conjunction
      with v-radio-group. Using the v-model on the v-radio-group you can access
      the value of the selected radio button inside the group.
    </p>
    <app-example-box>
      <!-- Diseño de juego a mostrar -->
      <template #default>
        <e-row>
          <e-col col="24" md="12" lg="12" xl="12">
            <e-radio-group v-model="radioGroup">
              <e-radio
                v-for="n in 3"
                :key="n"
                :label="`Radio ${n}`"
                :input-value="n"
              ></e-radio>
            </e-radio-group>
          </e-col>
        </e-row>
      </template>
      <!-- Códígo ejemplo de un fichero completo -->
      <template #code>
        <e-row>
          <e-col col="24" md="12" lg="12" xl="12">
            <h4>Códígo ejemplo de todo un fichero</h4>
          </e-col>
        </e-row>
      </template>
      <!-- Fragmento de códígo con componente y sus props en cuestión -->
      <template #example>
        <e-row>
          <e-col col="24" md="12" lg="12" xl="12">
            <h4>Fragmento de códígo con componente y sus props en cuestión</h4>
          </e-col>
        </e-row>
      </template>
    </app-example-box>
  </e-container>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'usage',
  data: () => ({
    radioGroup: 1,
  }),
})
</script>

<style scoped></style>
