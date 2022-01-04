
const appVue = httpVueLoader('./components/app.vue')

new Vue({
  el: '#root',
  components: {
    appVue
  }
})