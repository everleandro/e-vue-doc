<template>
  <e-col col="24">
    <app-box title="Example">
      <e-row no-gutters>
        <e-col
          cols="24"
          lg="12"
          class="d-flex justify-center align-center br-divider pa-4"
        >
          <e-button color="success" @click="dialogModel = true">
            show dialog
          </e-button>
          <e-dialog
            v-model="dialogModel"
            :max-width="maxWidth"
            :persistant="persist"
            :fullscreen="fullscreen"
          >
            <e-row no-gutters>
              <e-col col="24">
                <h1 class="px-4">Title</h1>
              </e-col>
              <e-col col="24">
                <p class="pa-4">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Veniam, deleniti, quia est non repudiandae, quisquam quibusdam
                  suscipit soluta amet asperiores perspiciatis dignissimos
                  maxime necessitatibus eius corporis? Quam tempora
                  exercitationem ipsam?
                </p>
              </e-col>
              <e-col col="12" v-if="!fullscreen">
                <e-button block color="secondary" @click="dialogModel = false">
                  cancel
                </e-button>
              </e-col>
              <e-col
                :col="fullscreen ? 24 : 12"
                :class="{ 'text-center': fullscreen }"
              >
                <e-button
                  :block="!fullscreen"
                  color="primary"
                  @click="dialogModel = false"
                >
                  accept
                </e-button>
              </e-col>
            </e-row>
          </e-dialog>
        </e-col>
        <hr class="e-divider e-divider--vertical" />
        <e-col col="24" lg="12">
          <div class="pa-4">
            <e-checkbox v-model="fullscreen" label="fullscreen"
              >fullscreen</e-checkbox
            >
            <e-checkbox v-model="persist" label="persistant"
              >persist</e-checkbox
            >
            <e-text-field
              v-model="maxWidth"
              label="max width"
              type="number"
              outlined
            ></e-text-field>
          </div>
        </e-col>
      </e-row>
      <template #code>
        <!-- prettier-ignore -->
        <div v-prism>&lt;template>
  &lt;e-dialog
        v-model="dialogModel"
        :max-width="maxWidth"
        :persistant="persist"
        :fullscreen="fullscreen"
    >
      &lt;e-row no-gutters>
        &lt;e-col col="24">
          &lt;h1 class="px-4">Title&lt;/h1>
        &lt;/e-col>
        &lt;e-col col="24">
          &lt;p class="pa-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Veniam, deleniti, quia est non repudiandae, quisquam quibusdam
            suscipit soluta amet asperiores perspiciatis dignissimos
            maxime necessitatibus eius corporis? Quam tempora
            exercitationem ipsam?
          &lt;/p>
        &lt;/e-col>
        &lt;e-col col="12">
          &lt;e-button
                          block
                          color="primary"
                          @click="dialogModel = false"
                        >
            accept
          &lt;/e-button>
        &lt;/e-col>
      &lt;/e-row>
  &lt;/e-dialog>
&lt;/template></div>
        <!-- prettier-ignore -->
        <div v-prism>&lt;script>
export default {
  name: 'CheckboxUsage',
  data: () => ({
    model: false,
    trueValue: true,
    falseValue: false,
  }),
}
          &lt;/script></div>
      </template>
    </app-box>
  </e-col>
</template>

<script>
export default {
  name: 'DialogUsage',
  data: () => ({
    dialogModel: false,
    fullscreen: false,
    maxWidth: 400,
    persist: false,
  }),
}
</script>

<style></style>
