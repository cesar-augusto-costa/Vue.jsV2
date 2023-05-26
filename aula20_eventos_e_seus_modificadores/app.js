app = new Vue({
    el: '#app',
    data: {
        listaDeTarefas: [],
        todo: {
            text: ''
        }
    },
    methods: {
        cadastrarTarefa: function (e) {
            this.listaDeTarefas.push(this.todo.text);
            this.todo.text = '';
            // e.preventDefault();
            // return false;
        },
        excluirTarefa: function (e, index) {
            this.listaDeTarefas.splice(index, 1)
        }
    }
})