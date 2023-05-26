data = {
    numero: 10,
    fim: false
};

app = new Vue({
    el: '#app',
    data: {
        numero: 10,
        n1: undefined
    },
    beforeCreate: function() {
        console.log("beforeCreate", this.numero);
    },
    created: function() {
        console.log("created", this.numero);
    },
    beforeMount: function() {
        console.log("beforeMount", this.numero);
    },
    mounted: function() {
        console.log("mounted", this.numero);
    },
    beforeUpdate: function() {
        console.log("beforeUpdate", this.numero);
    },
    updated: function() {
        console.log("updated", this.numero);
    },
    beforeDestroy: function() {
        console.log("beforeDestroy", this.numero);
    },
    destroyed: function() {
        console.log("destroyed", this.numero);
        this.fim = true;
    },
});
