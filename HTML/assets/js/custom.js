const app = new Vue({
    el: '#app',
    data() {
        return {
            amount: '',
            notValid: false,
            minAmt: '',
            maxAmt: '',
            apply: false,
            sending: false,
            alertMsg: '',
            formDetails: {
                firstName: '',
                lastName: '',
                artistName: '',
                spotifyProfile: '',
                email: '',
                phoneNumber: '',
                amount: ''
            }
        }
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
        submitDetails() {
            this.formDetails.date = this.getTime()
            // let userdata = this.formDetails
            let userdata = {
                user: this.formDetails
            };
            this.sending = true;
            axios({
                    method: 'post',
                    url: 'https://v2-api.sheety.co/f4753798250d9d18db685863982f7bcf/ejoyaAdvanceFund/advanceFund',
                    data: userdata
                }).then(function (response) {
                    console.log(this.sending + 'Hello')
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(this.sending + ' Hello')
                })
        },
        getTime() {
            var today = new Date();
            var date =
                today.getFullYear() +
                '-' +
                (today.getMonth() + 1) +
                '-' +
                today.getDate();
            var time =
                today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
            var dateTime = date + ' ' + time;
            return dateTime;
        },
        validateAmt(amt) {
            var rgx = /^[0-9]*\.?[0-9]*$/;
            return amt.match(rgx);
        }
    }
})