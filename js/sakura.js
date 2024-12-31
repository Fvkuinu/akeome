const contentWidth = $('#sakuraContainer').width();
const contentHeight = $('#sakuraContainer').height();
$('#sakuraContainer').css('height', contentHeight + 'px');
const main = $('#sakuraContainer');
const styleTag = $('style');

//▼cherry回転 keyframes アニメーション
const cherryAnime = [
    "from {transform: rotate3d(1,1,1, 0deg);}",
    "25% {transform: rotate3d(1,1,1, 90deg);}",
    "50% {transform: rotate3d(1,1,1, 180deg);}",
    "75% {transform: rotate3d(1,1,1, 270deg);}",
    "to {transform: rotate3d(1,1,1, 360deg);}"
];

const rules = document.createTextNode(
    "@keyframes cherryAnime{" + cherryAnime.join(" ") + "}"
);
styleTag[0].appendChild(rules);
for (i = 1; i <= 64; i++) { //桜の花弁20枚
    const div = document.createElement("div"); //divを作成
    $(div).attr({ //属性追加
        id: "contents" + zeroPad(i),
        style: "position:relative; border-radius:40%;"
    }).appendTo(main);
    randomValue(div);
}

//////////// 関数 ////////////

// ▼桜吹雪アニメーションの関数
function randomValue(ele) {
    const multiArray = [1, -1]; //1か-1の配列
    const randomMulti = multiArray[Math.floor(Math.random() * multiArray.length)]; //1か-1をランダムに取得
    const objSize = getRandomNum(30,10), //サイズ
        blurValue = getRandomNum(3, 0), //ボカシ量
        XSpeedNum = getRandomFloot(2, 1), //Xの移動量
        YSpeedNum = getRandomFloot(3, 0.5); //Y座標の移動量
    ele.style.width = objSize + "px";
    ele.style.height = objSize + "px";
    ele.style.backgroundColor = "rgb(255," + getRandomNum(250, 200) + ",255)";
    ele.style.margin = (15 - objSize) / 2 + "px";
    ele.style.filter = "blur(" + blurValue + "px)";
    ele.style.animation = "cherryAnime " + getRandomNum(10, 5) + "s linear 0s infinite"; //cherryの回転アニメーション
    ele.style.zIndex = 45;
    let YNum = -30;
    let XNum = contentWidth;
    let ONum = 1;
    (function animeLoop() {
        var requestAnime = window.requestAnimationFrame(animeLoop);
        XNum
            += XSpeedNum * -1;
        YNum += YSpeedNum;
        ONum -= 0.0011;
        ele.style.top = YNum + "px";
        ele.style.left = XNum + "px";
        ele.style.opacity = ONum;
        if (XNum <= -250 || YNum >= contentHeight) {
            window.cancelAnimationFrame(requestAnime);
            return randomValue(ele);
        }
    })();
}

// ▼ゼロパッド取得関数
function zeroPad(zeroNum) {
    var zeroNum = ("000" + zeroNum).slice(-3);
    return zeroNum;
}

// ▼ランダム値取得関数
function getRandomNum(max, min) {
    var ranNum = Math.floor(Math.random() * (max + 1 - min) + min);
    return ranNum;
}

// ▼ランダム値取得関数 小数点第1位
function getRandomFloot(max, min) {
    var ranFlootNum = Math.random() * (max - min) + min;
    return ranFlootNum;
}