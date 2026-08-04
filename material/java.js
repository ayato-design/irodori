// スムーススクロール(元：WEBデザインMATOME)
$(function() {
  $('a[href^="#"]').on('click', function(e) {
    const href = $(this).attr('href');
    // 空の # は無視
    if (href === "#") return;
    // 対象要素が存在しない場合も無視
    const $target = $(href);
    if ($target.length === 0) return;
    e.preventDefault();
    $('html, body').animate({
      scrollTop: $target.offset().top
    }, 500, 'linear');
  });
});

// 戻るボタン(元：SACOCHAN-DESIGN.COM)
$(document).ready(function () {
    const pagetopBtn = $(".back_button");

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 100) { // 100pxスクロールしたら表示
            pagetopBtn.addClass("is-show"); // 100px以上スクロールしたらボタンをフェードイン
        } else {
            pagetopBtn.removeClass("is-show"); // 100px以下になったらボタンをフェードアウト
        }
    });

    pagetopBtn.on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 800); //500ミリ秒かけて戻る
        return false;
    });
});

  // more(元：Copypet)
  $(document).ready(function(){
//4件ずつ読み込む----------------------------------------------------------//
	//postの総数をカウントする
	var n = $(".works_list").length;
	//初期表示5件以上は非表示にする　5→8変更
	$(".works_list:gt(7)").hide();
	//初期表示5件 5→4変更
	var Num = 4;
	//もっと見るボタンをクリックした時
	$("#more_button").click(function(){
		Num += 4;//5件づつ追加する
		$(".works_list:lt("+Num+")").fadeIn(1000);//Num+5つ目以前を表示
		//残りのpostの個数が表示件数(Num)より少なくなったら
		if(n <= Num){
			$("#more_button").hide();//もっと見るボタンを非表示にする
		}
	});
//4件ずつ読み込む----------------------------------------------------------//
});
