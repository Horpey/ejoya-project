var app = new Vue({
    el: '#app',
    data: {
        amount: '',
        notValid: false,
        minAmt: '',
        maxAmt: '',
        apply: false,
        alertMsg: ''
    },
    methods: {
        calFund() {
            if (this.validateAmt(this.amount)) {
                if (this.amount >= 100) {
                    this.notValid = false
                    this.apply = true
                    this.minAmt = 8 * this.amount
                    this.maxAmt = 10 * this.amount
                } else {
                    this.notValid = true
                    this.apply = false
                    this.alertMsg = "Sorry, you can't apply!"
                }
            } else {
                this.notValid = true
                this.alertMsg = 'Enter a valid amount!'
                this.apply = false
            }
        },
        validateAmt(amt) {
            var rgx = /^[0-9]*\.?[0-9]*$/;
            return amt.match(rgx);
        }
    }
})