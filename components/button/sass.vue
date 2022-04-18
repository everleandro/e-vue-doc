<template>
  <e-col col="24">
    <section>
      <table class="sass-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>$btn-border-radius</td>
            <td>
              <span class="primary--text">$border-radius-root</span>
              <span class="info--text">!default;</span>
            </td>
          </tr>
          <tr>
            <td>$btn-font-weight</td>
            <td>500 <span class="info--text">!default;</span></td>
          </tr>
          <tr>
            <td>$btn-letter-spacing</td>
            <td>0.0892857143em <span class="info--text">!default;</span></td>
          </tr>
          <tr>
            <td>$btn-border-width</td>
            <td>2px <span class="info--text">!default;</span></td>
          </tr>
          <tr>
            <td>$btn-rounded-border-radius</td>
            <td>28px <span class="info--text">!default;</span></td>
          </tr>
          <tr>
            <td>$btn-text-transform</td>
            <td>uppercase <span class="info--text">!default;</span></td>
          </tr>
          <tr>
            <td>btn-transition-duration</td>
            <td>0.28s <span class="info--text">!default;</span></td>
          </tr>
          <tr>
            <td>$btn-states</td>
            <td>
              <pre>
(
   <span class="primary--text">'focus'</span> : 0.05,
   <span class="primary--text">'hover'</span> : 0.1,
   <span class="primary--text">'active'</span> : 0.3,
)
            </pre>
            </td>
          </tr>
          <tr>
            <td>$btn-font-sizes</td>
            <td>
              <pre>
(
  <span class="primary--text">'x-small'</span> : 0.625rem,
  <span class="primary--text">'small'</span> : 0.75rem,
  <span class="primary--text">'default'</span> : 0.875rem,
  <span class="primary--text">'large'</span> : 0.875rem,
  <span class="primary--text">'x-large'</span> : 1rem,
)
              </pre>
            </td>
          </tr>
          <tr>
            <td>$fab-font-sizes</td>
            <td>
              <pre>
(
  <span class="primary--text">'x-small'</span> : 18px,
  <span class="primary--text">'small'</span> : 20px,
  <span class="primary--text">'default'</span> : 24px,
  <span class="primary--text">'large'</span> : 28px,
  <span class="primary--text">'x-large'</span> : 32px,
)
              </pre>
            </td>
          </tr>
          <tr>
            <td>$fab-height</td>
            <td>
              <pre>
(
  <span class="primary--text">'x-small'</span> : 32px,
  <span class="primary--text">'small'</span> : 40px,
  <span class="primary--text">'default'</span> : 56px,
  <span class="primary--text">'large'</span> : 64px,
  <span class="primary--text">'x-large'</span> : 72px,
)
              </pre>
            </td>
          </tr>
          <tr>
            <td>$btn-height</td>
            <td>
              <pre>
(
  <span class="primary--text">'x-small'</span> : 35px,
  <span class="primary--text">'small'</span> : 40px,
  <span class="primary--text">'default'</span> : 45px,
  <span class="primary--text">'large'</span> : 45px,
  <span class="primary--text">'x-large'</span> : 50px,
)
              </pre>
            </td>
          </tr>
          <tr>
            <td>$icon-font-sizes</td>
            <td>
              <pre>
(
  <span class="primary--text">'x-small'</span> : 18px,
  <span class="primary--text">'small'</span> : 20px,
  <span class="primary--text">'default'</span> : 24px,
  <span class="primary--text">'large'</span> : 28px,
  <span class="primary--text">'x-large'</span> : 32px,
)
              </pre>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </e-col>
</template>

<script>
export default {
  name: 'ButtonSass',
}
</script>

<style lang="scss"></style>
