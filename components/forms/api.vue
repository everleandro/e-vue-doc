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
          <tr>
            <td><b>grid</b></td>
            <td>boolean</td>
            <td>false</td>
            <td>
              Make <code class="code-line">e-form</code> a
              <code class="code-line">e-row</code> container, all fields now
              have <code class="code-line">col</code> ,
              <code class="code-line">xs</code> ,
              <code class="code-line">sm</code> ,
              <code class="code-line">md</code> ,
              <code class="code-line">leg</code> props for grid behavior
            </td>
          </tr>
          <tr>
            <td><b>outlined</b></td>
            <td>boolean</td>
            <td>false</td>
            <td>
              Set <code class="code-line">outlined</code> all fields of
              <code>form</code>
            </td>
          </tr>
          <tr>
            <td><b>Label-min-width</b></td>
            <td>string</td>
            <td>undefined</td>
            <td>Set <code class="code-line">min-width</code> label style</td>
          </tr>
          <tr>
            <td><b>inputs-hover-state</b></td>
            <td>boolean</td>
            <td>false</td>
            <td>add hover animation to all fields</td>
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
