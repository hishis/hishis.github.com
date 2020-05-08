window.addEventListener('contextmenu', event => {
    event.preventDefault();
}, false);
window.addEventListener('keydown', event => {
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
        notification: {
            title: '',
            content: '',
        },
        FG: window.forumGrandmaster,
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
            this.notification.title = '系统提示';
            this.notification.content = '论坛大师系统设置页面正在开发。目前<span class="text-secondary">部分功能</span>选项<span class="text-positive">只能查看</span>，<span class="text-primary">不能修改</span>。';
            this.bar = !!this.FG.data.from;
        }, 1000);
        setTimeout(() => {
            if (typeof this.FG.script.version === 'string' && typeof this.FG.script.ServerVersion === 'string' && this.FG.script.version !== this.FG.script.ServerVersion) {
                this.notification.title = '论坛大师更新提示';
                this.notification.content = '论坛大师油猴脚本<span class="text-primary">本地版本</span>：<span class="text-positive">' + this.FG.script.version + '</span>，<span class="text-primary">最新版本</span>：<span class="text-positive">' + this.FG.script.ServerVersion + '</span>。建议您更新之后再修改设置，以免引起设置混乱。';
                this.bar = true;
            }
        }, 10000);
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
            // Clear all settings
            this.oo = {};
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
        handleSettingsConvert () {
            let that = this;
            Object.getOwnPropertyNames(that.oo).forEach(function(key){
                that.FG.m.set(key, that.oo[key]);
            });
        },
        handleSettingsSave () {
            // Save all settings
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
