Vue.config.debug = true;
Vue.config.devtools = true;

Vue.component('Xtitle', {
  template: `<div >{{title}}</div>`,
  data() {
    return {
      checked: false,
      title: 'Check me'
    }
  },
  methods: {

  }
});
var app = new Vue({
	el: '#root',
	
	
})
