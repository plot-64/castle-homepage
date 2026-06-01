

// ヒーロー画像入れ替え
    // --- 画像ローテーションの追加 ---
    const images = document.querySelectorAll('.heroimgs img');
    let currentIndex = 0;

    // 最初の1枚を表示する
    if (images.length > 0) {
        images[currentIndex].classList.add('is-active');

        // 6秒ごとに切り替え実行
        setInterval(() => {
            // 今の画像からクラスを消す
            images[currentIndex].classList.remove('is-active');

            // 次の画像の番号を計算（4枚なら 0→1→2→3→0...）
            currentIndex = (currentIndex + 1) % images.length;

            // 次の画像にクラスをつける
            images[currentIndex].classList.add('is-active');
        }, 6000); // 6000ms = 6秒ごとに切り替え [cite: 13, 14]
};




// ギャラリータブ
const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // 全てのタブとパネルから active を消す
    tabs.forEach(t => t.classList.remove('is-active'));
    panels.forEach(p => p.classList.remove('is-active'));

    // クリックしたタブと、対応するパネルに active をつける
    tab.classList.add('is-active');
    const tabName = tab.dataset.tab;
    document.getElementById(tabName).classList.add('is-active');
  });
});



// サイドバーの要素を取得
// それぞれの要素を取得
const sidebar = document.querySelector('aside');
const mainContent = document.querySelector('.tate');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    // 100px以上スクロールした時
    sidebar.classList.add('is-shrunk');
    mainContent.classList.add('is-expanded'); // メイン用のクラス
  } else {
    // 戻った時
    sidebar.classList.remove('is-shrunk');
    mainContent.classList.remove('is-expanded');
  }
});


// ヘッダースクロールしたら表示
// それぞれの要素を取得
const header = document.querySelector('header');


window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    // 100px以上スクロールした時
    header.classList.add('is-shrunk');
  } else {
    // 戻った時
    header.classList.remove('is-shrunk');
  }
});



// map 応じた場所にポインタをつけるJS

document.addEventListener('DOMContentLoaded', () => {
    // 右側のすべてのカード（article）を取得
    const articles = document.querySelectorAll('.article-box article');

    articles.forEach(article => {
        // カードにマウスが乗ったときの処理
        article.addEventListener('mouseenter', () => {
            // カードについている「data-location」の値（spot1など）を取得
            const locationId = article.getAttribute('data-location');
            if (!locationId) return;

            // マップ（SVG）側から、同じ data-location を持つ要素を探す
            const targetSpot = document.querySelector(`#classic-castle-map .interactive-spot[data-location="${locationId}"]`);
            
            // 見つかったら、アクティブ用のクラス「is-active」を付与する
            if (targetSpot) {
                targetSpot.classList.add('is-active');
            }
        });

        // カードからマウスが離れたときの処理
        article.addEventListener('mouseleave', () => {
            const locationId = article.getAttribute('data-location');
            if (!locationId) return;

            const targetSpot = document.querySelector(`#classic-castle-map .interactive-spot[data-location="${locationId}"]`);
            
            // マウスが離れたら「is-active」クラスを取り除く
            if (targetSpot) {
                targetSpot.classList.remove('is-active');
            }
        });
    });
});


// サイトを開いたときに徐々に表示するやつ
window.addEventListener('load', () => {
    const overlay = document.getElementById('loading-overlay');
    
    // loadedクラスをつけてフェードアウトを開始
    overlay.classList.add('loaded');
    
    // アニメーションが終わる1.5秒後に、要素自体を非表示（display: none）にして完全に消す
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1500); 
});





// 歴史のところ 背景暗くするための


window.addEventListener('scroll', function() {
    // 歴史セクションと、最初のテキストボックスを取得
    const historySection = document.querySelector('section.history');
    const firstBox = document.querySelector('.history-box');
    const titleH2 = document.querySelector('.histoire-hero h2');
    const titleBg = document.querySelector('.histoire-hero .BackgroundTypography');
    const overlay = document.querySelector('.history-overlay');
    
    if (!historySection || !firstBox) return;

    // 歴史セクションが画面上部に来てからのスクロール量
    const sectionTop = historySection.getBoundingClientRect().top;
    
    // 最初のテキストボックスが画面のどの位置にいるか
    const boxTop = firstBox.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // 歴史セクションに入ったら演出の計算を開始
    if (sectionTop <= 0) {
        // 最初のボックスが画面下部（全体の80%の位置）から中央に近づくまでの進行度を計算 (0から1)
        const startFade = windowHeight * 0.7;
        const endFade = windowHeight * 0.4;
        
        let progress = (startFade - boxTop) / (startFade - endFade);
        progress = Math.max(0, Math.min(1, progress)); // 0〜1の間に収める

        // 1. タイトルの透明度（進行度に合わせて 1 から 0 へ）
        if (titleH2) titleH2.style.opacity = 1 - progress;
        if (titleBg) titleBg.style.opacity = 0 * (1 - progress); // 元のopacity 0.15 に合わせる

        // 少し上に消えていくような立体感を出す場合（お好みで）
        if (titleH2) titleH2.style.transform = `translateY(-${progress * 20}px)`;

        // 2. 背景の曇り具合（最大 0.7 くらいまで黒くする）
        if (overlay) {
            overlay.style.opacity = progress * 0.7; 
        }
    } else {
        // 歴史セクションより上にいるときは初期状態に戻す
        if (titleH2) titleH2.style.opacity = 1;
        if (titleBg) titleBg.style.opacity = 0.8;
        if (titleH2) titleH2.style.transform = 'translateY(0)';
        if (overlay) overlay.style.opacity = 0;
    }
});