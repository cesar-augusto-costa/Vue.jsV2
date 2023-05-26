app = new Vue({
    el: '#app',
    data: {
        pessoas: [
            {id: 1, nome: 'Ana', idade: 18, ativo: true},
            {id: 2, nome: 'Elvis', idade: 19, ativo: true},
            {id: 3, nome: 'Pedro', idade: 20, ativo: false},
            {id: 4, nome: 'Carol', idade: 18, ativo: true},
            {id: 5, nome: 'Artur', idade: 19, ativo: false},
            {id: 6, nome: 'Guilherme', idade: 21, ativo: true},
            {id: 7, nome: 'Felipe', idade: 22, ativo: true},
            {id: 8, nome: 'Lucas', idade: 70, ativo: false},
            {id: 9, nome: 'Alexia', idade: 40, ativo: true},
        ]
    },
    computed: {
        pessoasAtivas: function() {
            return this.pessoas.filter(function (p, i) {
                return p.ativo;
            })
        }
    }
})