// FILTROS GLOBAIS
Vue.filter('phoneMaskBr', function (value) {
    if (value.length == 11) {
        return "(" + value.slice(0,2) + ") " + 
        value.slice(2,3) + " " + value.slice(3,7) + 
        " - " + value.slice(7);
    } else if (value.length == 10 ) {        
        return "(" + value.slice(0,2) + ") " +
        value.slice(2,6) + " - " +
        value.slice(6);
    } else {
        return value;
    }
})

Vue.filter('dateBr', function (value) {
    var date = new Date(value);
    if (date !== undefined){
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    }
    return value
})

Vue.filter('moneyBr', function (value) {
    if (typeof value === 'number') {
        return "R$ " + value.toLocaleString('pt-BR');
    }
    return value;
})

Vue.filter('capitalize', function (value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
})
