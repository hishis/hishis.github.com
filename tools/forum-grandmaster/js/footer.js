window.addEventListener('contextmenu', function (event) {
    event.preventDefault();
}, false);
window.addEventListener('keydown', function (event) {
    event.preventDefault();
}, false);

window.scrollTo(0, 0);

if (typeof window.forumGrandmaster === 'undefined') {
    window.location.href = 'https://github.com/hishis/forum-grandmaster-for-discuz';
    alert();
}

const app = new Vue({
    el: '#app',
    data: {
        content: 'Hello HTML!',
        FG: window.forumGrandmaster,
    },
    created () {
        this.$q.dark.set('auto');
        console.log(this.content);
    },
    mounted () {
        console.log('Dark Mode:', this.$q.dark.mode);
    },
    methods: {
        showLoading () {
            this.$q.loading.show();
            setTimeout(() => {
                this.$q.loading.hide();
            }, 1000);
        },
        handleClose () {
            window.opener = null;
            window.open('', '_self');
            window.close();
            !!~window.navigator.userAgent.indexOf('Firefox') && window.location.replace('about:blank');
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
                window.opener = null;
                window.open('', '_self');
                window.close();
                !!~window.navigator.userAgent.indexOf('Firefox') && window.location.replace('about:blank');
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
