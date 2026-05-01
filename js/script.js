"use strict";

// Splide
new Splide(".splide", {
  autoplay: true,
  interval: 3000,
  speed: 2000,
  type: "loop",
  arrows: false,
  pagination: false,
}).mount();

// ヘッダー背景色
const header = document.querySelector(".header");

header.style.transition = "background-color 0.4s";

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.style.backgroundColor = "rgba(255, 255, 255, 255 .2)";
    header.style.boxShadow = "none";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow = "none";
  }
});
// モーダル
$(function () {
  const animSpeed = 300;
  const $pageTop = $(`#page-top`);
  const $backToTop = $(".back-to-top");

  $(`.works__item`).on(`click`, function () {
    const targetID = $(this).data(`target`);
    $("#" + targetID).fadeIn(animSpeed);
    $("body, html").addClass("is-fixed");
    $pageTop.fadeOut(animSpeed);
    $backToTop.removeClass("is-show");
    $backToTop.addClass("is-hidden");
  });

  $(".modal__overlay, .modal__close").on("click", function () {
    // モーダルをフェードアウト
    $(".modal").fadeOut(animSpeed);
    // 背景のスクロール禁止を解除
    $("body, html").removeClass("is-fixed");
    // TOPへ戻るボタンを再表示
    $pageTop.fadeIn(animSpeed);
    $backToTop.removeClass("is-hidden");
  });
});

$(function () {
  const $backToTop = $(".back-to-top");
  const $fv = $(".fv");

  $(window).on("scroll", function () {
    const fvHeight = $fv.outerHeight(); // FVの高さを取得

    if ($(this).scrollTop() > fvHeight) {
      $backToTop.addClass("is-show"); // FVを超えたら表示
    } else {
      $backToTop.removeClass("is-show"); // FVに戻ったら非表示
    }
  });

  $backToTop.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500); // トップへスクロール
  });
});

$(function () {
  const $header = $(".header");
  const $about = $("#about");

  $(window).on("scroll", function () {
    const aboutTop = $about.offset().top;
    // offset().top → aboutセクションの上端までの距離（px）

    if ($(this).scrollTop() > aboutTop) {
      $header.addClass("is-scrolled");
      // aboutを超えたら背景色をつける
    } else {
      $header.removeClass("is-scrolled");
      // aboutより上に戻ったら背景色を消す
    }
  });
});

$("#js-hamburger").click(function () {
  $(".hamburger").toggleClass("is-active");
  $(".header-menu").toggleClass("is-open");
});

$(function () {
  $(window).scroll(function () {
    $(".fade-in").each(function () {
      // 要素の位置を取得
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();

      // スクロール量が要素の位置に到達したら
      if (scroll > target - height + 100) {
        $(this).addClass("is-show");
      }
    });
  });
});
