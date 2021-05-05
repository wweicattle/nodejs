import Vue from 'vue'
var eventBus = new Vue();
Vue.prototype.$bus=eventBus
export {eventBus};