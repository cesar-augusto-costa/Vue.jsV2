app = new Vue({
    el: '#app',
    data: {
        numero: 2,
        frutasEx1: [
            'Maça',
            'Uva',
            'Pera',
            'Abacaxi'
        ],
        frutasEx2: [
            {nome: 'Maça'},
            {nome: 'Uva'},
            {nome: 'Manga'},
            {nome: 'Abacaxi'},
        ],
        pessoaEx3: {
            nome: 'Ana',
            sexo: 'F',
            idade: 18,
            created: new Date().toLocaleDateString(),
            perfisId: [1, 2, 3, 4, 5]
        }
    }
})