import Controls from './components/Controls.vue'
import Detail from './components/Detail.vue'
import Gallery from './components/Gallery.vue'
import Panel from './components/Panel.vue'
import Store from './store'

// Install the components
export function install (Vue) {
  Vue.component('controls', Controls)
  Vue.component('detail', Detail)
  Vue.component('gallery', Gallery)
  Vue.component('panel', Panel)
  Vue.component('store', Store)
  /* -- Add more components here -- */
}

// Expose the components
export {
  Controls,
  Detail,
  Gallery,
  Panel,
  Store
  /* -- Add more components here -- */
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: VERSION,
  install
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
