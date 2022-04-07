<template>
  <div class="example-box">
    <e-row class="pb-1">
      <e-col>
        <e-button small icon depressed @click="seeCode = !seeCode">
          <e-icon>mdi mdi-code-tags</e-icon>
        </e-button>
      </e-col>
    </e-row>
    <hr>
    <slot v-if="seeCode" name="code"></slot>
    <slot></slot>
    <slot name="example"></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'example-box',
  data: () => ({
    seeCode: false,
  }),
})
</script>

<style lang="scss">
.example-box {
  background: rgba(1, 60, 60, 0.05);
  border: thin solid rgba(0, 0, 0, 0.12);
  padding: 5px;
}
</style>
