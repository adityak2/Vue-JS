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
        changeTitle() { // Passing an argument and then subsequently assigning it to this.tile would change value of the title
            this.title = "new value"
        }
    }    
})

app.mount('#app')
