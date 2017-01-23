/**
 * Created by Elitebook 1020 on 09-Jan-17.
 */
let app = new Vue({
    el:'#app',
    data: {
        form: {
            txtName: null,
            txtAge: null,
            txtAddress: null,
            txtPhone: null
        },
        txtName: null,
        persons: []
    },
    methods: {
        addPerson: function(event) {
            console.log(JSON.stringify(this.form));
            this.persons.push(JSON.parse(JSON.stringify(this.form)));
            console.log(this.persons[0]);
            console.log(this.txtName);
            $('#flash').slideDown().delay(1400).slideUp();
            this.form.txtName = '';
            this.form.txtAge='';
            this.form.txtAddress='';
            this.form.txtPhone='';
        }
    }
})