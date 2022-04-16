<template>
  <e-col col="24">
    <section id="button-fab-size">
      <app-box title="Size">
        <e-button fab color="primary" x-small class="ma-2">
          <e-icon>mdi mdi-apple-icloud</e-icon>
        </e-button>
        <e-button fab color="primary" small class="ma-2">
          <e-icon>mdi mdi-apple-icloud</e-icon>
        </e-button>
        <e-button fab color="primary" large class="ma-2">
          <e-icon>mdi mdi-apple-icloud</e-icon>
        </e-button>
        <e-button fab color="primary" x-large class="ma-2">
          <e-icon>mdi mdi-apple-icloud</e-icon>
        </e-button>
        <e-button icon color="primary" x-small class="ma-2">
          <e-icon>mdi mdi-apple-icloud</e-icon>
        </e-button>
        <e-button icon color="primary" small class="ma-2">
          <e-icon>mdi mdi-apple-icloud</e-icon>
        </e-button>
        <e-button icon color="primary" large class="ma-2">
          <e-icon>mdi mdi-apple-icloud</e-icon>
        </e-button>
        <e-button icon color="primary" x-large class="ma-2">
          <e-icon>mdi mdi-apple-icloud</e-icon>
        </e-button>
        <e-button color="primary" x-small class="ma-2"> X-Small </e-button>
        <e-button color="primary" small class="ma-2"> Small </e-button>
        <e-button color="primary" large class="ma-2"> Large </e-button>
        <e-button color="primary" x-large class="ma-2"> X-Large </e-button>

        <template #code>
          <!-- prettier-ignore -->
          <div v-prism>&lt;template>
           &lt;e-button color="primary" x-small fab>
           &lt;e-icon>mdi mdi-apple-icloud&lt;/e-icon>
           &lt;/e-button>
           &lt;/template></div>
        </template>
      </app-box>
    </section>
  </e-col>
</template>

<script>
export default {
  name: 'ButtonFabSize',
  data: () => ({
    sizeNumber: 0,
    sizes: ['XSmall', 'small', 'large', 'XLarge'],
  }),
  computed: {
    selectedSize() {
      return this.sizes[this.sizeNumber]
    },
  },
}
</script>

<style lang="scss">
#button-fab-size {
  .e-field__slot {
    margin: 0 !important;
  }
  .e-messages {
    display: none;
  }
}
</style>
