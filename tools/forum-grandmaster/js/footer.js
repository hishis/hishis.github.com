window.addEventListener('contextmenu', function (event) {
    event.preventDefault();
}, false);
window.addEventListener('keydown', function (event) {
    event.preventDefault();
}, false);

window.scrollTo(0, 0);

if (typeof window.forumGrandmaster === 'undefined') {
    window.location.replace('https://github.com/hishis/forum-grandmaster-for-discuz');
    document.body.innerHTML = '';
}

const app = new Vue({
    el: '#app',
    data: {
        content: 'Hello HTML!',
        FG: window.forumGrandmaster,
        dataChangeTracker: true,
        oo: null,
        bar: false,
    },
    created () {
        this.$q.dark.set('auto');
        let obj = Object.create(null);
        for (let [k, v] of this.FG.m) {
            obj[k] = v;
        }
        this.oo = obj;
    },
    mounted () {
        console.log('Dark Mode:', this.$q.dark.mode);
        setTimeout(() => {
            this.bar = true;
        }, 200);
    },
    methods: {
        handleOpen (site) {
            window.open(site);
        },
        handleClose () {
            window.opener = null;
            window.open('', '_self');
            window.close();
        },
        handleSettingsDefault () {
            this.$q.dialog({
                title: '提示信息',
                message: '已经恢复默认设置',
            }).onOk(() => {
                // console.log('OK');
            }).onCancel(() => {
                // console.log('Cancel');
            }).onDismiss(() => {
                // console.log('I am triggered on both OK and Cancel');
                window.location.reload();
            });
        },
        handleSettingsSave () {
            let that = this;
            Object.getOwnPropertyNames(that.oo).forEach(function(key){
                that.FG.m.set(key, that.oo[key]);
            });
            this.$q.dialog({
                title: '提示信息',
                message: '所有设置已经保存',
            }).onOk(() => {
                // console.log('OK');
            }).onCancel(() => {
                // console.log('Cancel');
            }).onDismiss(() => {
                // console.log('I am triggered on both OK and Cancel');
            });
        }
    }
})
