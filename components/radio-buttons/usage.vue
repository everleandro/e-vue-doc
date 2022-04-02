<template>
  <e-container class="px-0" fluid>
    <e-row>
      <e-col col="24" md="12" lg="12" xl="12" class="box">
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

<style lang="scss"></style>
