window.addEventListener('contextmenu', function (event) {
    event.preventDefault();
}, false);
window.addEventListener('keydown', function (event) {
    event.preventDefault();
}, false);

window.scrollTo(0, 0);

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})