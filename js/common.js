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

window.addEventListener('contextmenu', (event) => {
    event.preventDefault();
}, false);
window.addEventListener('keydown', (event) => {
    if (event.key === 'F12') {
        event.preventDefault();
    }
}, false);

!!window.location.hash && history.replaceState('', '', window.location.href.split('#')[0]);
!!window.location.search && history.replaceState('', '', window.location.href.split('?')[0]);

let device = '';
if (/(Android|iPhone|Mobile|OppoBrowser)/.test(window.navigator.userAgent)) {
    device = 'm';
} else {
    device = 'd';
}

const device = /(Android|iPhone|Mobile|OppoBrowser)/.test(window.navigator.userAgent) ? 'm' : 'd';

const DATE = new Date();
const DATETIME = DATE.getFullYear() * 10000 + DATE.getMonth() * 100 + 100 + DATE.getDate();
