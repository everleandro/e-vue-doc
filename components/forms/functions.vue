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
            <td><b>validate</b></td>
            <td>boolean</td>
            <td><span class="secondary--text">( ) : </span> boolean</td>
            <td>
              Validates all registered inputs. Returns true if successful and
              false if not.
            </td>
          </tr>
          <tr>
            <td><b>reset</b></td>
            <td>boolean</td>
            <td><span class="secondary--text">( ) : </span> void</td>
            <td>Resets validation of all registered inputs.</td>
          </tr>
        </tbody>
      </table>
    </section>
  </e-col>
</template>

<script>
export default {
  name: 'FormsFunctions',
}
</script>

<style lang="scss"></style>
