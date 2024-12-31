// GSAPとMotionPathPluginの登録
gsap.registerPlugin(MotionPathPlugin);
window.addEventListener('load', () => {
    
});

function startAnimation(){
    gsap.to(".hujisan", {
        duration: 1.5,           // アニメーションの時間（秒）
        y: "-100%",              // Y軸方向に上へ移動
        opacity: 1,              // 不透明度を1に設定
        ease: "power2.out"       // イージング関数
    });

    // タイムラインを作成
    const tl = gsap.timeline();

    // 初期の登場アニメーション
    tl.to(".sun", {
        duration: 1.5,           // アニメーションの時間（秒）
        y: "-100%",              // Y軸方向に上へ移動
        opacity: 1,              // 不透明度を1に設定
        ease: "power2.out"       // イージング関数
    })
        // 登場後の回転アニメーションを追加
        .to(".sun", {
            duration: 4,             // 1回転にかかる時間（秒）
            rotation: 360,           // 360度回転
            repeat: -1,              // 無限に繰り返す
            ease: "steps(5)"           // 一定の速度で回転
        }, ">"); // 前のアニメーションが終わった直後に開始
    // タイムラインを作成
    const tl2 = gsap.timeline();

    // 凧のアニメーション
    tl2.to(".tako", {
        duration: 1.5,           // アニメーションの時間（秒）
        y: "-100%",              // Y軸方向に上へ移動
        opacity: 1,              // 不透明度を1に設定
        ease: "power2.out"       // イージング関数
    })

        // ランダムな方向への動きアニメーションを追加
        .to(".tako", {
            duration: 2,                             // 動きにかかる時間（秒）
            x: () => gsap.utils.random(-30, 30),     // ランダムなX軸の移動量（-20px～20px）
            y: () => gsap.utils.random(-30, 30),     // ランダムなY軸の移動量（-20px～20px）
            repeat: -1,                              // 無限に繰り返す
            yoyo: true,                              // アニメーションを往復させる
            ease: "sine.inOut"                       // スムーズなイージング
        }, "<"); // 前のアニメーションと同時に開始
    

    //雲のアニメーション
    // タイムラインを作成
    const tl3 = gsap.timeline();

    // 初期の登場アニメーション
    tl3.to(".kumo1", {
        duration: 1.5,           // アニメーションの時間（秒）
        y: "-100%",              // Y軸方向に上へ移動
        opacity: 1,              // 不透明度を1に設定
        ease: "power2.out"       // イージング関数
    })
        // 右から左への移動アニメーションを追加
        .to(".kumo1", {
            duration: 17,             // 移動にかかる時間（秒）
            x: "-160vw",             // X軸方向に左へ画面幅分移動
            ease: "linear",          // 一定速度で移動
            repeat: -1,              // 無限に繰り返す
            yoyo: false              // 戻るアニメーションを有効にする
        }, ">"); // 前のアニメーションが終わった直後に開始

    //雲のアニメーション二つ目
    // タイムラインを作成
    const tl4 = gsap.timeline();

    // 初期の登場アニメーション
    tl4.to(".kumo2", {
        duration: 1.5,           // アニメーションの時間（秒）
        y: "-100%",              // Y軸方向に上へ移動
        opacity: 1,              // 不透明度を1に設定
        ease: "power2.out"       // イージング関数
    })
        // 右から左への移動アニメーションを追加
        .to(".kumo2", {
            duration: 29,             // 移動にかかる時間（秒）
            x: "-170vw",             // X軸方向に左へ画面幅分移動
            ease: "linear",          // 一定速度で移動
            repeat: -1,              // 無限に繰り返す
            yoyo: false              // 戻るアニメーションを有効にする
        }, ">"); // 前のアニメーションが終わった直後に開始
}
