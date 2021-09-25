import { createApp } from 'vue'
import App from './App.vue'

import('./async.js').then(mod => console.log(mod));

createApp(App).mount('#app')
