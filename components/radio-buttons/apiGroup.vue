<template>
  <e-row>
    <e-col col="24">
      <h2 class="v-heading text-h3 text-sm-h3 mb-4">Api e-radio-group</h2>
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
              <td class="primary--text"><b>column</b></td>
              <td class="secondary--text">boolean</td>
              <td class="info--text">true</td>
              <td>Displays radio buttons in column</td>
            </tr>
            <tr>
              <td class="primary--text"><b>disabled</b></td>
              <td class="secondary--text">boolean</td>
              <td class="info--text">false</td>
              <td>
                Disable the input
              </td>
            </tr>
            <tr>
              <td class="primary--text"><b>mandatory</b></td>
              <td class="secondary--text">boolean</td>
              <td class="info--text">false</td>
              <td>
                Forces a value to always be selected (if available).
              </td>
            </tr>
            <tr>
              <td class="primary--text"><b>max</b></td>
              <td class="secondary--text">number | string</td>
              <td class="info--text">undefined</td>
              <td>
                Sets a maximum number of selections that can be made.
              </td>
            </tr>
            <tr>
              <td class="primary--text"><b>multiple</b></td>
              <td class="secondary--text">boolean</td>
              <td class="info--text">false</td>
              <td>
                Allow multiple selections. The value prop must be an array.
              </td>
            </tr>
            <tr>
              <td class="primary--text"><b>readonly</b></td>
              <td class="secondary--text">boolean</td>
              <td class="info--text">false</td>
              <td>
                Puts input in readonly state
              </td>
            </tr>
            <tr>
              <td class="primary--text"><b>row</b></td>
              <td class="secondary--text">boolean</td>
              <td class="info--text">false</td>
              <td>
                Displays radio buttons in row
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
  name: 'ButtonApi',
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
