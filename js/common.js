

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

// ロゴ画像
const logo1 = document.querySelector('.logo1');
const logo2 = document.querySelector('.logo2');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    // 100px以上スクロールした時
    logo1.classList.add('is-shrunk');
    logo2.classList.add('is-shrunk');
   
  } else {
    // 戻った時
    logo1.classList.remove('is-shrunk');
    logo2.classList.remove('is-shrunk');

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