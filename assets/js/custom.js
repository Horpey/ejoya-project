var app = new Vue({
    el: '#app',
    data: {
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
            let userdata = this.formDetails
            console.log(userdata)
            this.sending = true;
            axios.post('https://v2-api.sheety.co/ba50ebf04d8036a163116772ea2c8711/horpeyWallpaper/users', userdata)
                .then(function (response) {
                    console.log(this.sending + 'Hello')
                    console.log(response);
                })
                .catch(function (error) {
                    this.sending = false
                    console.log(this.sending + ' Hello')

                    // console.log(error);
                })

            // $.ajax({
            //     url: 'https://v2-api.sheety.co/ba50ebf04d8036a163116772ea2c8711/horpeyWallpaper/users',
            //     type: 'POST',
            //     data: userdata,
            //     success: function (data) {
            //         this.sending = false
            //     },
            //     error: function (error) {
            //         this.sending = false
            //     }
            // });
        },
        validateAmt(amt) {
            var rgx = /^[0-9]*\.?[0-9]*$/;
            return amt.match(rgx);
        }
    }
})