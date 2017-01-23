/**
 * Created by Elitebook 1020 on 23-Jan-17.
 */
let app = new Vue({
    el: '#app',
    data: {
        form: {
            txtName: null,
            txtAge: null,
            txtAddress: null
        },
        persons: []
    },
    methods:{
        addPerson: function () {
            this.persons.push( JSON.parse(JSON.stringify(this.form)));
            $('#flash').slideDown().delay(1600).slideUp();
            this.form.txtName='';
            this.form.txtAddress='';
            this.form.txtAge='';
        }
    }
});