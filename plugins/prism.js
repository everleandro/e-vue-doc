import Prism from 'prismjs'
import linesNumbersJS from 'prismjs/plugins/line-numbers/prism-line-numbers'
import linesNumbersCSS from 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import toolbarJS from 'prismjs/plugins/toolbar/prism-toolbar'
import toolbarCSS from 'prismjs/plugins/toolbar/prism-toolbar.css'
import btnCopyJS from 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard'

import Vue from 'vue'
Prism.manual = true

const directive = {
  bind(el, binding) {
    const className = binding.value?.class || binding.value || 'language-markup'
    const pre = document.createElement('pre')
    const code = document.createElement('code')
    pre.setAttribute('data-start', binding.value?.dataStart || '1')
    code.classList.add(className, 'line-numbers')
    code.setAttribute('data-prismjs-copy', 'COPY')
    for (let i = 0; i < (el.childNodes || []).length; i++) {
      code.appendChild(el.childNodes[i].cloneNode(true))
    }
    while (el.childNodes.length > 0) {
      el.removeChild(el.childNodes[0])
    }
    pre.appendChild(code)
    el.appendChild(pre)

    Prism.highlightAllUnder(el)
  },
}
Vue.directive('prism', directive)
