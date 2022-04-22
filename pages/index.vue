<template>
  <div class="getting-started">
    <h1 class="">Setup</h1>
    <h2 class="">Install</h2>
    <hr class="e-divider" />
    <p>
      Add
      <code class="code-line">@ever.leandros91/e-vue</code> to your project:
    </p>
    <p>Using <code class="code-line">npm</code></p>
    <!-- prettier-ignore -->
    <div v-prism="{ class: 'language-javascript' }">npm install @ever.leandros91/e-vue</div>
    <p>Or <code class="code-line">yarn</code></p>
    <!-- prettier-ignore -->
    <div v-prism="{ class: 'language-javascript' }"> yarn add @ever.leandros91/e-vue </div>

    <h2>Themes</h2>
    <hr class="e-divider" />
    <p>
      It is mandatory to include a configuration file to adjust the themes of
      the application <code class="code-line">sass/theme.scss</code>
    </p>
    <!-- prettier-ignore -->
    <div v-prism="{ class: 'language-css' }">// Example Theme file

$border-radius-root: 4px;
$root-font-size: 2rem;

$colors: (
  "primary": #f19933,
  "secondary": #2c373c,
  "success": #66bb6a,
  "error": #f44336,
);

// This is mandatory
@import "@ever.leandros91/e-vue/styles/override.scss";</div>

    <h2>Setting Nuxt app</h2>
    <hr class="e-divider" />

    <h3>Install Globally</h3>
    <p>
      inside plugins folder
      <code class="code-line">plugins/e-vue.js</code>:
    </p>
    <!-- prettier-ignore -->
    <div v-prism="{ class: 'language-javascript' }">//plugins/e-vue.js

import Vue from 'vue'
import { EVue } from '@ever.leandros91/e-vue'

// this line automatically imports all components and directives
Vue.use(EVue)
    </div>

    <p>
      Then add <code class="code-line">e-vue.js</code> and
      <code class="code-line">theme.scss</code> to your nuxt.config.js
    </p>
    <!-- prettier-ignore -->
    <div v-prism="{ class: 'language-javascript' }">css: [
      '@ever.leandros91/e-vue/dist/e-vue.css',
      // This is the path to your variables
      '~sass/theme.scss',
      ],
plugins: [ 'plugins/e-vue' ],</div>
    <h2>Setting Vue app</h2>
    <hr class="e-divider" />
    <h3>Install Globally</h3>
    <p>
      inside
      <code class="code-line">src/main.ts</code> or
      <code class="code-line">src/main.js</code>:
    </p>
    <!-- prettier-ignore -->
    <div v-prism="{ class: 'language-javascript' }">// src/main

import "@ever.leandros91/e-vue/dist/e-vue.css";
import Vue from 'vue'
import { EVue } from '@ever.leandros91/e-vue'

// this line automatically imports all components and directives
Vue.use(EVue)
    </div>
    <p>
      Then add sass/theme.scss to your
      <code class="code-line">vue.config.js</code>:
    </p>
    <!-- prettier-ignore -->
    <div v-prism="{ class: 'language-javascript' }">// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        // This is the path to your theme file
        @import "@/sass/theme.scss";
        `,
      }
    }
  }
};
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'GettingStarted',
  data: () => ({}),
})
</script>
<style lang="scss">
.getting-started {
  p {
    margin: 16px 0 !important;
  }
  h2,
  h3 {
    margin: 28px 0 20px 0;
  }

  hr {
    margin-top: 12px;
    margin-bottom: 16px;
  }
  pre {
    border-radius: 5px;
  }

}
</style>
