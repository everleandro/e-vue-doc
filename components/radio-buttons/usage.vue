<template>
  <e-container class="px-0" fluid>
    <app-box title="Usage">
      <!-- Diseño de juego a mostrar -->
      <e-row>
          <e-col col="24" md="12" lg="12" xl="12">
            <e-radio-group v-model="radioGroup">
              <e-radio
                v-for="n in 3"
                :key="n"
                :label="`Radio ${n}`"
                :input-value="n"
                color="primary"
              ></e-radio>
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
  <e-container fluid>
     <e-row>
       <e-col col="24" md="12" lg="12" xl="12">
          <e-radio-group v-model="radioGroup">
              <e-radio
                                   v-for="n in 3"
                                   :key="n"
                                   :label="`Radio ${n}`"
                                   :input-value="n"
                                >
              </e-radio>
          </e-radio-group>
       </e-col>
     </e-row>
  </e-container>
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
  name: 'usage',
  data: () => ({
    radioGroup: 1,
  }),
})
</script>

<style scoped></style>
