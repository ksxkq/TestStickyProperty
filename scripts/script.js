/**
 * Created by xukq on 6/13/16.
 */
checkPropertySupport("Modernizr.csspositionsticky");
getDeviceInfo();
document.getElementById("submit").onclick = function () {
    alert("data save");
}


function getDeviceInfo() {
    var browserInfo = getBrowserInfo();
    document.getElementById("deviceInfo").innerHTML =
        "Browser = " + browserInfo.browser + "<br/>" +
        "Version = " + browserInfo.ver + "<br/>" +
        "Resolution = " + window.screen.height + " x " + window.screen.width + "<br/>" +
        "DPI = " + getDPI() + "<br/>" +
        "OS = " + getOSInfo() + "<br/>" +
        "phoneType = " + getPhoneType() + "<br/>"+
        "UA = " + navigator.userAgent + "<br/>";
}

function getBrowserInfo() {
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var re = /(msie|firefox|chrome|opera|version).*?([\d.]+)/;
    var m = ua.match(re);
    Sys.browser = m[1].replace(/version/, "'safari");
    Sys.ver = m[2];
    return Sys;
}

function getDPI() {
    var arrDPI = [];
    if (window.screen.deviceXDPI != undefined) {
        arrDPI[0] = window.screen.deviceXDPI;
        arrDPI[1] = window.screen.deviceYDPI;
    }
    else {
        var tmpNode = document.createElement("DIV");
        tmpNode.style.cssText = "width:1in;height:1in;position:absolute;left:0px;top:0px;z-index:99;visibility:hidden";
        document.body.appendChild(tmpNode);
        arrDPI[0] = parseInt(tmpNode.offsetWidth);
        arrDPI[1] = parseInt(tmpNode.offsetHeight);
        tmpNode.parentNode.removeChild(tmpNode);
    }
    return arrDPI;
}

function getOSInfo() {
    var sUserAgent = navigator.userAgent;
    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    if (isMac) return "Mac";
    var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
    if (isUnix) return "Unix";
    var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
    if (isLinux) return "Linux";
    if (isWin) {
        var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
        if (isWin2K) return "Win2000";
        var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
        if (isWinXP) return "WinXP";
        var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
        if (isWin2003) return "Win2003";
        var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
        if (isWinVista) return "WinVista";
        var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
        if (isWin7) return "Win7";
    }
    return "other";
}

function getPhoneType() {
    var u = navigator.userAgent;
    var type;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        type = "Android";
    } else if (u.indexOf('iPhone') > -1) {
        type = "iPhone";
    } else if (u.indexOf('Windows Phone') > -1) {
        type = "WinPhone";
    } else {
        type = "Other"
    }
    return type;
}

function checkPropertySupport(property) {
    document.getElementById("content").innerHTML = property + " = " + Modernizr.csspositionsticky;
}

// 判断 webview 类型 weixin / qq / weibo