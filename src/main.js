// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './firebase'
import VueFire from 'vuefire'
import axios from 'axios'

Vue.config.productionTip = false

Vue.config.ignoredElements = [
    'ion-grid',
    'ion-footer',
    'ion-row',
    'ion-col',
    'ion-radio',
    'ion-app',
    'ion-page',
    'ion-header',
    'ion-header-bar',
    'ion-toolbar',
    'ion-option',
    'ion-label',
    'ion-item',
    'ion-button',
    'ion-content',
    'ion-title',
    'ion-list',
    'ion-img',
    'ion-fab-button',
    'ion-fab',
    'ion-card-title',
    'ion-card-content',
    'ion-card',
    'ion-icon',
    'ion-badge',
    'ion-input',
    'ion-tabs',
    'ion-tab',
    'ion-menu',
    'ion-select',
    'ion-select-option',
    'ion-slides',
    'ion-slide',
    'ion-checkbox',
    'price',
    'ion-toggle'
]
Vue.use(VueFire)
Vue.use(axios)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
