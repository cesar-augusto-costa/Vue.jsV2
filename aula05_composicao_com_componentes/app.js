
Vue.component('list-item', {
    template: '<li v-bind:title="item.name" v-on:click="showName()" v-bind:t-id="id"> {{ item.name }}</li>',
    props: ['item', 'id'],
    methods: {
        showName: function() {
            alert(this.id + " - " + this.item.name)
        }
    }
})

Vue.component('animais', {
    template: `
    <ol>
        <list-item v-for="a in animais" v-bind:key="a.id" v-bind:id="a.id" v-bind:item="a" />
    </ol>
    `,
    props: ['animais']
})

app = new Vue({
    el: '#app',
    data: {
        animais: [
            {id: 1, name: 'Dog'},
            {id: 2, name: 'Cat'},
            {id: 3, name: 'Bird'},
            {id: 4, name: 'Fish'},
        ]

    }
});