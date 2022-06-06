<template>
  <e-col col="24" class="buttons-page-grid">
    <app-box title="Grid">
      <e-form
        ref="form1"
        v-model="form1Model"
        label-min-width="111px"
        outlined
        inputs-hover-state
        grid
      >
        <e-text-field
          v-model="fields.name"
          label="NAME"
          md="16"
          lg="12"
          :rules="[required]"
        ></e-text-field>
        <e-radio-group
          v-model="fields.gender"
          row
          lg="6"
          color="success"
          md="8"
          label="GENDER"
          default-value="one"
        >
          <e-radio label="F" input-value="one" />
          <e-radio label="M" input-value="two" />
        </e-radio-group>
        <e-text-field
          v-model="fields.birthDate"
          label="BIRTHDATE"
          placeholder="dd/mm/yyyy"
          md="12"
          lg="6"
        />
        <e-text-field
          v-model="fields.surname"
          label="SURNAME"
          md="12"
          lg="12"
        ></e-text-field>
        <e-text-field
          v-model="fields.dni"
          label="DNI"
          md="12"
          lg="12"
          append-icon="mdi mdi-card-account-details"
        ></e-text-field>
        <e-text-field
          v-model="fields.secondName"
          label="SECOND NAME"
          md="12"
          lg="12"
        ></e-text-field>
        <e-text-field
          v-model="fields.address"
          md="24"
          lg="12"
          label="ADDRESS"
        ></e-text-field>
        <e-text-field
          v-model="fields.phone"
          md="12"
          lg="12"
          placeholder="+00 0000 0000"
          prepend-icon="mdi mdi-phone"
        ></e-text-field>
        <e-text-field
          v-model="fields.phone2"
          md="12"
          lg="12"
          placeholder="+00 0000 0000"
          prepend-icon="mdi mdi-phone"
        ></e-text-field>

        <e-text-field
          v-model="fields.pc"
          md="12"
          lg="6"
          label="P.C."
          placeholder="0000"
        ></e-text-field>
        <e-select
          v-model="fields.select"
          lg="18"
          md="16"
          :items="['Process 1', 'Process 2', 'Process 3']"
          label="PROCESS"
        />
        <e-checkbox
          v-model="fields.agree"
          md="8"
          lg="24"
          label="AGREE"
          :rules="[checkboxRule]"
        />
      </e-form>
      <template #code>
        <!-- prettier-ignore -->
        <div v-prism>&lt;template>
&lt;e-form
    ref="form1"
    v-model="form1Model"
    label-min-width="111px"
    outlined
    inputs-hover-state
    grid
>
    &lt;e-text-field
            v-model="fields.name"
            label="NAME"
            lg="12"
            md="16"
            :rules="[required]"
          >&lt;/e-text-field>
    &lt;e-radio-group
            v-model="fields.gender"
            row
            lg="6"
            color="success"
            md="8"
            label="GENDER"
            default-value="one"
          >
      &lt;e-radio label="F" input-value="one" />
      &lt;e-radio label="M" input-value="two" />
    &lt;/e-radio-group>
    &lt;e-text-field
            v-model="fields.birthDate"
            label="BIRTHDATE"
            placeholder="dd/mm/yyyy"
            md="12"
            lg="6"
          />
    &lt;e-text-field
            v-model="fields.surname"
            label="SURNAME"
            md="12"
            lg="12"
          >&lt;/e-text-field>
    &lt;e-text-field
            v-model="fields.dni"
            label="DNI"
            md="12"
            lg="12"
            append-icon="mdi mdi-card-account-details"
          >&lt;/e-text-field>
    &lt;e-text-field
            v-model="fields.secondName"
            label="SECOND NAME"
            md="12"
            lg="12"
          >&lt;/e-text-field>
  &lt;e-text-field
            v-model="fields.address"
            md="24"
            lg="12"
            label="ADDRESS"
          >&lt;/e-text-field>
    &lt;e-text-field
            v-model="fields.phone"
            md="12"
            lg="12"
            placeholder="+00 0000 0000"
            prepend-icon="mdi mdi-phone"
          >&lt;/e-text-field>
    &lt;e-text-field
            v-model="fields.phone2"
            md="12"
            lg="12"
            placeholder="+00 0000 0000"
            prepend-icon="mdi mdi-phone"
          >&lt;/e-text-field>
    &lt;e-text-field
            v-model="fields.pc"
            md="12"
            lg="6"
            label="P.C."
            placeholder="0000"
          >&lt;/e-text-field>
    &lt;e-select
            v-model="fields.select"
            lg="18"
            md="16"
            :items="['Process 1', 'Process 2', 'Process 3']"
            label="PROCESS"
          />
    &lt;e-checkbox
            v-model="fields.agree"
            md="8"
            lg="6"
            label="AGREE"
            :rules="[checkboxRule]"
          />
  &lt;/e-form>
&lt;/template>
      </div>
      </template>
    </app-box>
  </e-col>
</template>
<script>
export default {
  name: 'FormGrid',
  props: {},
  data: () => ({
    form1Model: null,
    form2Model: null,
    radio: 'M',
    selectModel: null,
    radioModel: null,
    fields: {
      email: '',
      select: '',
      agree: false,
      birthDate: '',
      address: '',
      name: '',
      dni: '',
      pc: '',
      phone: '',
      phone2: '',
      surname: '',
      secondName: '',
      gender: 'M',
      acceptRules: false,
    },
  }),
  methods: {
    validate() {
      this.$refs.form1.validate()
    },
    reset() {
      this.$refs.form1.reset()
    },
    required(val) {
      return !!val || val === 0 || 'field required'
    },
    checkboxRule(val) {
      return !!val || val === 0 || 'you must agree to continue!'
    },
    emailRule(val) {
      return /.+@.+/.test(val) || 'Must be valid e-mail'
    },
  },
}
</script>

<style scoped></style>
