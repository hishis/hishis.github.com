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
        content: 'Hello HTML!',
        FG: window.forumGrandmaster,
    },
    created () {
        console.log(this.content);
    },
    methods: {
        showLoading () {
            this.$q.loading.show();
            setTimeout(() => {
                this.$q.loading.hide();
            }, 1000);
        },
        handleDark () {
            this.$q.dark.set(!this.$q.dark.isActive);
        },
        handleSettingsDefault () {
            this.FG.s = 0;
            this.$q.dialog({
                title: '提示信息',
                message: '已经恢复默认设置',
            }).onOk(() => {
                // console.log('OK')
            }).onCancel(() => {
                // console.log('Cancel')
            }).onDismiss(() => {
                // console.log('I am triggered on both OK and Cancel')
                window.location.reload();
            });
        },
        handleSettingsSave () {
            this.FG.s = 1;
            this.$q.dialog({
                title: '提示信息',
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
