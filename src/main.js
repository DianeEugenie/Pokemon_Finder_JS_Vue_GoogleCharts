import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue();

Vue.filter(
  'upperCase', function (value){
      if (value) {
        return value.toUpperCase();
      }
})
Vue.filter(
  'capitalize', function (value){
      if (value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
})


new Vue({
  render: h => h(App),
}).$mount('#app')
