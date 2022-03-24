<template>
  <div class="dialog-page">
    <h1 class="v-heading text-h3 text-sm-h3 mb-4">Dialogs</h1>
    <p>
      The <code>e-dialog</code> component inform users about a specific task and
      may contain critical information, require decisions, or involve multiple
      tasks. Use dialogs sparingly because they are interruptive.
    </p>
    <div class="e-card pa-4">
      <e-row>
        <e-col col="24" md="12" lg="12" class="box">
          <e-button @click="dialog1 = true" color="success">
            show dialog
          </e-button>
          <e-dialog
            v-model="dialog1"
            :max-width="maxWidth"
            :persistant="persistant"
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
                <e-button block color="secondary" @click="dialog1 = false">
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
                  @click="dialog1 = false"
                >
                  accept
                </e-button>
              </e-col>
            </e-row>
          </e-dialog>
        </e-col>
        <e-col>
          <e-checkbox v-model="fullscreen" label="fullscreen"
            >fullscreen</e-checkbox
          >
          <e-checkbox v-model="persistant" label="persistant"
            >persistant</e-checkbox
          >
          <e-text-field
            v-model="maxWidth"
            label="max width"
            type="number"
            outlined
          ></e-text-field>
        </e-col>
      </e-row>
    </div>
    <div class="mt-4">
      <e-row no-gutters>
        <e-col col="24" class="code-box-image">
          <img src="~/assets/components/dialog.jpg" alt="" />
        </e-col>
      </e-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DefaultLayout',

  data: () => ({
    dialog1: false,
    fullscreen: false,
    persistant: false,
    maxWidth: 400,
  }),
  mounted() {},
})
</script>

<style lang="scss">
</style>
