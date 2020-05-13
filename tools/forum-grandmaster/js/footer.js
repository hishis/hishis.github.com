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
        this.FG.data.home = this.FG.data.GitHub ? 'https://github.com/hishis/forum-grandmaster-for-discuz' : 'https://greasyfork.org/scripts/400250';
        this.FG.data.updateURL = this.FG.data.GitHub ? 'https://cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/main.user.js?r='.concat(Math.random()) : 'https://greasyfork.org/scripts/400250/code/main.user.js';
        let obj = Object.create(null);
        for (let [k, v] of this.FG.m) {
            obj[k] = v;
        }
        this.oo = obj;
    },
    mounted () {
        console.log('Dark Mode:', this.$q.dark.mode);
        moment.locale(window.navigator.language);
        if (typeof this.FG.data.GitHub !== 'boolean') {
            setTimeout(() => {
                this.notification.title = '论坛大师';
                this.notification.content = '<p>这是一个重要更新，必需更新之后才能继续使用。</p><p>点击 <span class="text-primary">OK</span> 安装新版（推荐），或者点击 <span>CANCEL</span> 安装旧版。</p>';
                this.$q.dialog({
                    title: this.notification.title,
                    message: this.notification.content,
                    html: true,
                    cancel: true,
                    persistent: true,
                }).onOk(() => {
                    // console.log('>>>> OK')
                    window.open(this.FG.data.home);
                }).onCancel(() => {
                    // console.log('>>>> Cancel')
                    window.open('https://cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/main.user.js?r='.concat(Math.random()));
                }).onDismiss(() => {
                    // console.log('I am triggered on both OK and Cancel')
                    window.open('https://cdn.jsdelivr.net/gh/hishis/forum-grandmaster-for-discuz/main.user.js?r='.concat(Math.random()));
                })
            }, 1234);
            setTimeout(() => {
                if (!!document.getElementsByTagName('main').length) {
                    document.getElementsByTagName('main')[0].style.display = 'none';
                }
            }, 2222);
        }
        !!this.FG.data.GitHub || setTimeout(() => {
            if (typeof this.FG.data.version === 'string' && !!this.FG.data.version && typeof this.FG.script.version === 'string' && this.FG.data.version !== this.FG.script.version) {
                this.notification.title = '论坛大师新版发布';
                let brackets = (typeof this.FG.data.update_time === 'string') ? '（<span class="text-secondary">' + moment(this.FG.data.update_time).format('lll') + '</span>）' : '';
                this.notification.content = '<p class="q-mb-none"><span class="text-primary">最新版本</span>：<span class="text-red">' + this.FG.data.version + '</span>' + brackets + '</p><p class="q-mb-none"><span class="text-primary">本地版本</span>：<span class="text-warning">' + this.FG.script.version + '</span></p><p class="q-mb-none">建议更新之后再修改设置，以免引起设置混乱！</p>';
                this.$q.dialog({
                    title: this.notification.title,
                    message: this.notification.content,
                    html: true,
                    cancel: true,
                    persistent: true,
                }).onOk(() => {
                    // console.log('>>>> OK')
                    window.open(this.FG.data.home);
                }).onCancel(() => {
                    // console.log('>>>> Cancel')
                }).onDismiss(() => {
                    // console.log('I am triggered on both OK and Cancel')
                })
            }
        }, 4444);
    },
    methods: {
        handleOpen (site) {
            let href = site;
            if (href === 'home') {
                href = this.FG.data.home;
            }
            window.open(href);
        },
        handleScreen () {
            if (document.fullscreenElement === null) {
                document.body.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
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
