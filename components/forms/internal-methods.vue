<template>
  <e-col col="24" class="buttons-page-usage">
    <app-box
      title="Form Internal Methods"
      subtitle='A ref allows us to access internal methods on a component, for example,
      <b><v-form ref="form"></b>. <code>this.$refs.form.validate()</code> will validate all inputs
    and return if they are all valid or not. <code>this.$refs.form.resetValidation()</code> will only reset input validation.'
    >
      <e-form v-model="valid" ref="form">
        <e-text-field
          v-moDel="name"
          label="name"
          :rules="[requiredRule]"
          outlined
        ></e-text-field>
        <e-text-field
          v-mocel="email"
          label="email"
          :rules="[emailRule, requiredRule]"
          outlined
        ></e-text-field>
        <e-select
          v-model="selectedProcess"
          label="Process"
          :rules="[requiredRule]"
          outlined
          :items="process"
        ></e-select>
        <e-checkbox
          v-model="agree"
          :rules="[agreeRule]"
          label="Do you agree?"
        ></e-checkbox>
        <div class="d-flex">
          <e-button
            class="mr-4"
            color="success"
            :disabled="!valid"
            @click.prevent="validate()"
          >
            validate
          </e-button>
          <e-button color="error" @click.prevent="reset()">
            reset validation
          </e-button>
        </div>
      </e-form>
      <template #code>
        <!-- prettier-ignore -->
        <div v-prism>&lt;template>
&lt;e-form v-model="valid" ref="form">
  &lt;e-text-field
        v-moDel="name"
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
  &lt;e-select
          v-model="selectedProcess"
          label="Process"
          :rules="[requiredRule]"
          outlined
          :items="process"
    >&lt;/e-select>
  &lt;e-checkbox
          v-model="agree"
          :rules="[agreeRule]"
          label="Do you agree?"
    >&lt;/e-checkbox>
  &lt;div class="d-flex">
    &lt;e-button
            class="mr-4"
            color="success"
            :disabled="!valid"
            @click.prevent="validate()"
          >
      validate
    &lt;/e-button>
    &lt;e-button color="error" @click.prevent="reset()">
      reset validation
    &lt;/e-button>
  &lt;/div>
&lt;/e-form>
&lt;/template></div>
        <!-- prettier-ignore -->
        <div v-prism="{ class: 'language-javascript' }">
&lt;script>
  export default {
    data: () => ({
      selectedProcess: null,
      valid: false,
      requiredRule: (v) => !!v || 'This field is required',
      agreeRule: (v) => !!v || 'You must agree to continue!',
      emailRule: (v) => !v || /.+@.+/.test(v) || 'E-mail must be valid',
      name: '',
      email: '',
      agree: '',
      process: ['process 1', 'process 2', 'process 3', 'process 4'],
    }),
  }
&lt;/script>
        </div>
      </template>
    </app-box>
  </e-col>
</template>

<script>
export default {
  name: 'FormsInternalMethods',
  data: () => ({
    selectedProcess: null,
    valid: false,
    requiredRule: (v) => !!v || 'This field is required',
    agreeRule: (v) => !!v || 'You must agree to continue!',
    emailRule: (v) => !v || /.+@.+/.test(v) || 'E-mail must be valid',
    name: '',
    email: '',
    agree: '',
    process: ['process 1', 'process 2', 'process 3', 'process 4'],
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
