import { ref } from 'vue'

let PlanPickerComponent = {
    template: '#github-user-card-template',
    props:{
        username:{
            type: String,
            required: true
        }
    },
    data(){
        return {
            user:{},
        }
    },
    async created(){
        const response = await axios.get(`https://api.github.com/users/${this.username}`)
        this.user = response.data
    }
}
// Main section
const app = Vue.createApp({
    components: { "github-user-card": PlanPickerComponent },
    data(){
        return {
            usernames: ['Moenul', 'fajlay-rabbi', 'rahaug', 'akryum']
        }
    }
})
.mount('#app')