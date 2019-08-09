
$('.center').slick({
  infinite: true, //スライドのループ有効化
  dots:true, //ドットのナビゲーションを表示
  centerMode: true, //要素を中央寄せ
  centerPadding:'10%', //両サイドの見えている部分のサイズ
  autoplay:true, //自動再生
});


$('.thumbnail').slick({
  infinite: true, //スライドのループ有効化
  arrows: false, //矢印非表示
  fade: true, //フェードの有効化
  draggable: false //ドラッグ操作の無効化
});
$('.thumbnail-thumb').slick({
  infinite: true, //スライドのループ有効化
  slidesToShow: 8, //表示するスライドの数
  focusOnSelect: true, //フォーカスの有効化
  asNavFor: '.thumbnail', //thumbnailクラスのナビゲーション
});