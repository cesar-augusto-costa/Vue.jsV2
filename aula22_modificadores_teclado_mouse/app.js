Vue.config.keyCodes.f1 = 112
Vue.config.keyCodes.f2 = 113


app = new Vue({
    el: '#app',
    data: {

    },
    methods: {
        testeEvento: function (e) {
            console.log(e)
        }
    }
})