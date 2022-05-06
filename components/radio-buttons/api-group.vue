<template>
  <e-col col="24">
      <h2 class="v-heading text-h3 text-sm-h3 mb-4">Api e-radio-group</h2>
      <section>
        <table class="api-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>row</b></td>
              <td>boolean</td>
              <td>false</td>
              <td>Displays radio buttons in row</td>
            </tr>
            <tr>
              <td><b>disabled</b></td>
              <td>boolean</td>
              <td>false</td>
              <td>Disable the input</td>
            </tr>
            <tr>
              <td><b>detail</b></td>
              <td>String</td>
              <td>null</td>
              <td>displays a text message below the component</td>
            </tr>
            <tr>
              <td><b>dense</b></td>
              <td>boolean</td>
              <td>false</td>
              <td>
                Apply <code class="code-line">display:none</code> to Hint text
              </td>
            </tr>
            <tr>
              <td><b>readonly</b></td>
              <td>boolean</td>
              <td>false</td>
              <td>Puts input in readonly state</td>
            </tr>
            <tr>
              <td>mandatory</td>
              <td>boolean</td>
              <td>false</td>
              <td>Forces a value to always be selected (if available).</td>
            </tr>
            <tr>
              <td><b>rules</b></td>
              <td>array</td>
              <td>[ ]</td>
              <td>
                Accepts a mixed array of types function, boolean and string.
                Functions pass an input value as an argument and must return
                either true / false or a string containing an error message. The
                input field will enter an error state if a function returns (or
                any value in the array contains) false or is a string
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </e-col>
</template>

<script>
export default {
  name: 'RadioButtonsApiGroup',
}
</script>

<style lang="scss">
table {
  width: 100%;
  border-spacing: 0;
  border: thin solid rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  & > tbody > tr:not(:last-child) > td:last-child,
  & > tbody > tr:not(:last-child) > td,
  & > tbody > tr:not(:last-child) > th:last-child,
  & > tbody > tr:not(:last-child) > th,
  & > thead > tr:last-child > th {
    border-bottom: thin solid rgba(0, 0, 0, 0.12);
  }
  margin-bottom: 48px;
  th {
    text-align: left;
    padding: 0 16px;
    color: rgba(0, 0, 0, 0.6);
    user-select: none;
    font-size: 0.75rem;
    height: 48px;
  }
  td {
    color: rgba(0, 0, 0, 0.87);
    padding: 8px 16px !important;
  }
}
</style>
