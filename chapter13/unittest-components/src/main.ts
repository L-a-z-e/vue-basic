import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {message} from "@/greetings.ts";

console.log(message);
createApp(App).mount('#app')
