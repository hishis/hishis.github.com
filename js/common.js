/**
 *                    .::::.
 *                  .::::::::.
 *                 :::::::::::  FUCK YOU
 *             ..:::::::::::'
 *           '::::::::::::'
 *             .::::::::::
 *        '::::::::::::::..
 *             ..::::::::::::.
 *           ``::::::::::::::::
 *            ::::``:::::::::'        .:::.
 *           ::::'   ':::::'       .::::::::.
 *         .::::'      ::::     .:::::::'::::.
 *        .:::'       :::::  .:::::::::' ':::::.
 *       .::'        :::::.:::::::::'      ':::::.
 *      .::'         ::::::::::::::'         ``::::.
 *  ...:::           ::::::::::::'              ``::.
 * ```` ':.          ':::::::::'                  ::::..
 *                    '.:::::'                    ':'````..
 */

window.addEventListener('contextmenu', function (event) {
    event.preventDefault();
}, false);
window.addEventListener('keydown', function (event) {
    if (event.which === 123) {
        event.preventDefault();
    }
}, false);

if (window.location.hash) {
    history.replaceState('', '', window.location.href.split('#')[0]);
}
if (window.location.search) {
    history.replaceState('', '', window.location.href.split('?')[0]);
}

const DATE = new Date();
const DATETIME = DATE.getFullYear() * 10000 + DATE.getMonth() * 100 + 100 + DATE.getDate();

let device = '';
if (/(Android|iPhone|Mobile|OppoBrowser)/.test(window.navigator.userAgent)) {
    device = 'm';
} else {
    device = 'd';
}

// Global site tag (gtag.js) - Google Analytics
(function () {
    let script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-53798001-1';
    script.async = true;
    document.head.appendChild(script);
})();
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'UA-53798001-1');
