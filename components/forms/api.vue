<template>
  <e-col col="24">
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
            <td><b>value</b></td>
            <td>boolean</td>
            <td>false</td>
            <td>A boolean value representing the validity of the form.</td>
          </tr>
          <tr>
            <td><b>lazy</b></td>
            <td>any</td>
            <td>null</td>
            <td>
              If disabled, <code>e-form</code> trigger all input validation
              rules on mounted
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </e-col>
</template>

<script>
export default {
  name: 'FormsApi',
}
</script>

<style lang="scss"></style>
