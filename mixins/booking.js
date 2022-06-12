export default {
    data() {
        return {
            baseUrl: process.env.APIBASEURI
        }
    },
    methods: {
        async addBooking(data){
            const getTokken = this.$store.state.authUser.login_session_token
            const result = await this.$axios.$post(`${this.baseUrl}/api/v1/booking`, data, {
                withCredentials: false,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    authorization: getTokken
                }
            })
            
            if (result.success) {
                return result.data
            }else{
                return false
            }

        },
    }
}