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
            <td><b>persistent</b></td>
            <td>boolean</td>
            <td>false</td>
            <td>
              Clicking outside of the element or pressing esc key will not
              deactivate it.
            </td>
          </tr>
          <tr>
            <td><b>value</b></td>
            <td>boolean</td>
            <td>false</td>
            <td>Controls whether the component is visible or hidden.</td>
          </tr>
          <tr>
            <td>fullscreen</td>
            <td>boolean</td>
            <td>false</td>
            <td>Changes layout for fullscreen display.</td>
          </tr>
          <tr>
            <td>maxWidth</td>
            <td>String | Number</td>
            <td>null</td>
            <td>Sets the maximum width for the component.</td>
          </tr>
        </tbody>
      </table>
    </section>
  </e-col>
</template>

<script>
export default {
  name: 'DialogApi',
}
</script>

<style lang="scss"></style>
