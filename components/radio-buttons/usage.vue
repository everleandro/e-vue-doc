<template>
  <e-container class="px-0" fluid>
    <h2 class="v-heading text-h2 text-sm-h3 mb-4">Usage</h2>
    <p>
      Although v-radio can be used on its own, it is best used in conjunction
      with v-radio-group. Using the v-model on the v-radio-group you can access
      the value of the selected radio button inside the group.
    </p>
    <app-box>
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
                color="primary"
              ></e-radio>
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
          <div>
            <div v-prism="{class:'language-javascript', dataStart:'20'}">
              <script type="prism-javascript">
<script>
  import Vue from 'vue'
  export default Vue.extend({
    name: 'usage',
    data: () => ({
    radioGroup: 1,
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
label="Radio 1"
>
</e-radio>
          </script>
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
