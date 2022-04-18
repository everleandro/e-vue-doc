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
            <td><b>icon</b></td>
            <td>boolean</td>
            <td>false</td>
            <td>Designates the button as icon</td>
          </tr>
          <tr>
            <td><b>disabled</b></td>
            <td>boolean</td>
            <td>false</td>
            <td>
              Removes the ability to click or target the component and change
              style
            </td>
          </tr>
          <tr>
            <td><b>color</b></td>
            <td>string</td>
            <td>undefined</td>
            <td>
              Applies specified color to the control - accept the name defined
              in color list into theme.scss file
            </td>
          </tr>
          <tr>
            <td><b>depressed</b></td>
            <td>boolean</td>
            <td>false</td>
            <td>Removes the button box shadow.</td>
          </tr>
          <tr>
            <td><b>ripple</b></td>
            <td>boolean</td>
            <td>true</td>
            <td>
              Applies the <span class="primary--text">e-ripple</span> directive.
            </td>
          </tr>
          <tr>
            <td><b>fab</b></td>
            <td>boolean</td>
            <td>false</td>
            <td>
              Designates the button as a floating-action-button. Button will
              become round.
            </td>
          </tr>
          <tr>
            <td><b>outlined</b></td>
            <td>boolean</td>
            <td>alse</td>
            <td>Makes the background transparent and applies a border.</td>
          </tr>
          <tr>
            <td><b>block</b></td>
            <td>boolean</td>
            <td>false</td>
            <td>Expands the button to 100% of available space.</td>
          </tr>
          <tr>
            <td><b>small</b></td>
            <td>boolean</td>
            <td>false</td>
            <td>Makes the component small.</td>
          </tr>
          <tr>
            <td><b>x-small</b></td>
            <td>boolean</td>
            <td>false</td>
            <td>Makes the component extra small.</td>
          </tr>
          <tr>
            <td><b>x-large</b></td>
            <td>boolean</td>
            <td>false</td>
            <td>Makes the component extra large.</td>
          </tr>
          <tr>
            <td><b>rounded</b></td>
            <td>boolean</td>
            <td>false</td>
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

<style lang="scss"></style>
