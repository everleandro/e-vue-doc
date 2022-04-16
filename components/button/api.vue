<template>
  <e-col col="24">
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
            <td class="primary--text"><b>icon</b></td>
            <td class="secondary--text">boolean</td>
            <td class="info--text">false</td>
            <td>Designates the button as icon</td>
          </tr>
          <tr>
            <td class="primary--text"><b>disabled</b></td>
            <td class="secondary--text">boolean</td>
            <td class="info--text">false</td>
            <td>
              Removes the ability to click or target the component and change
              style
            </td>
          </tr>
          <tr>
            <td class="primary--text"><b>color</b></td>
            <td class="secondary--text">string</td>
            <td class="info--text">undefined</td>
            <td>
              Applies specified color to the control - accept the name defined
              in color list into theme.scss file
            </td>
          </tr>
          <tr>
            <td class="primary--text"><b>depressed</b></td>
            <td class="secondary--text">boolean</td>
            <td class="info--text">false</td>
            <td>Removes the button box shadow.</td>
          </tr>
          <tr>
            <td class="primary--text"><b>ripple</b></td>
            <td class="secondary--text">boolean</td>
            <td class="info--text">true</td>
            <td>
              Applies the <span class="primary--text">e-ripple</span> directive.
            </td>
          </tr>
          <tr>
            <td class="primary--text"><b>fab</b></td>
            <td class="secondary--text">boolean</td>
            <td class="info--text">false</td>
            <td>
              Designates the button as a floating-action-button. Button will
              become round.
            </td>
          </tr>
          <tr>
            <td class="primary--text"><b>outlined</b></td>
            <td class="secondary--text">boolean</td>
            <td class="info--text">alse</td>
            <td>Makes the background transparent and applies a border.</td>
          </tr>
          <tr>
            <td class="primary--text"><b>block</b></td>
            <td class="secondary--text">boolean</td>
            <td class="info--text">false</td>
            <td>Expands the button to 100% of available space.</td>
          </tr>
          <tr>
            <td class="primary--text"><b>small</b></td>
            <td class="secondary--text">boolean</td>
            <td class="info--text">false</td>
            <td>Makes the component small.</td>
          </tr>
          <tr>
            <td class="primary--text"><b>x-small</b></td>
            <td class="secondary--text">boolean</td>
            <td class="info--text">false</td>
            <td>Makes the component extra small.</td>
          </tr>
          <tr>
            <td class="primary--text"><b>x-large</b></td>
            <td class="secondary--text">boolean</td>
            <td class="info--text">false</td>
            <td>Makes the component extra large.</td>
          </tr>
          <tr>
            <td class="primary--text"><b>rounded</b></td>
            <td class="secondary--text">boolean</td>
            <td class="info--text">false</td>
            <td>Applies a large border radius on the button.</td>
          </tr>
        </tbody>
      </table>
    </section>
  </e-col>
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
