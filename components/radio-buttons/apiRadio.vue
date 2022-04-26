<template>
  <e-row>
    <e-col col="24">
      <h2 class="mb-4">Api e-radio</h2>
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
              <td><b>color</b></td>
              <td>string</td>
              <td>primary</td>
              <td>
                Applies specified color to the control - accept the name defined
                in color list into theme.scss file
              </td>
            </tr>
            <tr>
              <td class="primary--text"><b>disabled</b></td>
              <td class="secondary--text">boolean</td>
              <td class="info--text">false</td>
              <td>Removes the ability to click or target the component.</td>
            </tr>

            <tr>
              <td class="primary--text"><b>label</b></td>
              <td class="secondary--text">string</td>
              <td class="info--text">undefined</td>
              <td>Sets input label</td>
            </tr>
            <tr>
              <td class="primary--text"><b>readonly</b></td>
              <td class="secondary--text">boolean</td>
              <td class="info--text">false</td>
              <td>Puts input in readonly state</td>
            </tr>
            <tr>
              <td class="primary--text"><b>inputValue</b></td>
              <td class="secondary--text">any</td>
              <td class="info--text">undefined</td>
              <td>The input’s value</td>
            </tr>
          </tbody>
        </table>
      </section>
    </e-col>
  </e-row>
</template>

<script>
export default {
  name: 'RadioButtonsApiRadio',
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
