$(function () {
    // ----------------------------------------------
    // ハンバーガーメニュー
    // ----------------------------------------------
    $(".hamburger").on("click", function () {
        $("header").toggleClass("open");
    });

    $(".mask").on("click", function () {
        $("header").removeClass("open");
    });

    $("nav a").on("click", function () {
        $("header").removeClass("open");
    });


    // ------------------------------------------------
    // スムーススクロール
    // ------------------------------------------------
    $(function () {
        // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
        $('a[href^="#"]').click(function () {
            // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
            var adjust = 0;
            // スクロールの速度（ミリ秒）
            var speed = 600;
            // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
            var href = $(this).attr("href");
            // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
            var target = $(href == "#" || href == "" ? 'html' : href);
            // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
            var position = target.offset().top + adjust;
            // スムーススクロール linear（等速） or swing（変速）
            $('body,html').animate({ scrollTop: position }, speed, 'swing');
            return false;
        });
    });

    // --------------------------------------------------
    // フェードイン
    // --------------------------------------------------
    // スクロール時のイベント
    $(window).scroll(function () {
        // fadeinクラスに対して順に処理を行う
        $(".fadein").each(function () {
            // スクロールした距離
            let scroll = $(window).scrollTop();
            // fadeinクラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // fadeinクラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 150) {
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });
    });
});