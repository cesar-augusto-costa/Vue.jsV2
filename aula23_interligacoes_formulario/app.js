app = new Vue({
    el: '#app',
    data: {
        forms: {
            input: '',
            textarea: '',
            checkbox: {
                checkedNames: [],
                checked: undefined,
                checked2: undefined,
            },
            radio: undefined,
            select: {
                single: '',
                multiple: []
            },
            lazy: '',
            number: undefined,
            trim: '',
        },
    },
})