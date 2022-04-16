import Prism from 'prismjs'
import Vue from 'vue'
require('prismjs/plugins/line-numbers/prism-line-numbers')
require('prismjs/plugins/toolbar/prism-toolbar')
require('prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard')

Prism.manual = true

const directive = {
  bind(el, binding) {
    let className = binding.value?.class || binding.value || 'language-markup'
    const pre = document.createElement('pre')
    const code = document.createElement('code')
    pre.setAttribute('data-start', binding.value?.dataStart || '1')
    if (!binding.value?.lineNumbers === false)
      className = `${className} line-numbers`
    code.classList.add(className)
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
