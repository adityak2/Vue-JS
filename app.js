/**
 * 
 * Data Function
 * 
 */

const app = Vue.createApp({
    data() {
        return {
            title: 'Value associated is not hard-coded',
            test_variable_1: 'test1',
            test_variable_2: 'test2'
        }
    },
    methods : {
        changeTitle() {
            this.title = "new value"
        }
    }    
})

app.mount('#app')
