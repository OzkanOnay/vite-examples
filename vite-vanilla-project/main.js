import './style.scss'
import styles from './example.module.scss'

import { debounce } from 'lodash-es';

console.log(debounce);

document.querySelector('#app').innerHTML = `
  <h1 class="${styles.title}">Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
