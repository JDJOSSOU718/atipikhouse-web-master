export default {
    methods: {
        getStatusName(status) {
            switch (status) {
                case 'ban':
                    return 'Bloquer'
                    break;
                case 'publish':
                    return 'Publier'
                    break;
                case 'pending':
                    return 'En attente'
                    break;
            
                default:
                    return '---'
                    break;
            }
        },
        getStatusBadge(status){
            switch (status) {
                case 'ban':
                    return 'danger'
                    break;
                case 'publish':
                    return 'success'
                    break;
                case 'pending':
                    return 'info'
                    break;
            
                default:
                    return 'info'
                    break;
            }
        },

        async getFormatedArrays (arr=[], keys=[]){
            let re = []
            arr.forEach(element => {
                let obj = {}
                for (let index = 0; index < keys.length; index++) {
                    const el = keys[index];
                    if(element[el]) obj[el] = element[el]
                }
                re.push(obj)
            });

            return await re
        }
    }
}
