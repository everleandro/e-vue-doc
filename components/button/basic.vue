<template>
  <e-col col="24">
    <app-box title="Basic">
      <div class="d-flex flex-wrap align-center">
        <e-button color="primary" class="ma-2">Default</e-button>
        <e-button color="primary" class="ma-2" rounded>Rounded</e-button>
        <e-button color="primary" class="ma-2" fab>
          <e-icon>mdi mdi-account</e-icon>
        </e-button>
        <e-button color="primary" class="ma-2" icon>
          <e-icon>mdi mdi-account</e-icon>
        </e-button>
        <e-button color="primary" class="ma-2" depressed>depressed</e-button>
        <e-button color="primary" class="ma-2" outlined>outlined</e-button>
        <div class="ma-2 flex-grow-1">
          <e-button color="primary" block>block</e-button>
        </div>
      </div>
      <template #code>
        <!-- prettier-ignore -->
        <div v-prism>&lt;template>
  &lt;e-button> Default &lt;/e-button>

  &lt;e-button rounded> Rounded &lt;/e-button>

  &lt;e-button fab>
    &lt;e-icon>mdi mdi-account&lt;/e-icon>
  &lt;/e-button>

  &lt;e-button icon>
    &lt;e-icon>mdi mdi-account&lt;/e-icon>
  &lt;/e-button>

  &lt;e-button depressed> Depressed &lt;/e-button>

  &lt;e-button outlined> Outlined &lt;/e-button>
&lt;/template></div>
      </template>
    </app-box>
  </e-col>
</template>

<script>
export default {
  name: 'ButtonBasic',
}
</script>

<style scoped></style>
