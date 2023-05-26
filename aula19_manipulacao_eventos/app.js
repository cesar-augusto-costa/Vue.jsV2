app = new Vue({
    el: '#app',
    data: {
        numero: 0
    },
    methods: {
        greet: function (event) {
            event.preventDefault();
            alert("Olá usuário")
            console.log(event.target.tagName);
        },
        message: function (msg, e) {
            if (e) {
                alert("Mensagem: " + msg)
            } else {
                alert(msg)
            }
           
        }
    },
});