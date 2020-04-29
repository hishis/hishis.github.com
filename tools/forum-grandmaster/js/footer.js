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
    created () {
        console.log(this.content);
        console.log(typeof window.forumGrandmaster);
        console.log(window.forumGrandmaster);
    },
    methods: {
        handleDark () {
            this.$q.dark.set(!this.$q.dark.isActive);
        },
        handleSettingsDefault () {
            this.$q.dialog({
                title: '论坛大师',
                message: '已经恢复默认设置',
            }).onOk(() => {
                // console.log('OK')
            }).onCancel(() => {
                // console.log('Cancel')
            }).onDismiss(() => {
                // console.log('I am triggered on both OK and Cancel')
            });
        },
        handleSettingsSave () {
            this.$q.dialog({
                title: '论坛大师',
                message: '所有设置已经保存',
            }).onOk(() => {
                // console.log('OK')
            }).onCancel(() => {
                // console.log('Cancel')
            }).onDismiss(() => {
                // console.log('I am triggered on both OK and Cancel')
            });
        }
    }
})
