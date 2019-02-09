// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyCKPRT8T7LfG2SnbCPIAJ1AHfA-OD6Wg38",
  authDomain: "chat-app-fc30b.firebaseapp.com",
  databaseURL: "https://chat-app-fc30b.firebaseio.com",
  projectId: "chat-app-fc30b",
  storageBucket: "chat-app-fc30b.appspot.com",
  messagingSenderId: "898492518190"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
