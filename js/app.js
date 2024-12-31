// js/app.js
let sortableContainer;

document.addEventListener('DOMContentLoaded', function () {
    sortableContainer = document.getElementById('sortable-container');
    
    let sortable = Sortable.create(sortableContainer, {
        animation: 150, // スムーズなアニメーション
        ghostClass: 'bg-gray-200', // ドラッグ中のアイテムのスタイル
        onEnd: function (evt) {
            // 並び替え後の処理
            if(checkOrder()){
                triggerGlow();
                
                //console.log('並び替えが正しいです。');
            }
        },
    });

    initParticle();
});

function checkOrder() {
    // 現在の並び順を取得
    let items = sortableContainer.querySelectorAll('.sortable-item');
    let currentOrder = Array.from(items).map(function(item) {
        return item.getAttribute('data-id');
    });

    // 正しい順序の配列
    const correctOrder = ['1','2','3','4','5','6','7','8','9','10'];

    // 並び順が正しいかチェック
    let isCorrect = currentOrder.every(function(id, index) {
        return id === correctOrder[index];
    });

    // 結果を表示
    return isCorrect;
}

function triggerGlow(){
    // glowクラスを追加
    let items = sortableContainer.querySelectorAll('.sortable-item');
    items.forEach(function(item){
        item.classList.add('glow');
    });

    // 3秒後にglowクラスを削除
    setTimeout(function(){
        items.forEach(function(item){
            item.classList.remove('glow');
            switchContent();
        });
    }, 3010);
}

// 3秒後にコンテンツを切り替える関数
function switchContent() {
    const currentContent = document.getElementById('current-content');
    const newContent = document.getElementById('new-content');

    // current-contentをフェードアウト
    currentContent.classList.add('fade-out');
    document.body.style.backgroundColor = '#ffffff';
    // 1秒（フェードアウト時間）後にcurrent-contentを非表示にし、新-contentをフェードイン
    setTimeout(function(){
        currentContent.style.display = 'none';
        newContent.style.visibility = 'visible';
        newContent.classList.add('fade-in');
        setTimeout(function(){
            startAnimation();
        }, 1000);
    }, 1000); // フェードアウトの時間と合わせる
}

function initParticle(){
     // Particles.jsの初期化
     particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff" // 白色のパーティクル
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
            },
            "opacity": {
                "value": 0.7,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": { // パーティクル間の線を無効化
                "enable": false
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "bottom",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}
