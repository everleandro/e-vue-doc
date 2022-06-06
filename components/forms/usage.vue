<template>
  <e-col col="24" class="buttons-page-usage">
    <app-box title="Usage">
      <e-form v-model="valid">
        <e-text-field
          v-model="firstname"
          label="first name"
          :rules="[requiredRule]"
          counter
          outlined
          :limit="10"
        ></e-text-field>

        <e-text-field
          v-model="lastname"
          label="last name"
          :rules="[requiredRule]"
          counter
          outlined
        ></e-text-field>

        <e-text-field
          v-model="email"
          outlined
          type="email"
          label="email"
          :rules="[emailRule]"
        ></e-text-field>
      </e-form>
      <template #code>
        <!-- prettier-ignore -->
        <div v-prism>&lt;template>
  &lt;e-form>
    &lt;e-row>
      &lt;e-col col="24" md="12" lg="8">
        &lt;e-text-field
                      v-model="firstname"
                      label="first name"
                      :rules="[requiredRule]"
                      counter
                      outlined
                      :limit="10"
                >&lt;/e-text-field>
      &lt;/e-col>
      &lt;e-col col="24" md="12" lg="8">
        &lt;e-text-field
                      v-model="lastname"
                      label="last name"
                      :rules="[requiredRule]"
                      counter
                      outlined
                >&lt;/e-text-field>
      &lt;/e-col>
      &lt;e-col col="24" lg="8">
        &lt;e-text-field
                      v-model="email"
                      outlined
                      type="email"
                      label="email"
                      :rules="[emailRule]"
                >&lt;/e-text-field>
      &lt;/e-col>
    &lt;/e-row>
  &lt;/e-form>
&lt;/template></div>
        <!-- prettier-ignore -->
        <div v-prism="{ class: 'language-javascript' }">
&lt;script>
  export default {
    data: () => ({
      valid: true,
      lastname: '',
      firstname: '',
      email: '',
      requiredRule: (v) => !!v || 'This field is required',
      emailRule: (v) => /.+@.+/.test(v) || 'E-mail must be valid',
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
  name: 'FormsUsage',
  data: () => ({
    valid: false,
    lastname: '',
    firstname: '',
    email: '',
    requiredRule: (v) => !!v || 'This field is required',
    emailRule: (v) => !v || /.+@.+/.test(v) || 'E-mail must be valid',
  }),
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
