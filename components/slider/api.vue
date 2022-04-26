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
            <td><b>color</b></td>
            <td>string</td>
            <td>primary</td>
            <td>
              Applies specified color to the control - accept the name defined
              in color list into theme.scss file
            </td>
          </tr>
          <tr>
            <td><b>max</b></td>
            <td>string | number</td>
            <td>100</td>
            <td>Sets the maximum allowed value</td>
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
            <td><b>decimal</b></td>
            <td>boolean</td>
            <td>false</td>
            <td>allows the value to receive decimal numbers</td>
          </tr>
          <tr>
            <td><b>thumb-label</b></td>
            <td>boolean</td>
            <td>false</td>
            <td>Show thumb label.</td>
          </tr>
          <tr>
            <td><b>track-color</b></td>
            <td>string</td>
            <td>primary</td>
            <td>Sets the track’s color</td>
          </tr>
          <tr>
            <td><b>thumb-color</b></td>
            <td>string</td>
            <td>primary</td>
            <td>Sets the thumb and thumb label color</td>
          </tr>
          <tr>
            <td><b>label</b></td>
            <td>string</td>
            <td>""</td>
            <td>Sets input label</td>
          </tr>
          <tr>
            <td><b>value</b></td>
            <td>any</td>
            <td>null</td>
            <td>The input’s value</td>
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
  name: 'SliderApi',
}
</script>

<style lang="scss"></style>
