var music = document.getElementById("music");
var starbg = document.getElementsByClassName("icon-star");
var mp = music.paused;
var bol = document.getElementsByClassName("bol");
var ytext = document.getElementsByClassName("ytext");
var yn = document.getElementById("yn");
var son = 0;
var musicsList = ["../music/whkl.mp3", "../music/lx.mp3", "../music/lryh.mp3"];
var musicsNameList = ["我很快乐-刘惜君", "练习 (Live) - 刘德华", "老人与海 - 海鸣威"];
var musicImgs = ["../music/happy.jpg", "../music/lianxi.jpg", "../music/hair.jpg"];
var ls = document.getElementById("ls");
var str = "newChild";
for (let i = 0; i < musicsNameList.length; i++) {
    str = str + i;
    var str = document.createElement("div");
    str.append(musicsNameList[i]);
    ls.appendChild(str)
}
function star() {
    if (music.paused) {
        music.play();
        starbg[0].style.background = "url('../img/zt.png') no-repeat center";
        starbg[0].style.backgroundSize = "99% 99%";
        rotates()
    } else {
        music.pause();
        starbg[0].style.background = "url('../img/actions.png') no-repeat center";
        starbg[0].style.backgroundSize = "99% 99%";
        clearInterval(timer)
    }
}
function cours() {
    let x = this.event.offsetY;
    console.log("x=" + x);
    if (x >= 40) {
        x = 40;
        music.volume = parseFloat(x / 40) * 1;
        bol[0].style.top = "40px";
        ytext[0].innerHTML = 100 + "";
        yn.style.height = x + "px"
    } else if (x <= 0) {
        x = 0;
        music.volume = 0;
        bol[0].style.top = "0px";
        ytext[0].innerHTML = 0 + "";
        yn.style.height = x + 2 + "px"
    } else {
        bol[0].style.top = x + 2 + "px";
        music.volume = parseFloat(x / 40) * 1;
        ytext[0].innerHTML = parseInt(((x / 40) * 100)) + "";
        yn.style.height = x + 4 + "px"
    }
}
var deg = 0;
var nextDeg = 0;
function rotates() {
    if (nextDeg != 0) {
        deg = nextDeg
    }
    let imgs = document.getElementsByClassName("imgs");
    let flag = 1;
    timer = setInterval(function() {
        imgs[0].style.transform = "rotate(" + deg + "deg)";
        deg += 1;
        if (deg > 360) {
            deg = 0
        }
        nextDeg = deg
    },
    50)
}
var flag = true;
function song() {
    let bg = document.getElementsByClassName("icon-yin")[0];
    if (flag) {
        son = music.volume;
        music.volume = 0;
        bg.style.backgroundImage = "url(../img/jy.png)";
        flag = false
    } else {
        music.volume = son;
        bg.style.backgroundImage = "url(../img/yl.png)";
        flag = true
    }
}
var num = 0;
var bgImg = document.getElementsByClassName("imgs")[0];
function upMusic() {
    music.pause();
    if (num == 0) {
        num = musicsList.length - 1
    } else {
        num--
    }
    bgImg.style.backgroundImage = "url(" + musicImgs[num] + ")";
    music.src = musicsList[num];
    console.log(num);
    clearInterval(timer);
    star()
}
function dowMusic() {
    music.pause();
    if (num == (musicsList.length - 1)) {
        num = 0
    } else {
        num++
    }
    bgImg.style.backgroundImage = "url(" + musicImgs[num] + ")";
    music.src = musicsList[num];
    console.log(num);
    clearInterval(timer);
    star()
}