import Vue from 'vue';
import App from './App';

import router from './router';
import itemView from './components/ItemView';

Vue.component('item',itemView);

/* eslint-disable no-new */
new Vue({
  el: '#app',

  router,
  render: h => h(App),
});
