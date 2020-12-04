//- require('./bootstrap');
//- window.Vue = require('vue');
//- Vue.component('example-component', require('./components/ExampleComponent.vue').default);

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import appArticle from './components/Article/App.vue';
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueRouter);
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios);

import ArticleIndex from './components/Article/ArticleIndex.vue';
import ArticleCreate from './components/Article/ArticleCreate.vue';
import ArticleShow from './components/Article/ArticleShow.vue';
import ArticleEdit from './components/Article/ArticleEdit.vue';

const routesArticle = [{
        name: 'home',
        path: '/',
        component: ArticleIndex
    },
    {
        name: 'create',
        path: '/article/create',
        component: ArticleCreate
    },
    {
        name: 'edit',
        path: '/article/edit/:id',
        component: ArticleEdit
    },
    {
        name: 'show',
        path: '/article/show/:id',
        component: ArticleShow
    }
];

const router = new VueRouter({
    mode: 'history',
    routes: routesArticle
});
const article = new Vue(Vue.util.extend({
    router
}, appArticle)).$mount('#article');
