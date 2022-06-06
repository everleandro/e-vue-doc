<template>
  <e-col col="24" class="buttons-page-usage">
    <app-box
      title="Lazy prop"
      subtitle="If disabled, <code>e-form</code> trigger all input validation rules on mounted"
    >
      <e-form ref="form" v-model="valid" :lazy="false">
        <e-text-field
          v-model="name"
          label="name"
          :rules="[requiredRule]"
          outlined
        ></e-text-field>
        <e-text-field
          v-model="email"
          label="email"
          :rules="[emailRule, requiredRule]"
          outlined
        ></e-text-field>
        <div class="d-flex">
          <e-button
            class="mr-4"
            color="success"
            :disabled="!valid"
            @click.prevent="validate()"
          >
            validate
          </e-button>
          <e-button class="mr-4" color="error" @click.prevent="reset()">
            reset validation
          </e-button>
        </div>
      </e-form>
      <template #code>
        <!-- prettier-ignore -->
        <div v-prism>&lt;template>
  &lt;e-form ref="form" v-model="valid" :lazy="false">
    &lt;e-text-field
            v-model="name"
            label="name"
            :rules="[requiredRule]"
            outlined
        >&lt;/e-text-field>
    &lt;e-text-field
            v-model="email"
            label="email"
            :rules="[emailRule, requiredRule]"
            outlined
        >&lt;/e-text-field>
    &lt;div class="d-flex">
      &lt;e-button
                class="mr-4"
                color="success"
                :disabled="!valid"
                @click.prevent="validate()"
            >
        validate
      &lt;/e-button>
      &lt;e-button class="mr-4" color="error" @click.prevent="reset()">
        reset validation
      &lt;/e-button>
    &lt;/div>
  &lt;/e-form>
&lt;/template></div>
      </template>
    </app-box>
  </e-col>
</template>

<script>
export default {
  name: 'FormsLazy',
  data: () => ({
    valid: null,
    requiredRule: (v) => !!v || 'This field is required',
    emailRule: (v) => !v || /.+@.+/.test(v) || 'E-mail must be valid',
    name: '',
    email: '',
    agree: '',
  }),
  methods: {
    validate() {
      this.$refs.form.validate()
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>

<style lang="scss">
.buttons-page-usage {
  .e-divider.e-divider--vertical {
    margin-bottom: -16px;
    margin-top: -16px;
  }
  .e-field--checkbox {
    .e-field__slot {
      height: 35px;
    }
  }
}
</style>
