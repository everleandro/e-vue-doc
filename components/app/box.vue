<template>
  <div class="code-box mb-8">
    <e-bar class="e-bar--depressed" color="bg">
      <div
        class="code-box__header-content"
        :class="title ? 'justify-space-between' : 'justify-end'"
      >
        <span class="code-box__title">{{ title }}</span>
        <e-button icon @click="showCode = !showCode">
          <e-icon>mdi mdi-code-tags</e-icon>
        </e-button>
      </div>
    </e-bar>
    <hr v-if="subtitle" class="e-divider" />
    <p
      v-if="subtitle"
      class="pa-4 code-box__subtitle ma-0"
      v-html="subtitle"
    ></p>
    <hr class="e-divider" />
    <e-expand-transition>
      <div v-if="showCode" class="code-box__code">
        <slot name="code"></slot>
      </div>
    </e-expand-transition>
    <div class="code-box__body pa-4">
      <slot></slot>
    </div>
    <div class="code-box__code">
      <slot name="example"></slot>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'CodeBox',
  props: {
    title: { type: String, default: ' ' },
    subtitle: { type: String, default: '' },
  },
  data: () => ({
    showCode: false,
  }),
})
</script>

<style lang="scss">
.code-box {
  border: thin solid rgba(0, 0, 0, 0.12);
  &__title {
    font-size: 18px;
    font-weight: 500;
  }
  &__subtitle {
    font-size: 14px;
  }
  &__header-content {
    color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-grow: 1;
    align-items: center;
  }
}
</style>
