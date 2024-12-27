export function msgScroll() {
    window.onload = roll(30);
}

function roll(t) {
    var ul1 = document.getElementById("child1");
    var ul2 = document.getElementById("child2");
    var ulbox = document.getElementById("parent");
    ul2.innerHTML = ul1.innerHTML;
    ulbox.scrollTop = 0; // 开始无滚动时设为0
    var timer = setInterval(rollStart, t); // 设置定时器，参数t用在这为间隔时间（单位毫秒），参数t越小，滚动速度越快
    // 鼠标移入div时暂停滚动
    ulbox.onmouseover = function () {
        clearInterval(timer);
    }
    // 鼠标移出div后继续滚动
    ulbox.onmouseout = function () {
        timer = setInterval(rollStart, t);
    }
}

// 开始滚动函数
function rollStart() {
    // 上面声明的DOM对象为局部对象需要再次声明
    var ul1 = document.getElementById("child1");
    var ul2 = document.getElementById("child2");
    var ulbox = document.getElementById("parent");
    // 正常滚动不断给scrollTop的值+1,当滚动高度大于列表内容高度时恢复为0
    if (ulbox.scrollTop >= ul1.scrollHeight) {
        ulbox.scrollTop = 0;
    } else {
        ulbox.scrollTop++;
    }
}

