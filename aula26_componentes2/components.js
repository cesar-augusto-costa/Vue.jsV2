var TableHead = {
    template: `
        <thead>
            <tr class="text-center">
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Balance</th>
                <th>Action</th>
            </tr>
        </thead>    
    `
}
// Vue.component('table-head', TableHead)

var TableFoot = {
    template: '#table-foot',
    props: {
        filtroGrid: String,
        dataSource: Array,
        dataSourceGrid: Array
    }
}
// Vue.component('table-foot', TableFoot)

var TableBody = {
    template: `
        <tbody>
            <!-- <tr v-for="p in dataSource"> -->
            <tr v-for="(p, key) in dataSourceGrid">
                <td> {{ p.name | capitalize }} </td>
                <td> {{ p.email }} </td>
                <td> {{ p.phone | phoneMaskBr}} </td>
                <td> {{ p.date | dateBr }} </td>
                <td class="text-center"> {{ p.balance | moneyBr }} </td>
                <td class="text-center">
                    <button class="btn btn-danger" @click.prevent="removeItem($event, key)">
                        <i class="fa fa-times"></i>
                    </button>
                </td>
            </tr>
        </tbody>
    `,
    props: {
        dataSourceGrid: Array,
        dataSource: Array,
    },
    methods: {
        removeItem: function (e, k) {
            this.dataSource.splice(k, 1);
        }
    },
}
// Vue.component = ('TableBody', TableBody)

var TableGrid = {
    template: `
        <div class="row">
            <div class="col">
                <table class="table table-striped table-bordered table-hover">
                    <table-head :class="{'thead-dark': 1 == 1}">
                    </table-head>
                    
                    <table-body :data-source-grid='dataSourceGrid' :dataSource='dataSource'>
                    </table-body> 

                    <table-foot :filtroGrid='filtroGrid' :dataSource='dataSource' :data-source-grid='dataSourceGrid'>
                
                    </table-foot>
                </table>
            </div>
        </div>  
    `,
    components: {
        TableHead: TableHead,
        TableBody: TableBody,
        TableFoot: TableFoot
    },
    props: {
        filtroGrid: String,
        dataSource: Array,
        dataSourceGrid: Array
    }
}
Vue.component('TableGrid', TableGrid)

Vue.component('DataGrid', {
    template: '#DataGrid',
    data: function () {
        return {
            filtroGrid: ''
        }
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
    props: ['dataSource']
})