app = new Vue({
    el: '#app',
    data: {
        dataSource: pessoas,
        filtroGrid: '',
    },
    // dados filtrados
    computed: {
        dataSourceGrid: function () {
            var $this = this;
            if ($this.filtroGrid === '') {
                return $this.dataSource;
            }
            return $this.dataSource.filter(function (v, i) {
                for (const key in v) {
                    if (v.hasOwnProperty(key)) {
                        result = v[key].toString().toLowerCase().indexOf($this.filtroGrid.toLowerCase()) > -1
                        if (result) {
                            return true;
                        }
                    }
                }
                return false;
            });
        },
    },
    methods: {
        removeItem: function (e, k) {
            this.dataSource.splice(k, 1);
        }
    },
});

// 20:30