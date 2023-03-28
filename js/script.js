const {createApp} = Vue;

createApp({
    data() {
        return {
            title: 'The beauty of Japan',
            titleClass: 'text-center mt-3',
            image: 'https://1.bp.blogspot.com/-HP4W38KJnkY/UemzhaXkp-I/AAAAAAAAGNw/pdQis2zTpgA/s640/mount+fuji+japan.png',
            imageClass: 'mx-auto d-block rounded'
        }
    }
}).mount('#app');