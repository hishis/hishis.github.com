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
        content: 'Hello HTML!'
    },
    created: function () {
        console.log(this.content);
        console.log(typeof window.forumGrandmaster);
        console.log(window.forumGrandmaster);
    }
})
