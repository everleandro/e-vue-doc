<template>
  <e-row>
    <e-col col="24">
      <h2 class="v-heading text-h3 text-sm-h3 mb-4">Api e-radio</h2>
      <section>
        <table>
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
              <td class="primary--text"><b>color</b></td>
              <td class="secondary--text">string</td>
              <td class="info--text">undefined</td>
              <td>
                Applies specified color to the control - it can be the name of
                material color (for example success or purple) or css color
                (#033 or rgba(255, 0, 0, 0.5)).
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
              <td class="primary--text"><b>value</b></td>
              <td class="secondary--text">any</td>
              <td class="info--text">undefined</td>
              <td>
                The value used when the component is selected in a group. If not
                provided, the index will be used.
              </td>
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
