import Prism from 'prismjs'
import Vue from 'vue'
Prism.manual = true
const directive = {
  bind(el, binding) {
    const className = binding.value || 'language-markup'
    const pre = document.createElement('pre')
    const code = document.createElement('code')
    code.classList.add(className)
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
