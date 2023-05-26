app = new Vue({
    el: '#app',
    data: {
        numero: 2,
        frutasEx1: [
            'Maça',
            'Uva',
            'Pera',
            'Abacaxi',
            'Kiwi',
        ],
        frutasEx2: [
            {nome: 'Maça'},
            {nome: 'Uva'},
            {nome: 'Manga'},
            {nome: 'Abacaxi'},
            {nome: 'Kiwi'},
        ],
        pessoaEx3: {
            nome: 'Ana',
            sexo: 'F',
            idade: 18,
            created: new Date().toLocaleDateString(),
            perfisId: [1, 2, 3, 4, 5]
        },
    },
    computed: {
        frutasComLetraI: function () {
            return this.frutasEx1.filter(function (valor, indice) {
                return valor.indexOf("i") > -1
            });
        }
    }
})