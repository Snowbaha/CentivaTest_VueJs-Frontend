import { createApp } from 'vue'
import App from './App.vue'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faXmark, faCircleInfo, faCircleCheck, faExclamationTriangle, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faXmark);
library.add(faCircleInfo);
library.add(faCircleCheck);
library.add(faExclamationTriangle);
library.add(faExclamationCircle);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
