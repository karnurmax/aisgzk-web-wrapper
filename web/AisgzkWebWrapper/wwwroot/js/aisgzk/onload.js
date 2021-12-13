// load scripts here

const include = (scriptUrl) => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", scriptUrl, true);
    xmlhttp.onreadystatechange = function () {
        if ((xmlhttp.status == 200) && (xmlhttp.readyState == 4)) {
            eval(xmlhttp.responseText);
        }
    };
    xmlhttp.send();
}
const siteRoot = "https://raw.githubusercontent.com/karnurmax/aisgzk-web-wrapper/master/web/AisgzkWebWrapper";
const scriptList = ['/wwwroot/js/aisgzk/ctrl/pzu.js'];
const loadAllScriptFiles = () => {
    scriptList.forEach(scr => inlcude(siteRoot + scr));
}
loadAllScriptFiles();
const routes = {
    '/aisgzk/ru/content/maps?type=pu-sp': 'pzu',
}

const run = () => {
    const url = document.location.pathname + document.location.search;
    const ctrl = window['aisgzkV2Ctrl'].routes[url];
    ctrl.onload()
}

let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck);
        run();
    }
}, 100);