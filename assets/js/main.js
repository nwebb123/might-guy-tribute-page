// Vue.component('', {
//     template: `
//     `
// })

new Vue({
    el: '#app',
    data: {
        quotes,
        currentQuote: quotes[8]
    },
    methods: {
        generateRandomQuote: function() {
            const randomIndexOfQuotes = Math.floor(Math.random() * quotes.length)
            this.currentQuote = quotes[randomIndexOfQuotes]
        }
    }
})