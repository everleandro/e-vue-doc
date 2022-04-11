<template>
  <e-container class="px-0" fluid>
    <h2 class="v-heading text-h2 text-sm-h3 mb-4">Colors</h2>
    <p>
      Radios can be colored by using any of the builtin colors and contextual names using the color prop.
    </p>
    <app-example-box>
      <!-- Diseño de juego a mostrar -->
      <template #default>
        <e-row>
          <e-col col="24" md="12" lg="12" xl="12">
            <e-radio-group v-model="radioGroup">
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
      </template>
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
                                                  v-for="color in colors"
                                                  :key="color"
                                                  :color="color"
                                                  :input-value="color"
                                                  :label="color"
                              />
               </e-radio-group>
           </e-col>
       </e-row>
   </e-container>
</template>
                </script>
              </div>
            </e-col>
          </e-row>
          <div>
            <div v-prism="'language-javascript'">
              <script type="prism-javascript">
                  <script>
                import Vue from 'vue'
                export default Vue.extend({
                  name: 'usage',
                  data: () => ({
                    radioGroup: 1,
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
                <script>
              </script>
            </div>
          </div>
        </div>
      </template>
      <!-- Fragmento de códígo con componente y sus props en cuestión -->
      <template #example>
        <div v-prism>
          <script type="prism-html-markup">
<e-radio
color="primary"
label="primary"
>
</e-radio>
          </script>
        </div>
      </template>
    </app-example-box>
  </e-container>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'colors',
  data: () => ({
    radioGroup: 1,
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
