      // 페이지 상단이동
      $(document).ready(function() {
        $('.home_button').bind('click', function(){
          $('html, body').animate({scrollTop: '0'}, 680);
        });
        $('.profile_button').bind('click', function(){
          $('html, body').animate({scrollTop: '850'}, 680);
        });
        $('.skill_button').bind('click', function(){
          $('html, body').animate({scrollTop: '1780'}, 680);
        });
        $('.portpolio_web_button').bind('click', function(){
          $('html, body').animate({scrollTop: '2700'}, 680);
        });
        $('.contact_button').bind('click', function(){
          $('html, body').animate({scrollTop: '4700'}, 680);
        });
    });
$(document).ready(function(){
    $("body").append("<div id='back_d1'></div><div id='main_img_d1'></div>");
  
    $("#photo1 a.modal").click(function(){
        var pic = $(this).attr("href")
        $("#back_d1").show();
        $('#main_img_d1').show().html('<img src="'+pic+'" width="1000" height="700">');
      
        return false;
    });
    $("#back_d1").click(function(){
        $(this).hide();
        $(this).next().hide();
    });
  });
  
  $(document).ready(function(){
    $("body").append("<div id='back_d2'></div><div id='main_img_d2'></div>");
  
    $("#photo2 a.modal").click(function(){
        var pic = $(this).attr("href")
        $("#back_d2").show();
        $('#main_img_d2').show().html('<img src="'+pic+'" width="1000" height="700">');    
        return false;
    });
    $("#back_d2").click(function(){
        $(this).hide();
        $(this).next().hide();
    });
  });
  
  $(document).ready(function(){
    $("body").append("<div id='back_d3'></div><div id='main_img_d3'></div>");
  
    $("#photo3 a.modal").click(function(){
        var pic = $(this).attr("href")
        $("#back_d3").show();
        $('#main_img_d3').show().html('<img src="'+pic+'" width="500" height="500">');    
        return false;
    });
    $("#back_d3").click(function(){
        $(this).hide();
        $(this).next().hide();
    });
  });
  var $html = $("html");
      var page = 1;
      var lastPage = $(".content").length;
  
      // 초기 스크롤 위치 설정
      $html.animate({scrollTop: 0}, 10);
  
      // 모바일 디바이스 체크
      function isMobile() {
          return /Mobi|Android/i.test(navigator.userAgent);
      }
  
      // 휠 이벤트 핸들러 등록
      if (!isMobile()) {
          $(window).on("wheel", function(e) {
              e.preventDefault();
  
              if ($html.is(":animated")) return;
  
              if (e.originalEvent.deltaY > 0) {
                  // 스크롤 다운
                  if (page == lastPage) return;
                  page++;
              } else if (e.originalEvent.deltaY < 0) {
                  // 스크롤 업
                  if (page == 1) return;
                  page--;
              }
  
              var posTop = (page - 1) * $(window).height();
              $html.animate({scrollTop: posTop});
          });
      }
  
  $(document).ready(function(){
    $("section#skill div.text_box p.notion_text").hide()
    $("section#skill div.text_box p.css_text").hide()
    $("section#skill div.text_box p.git_text").hide()
    $("section#skill div.text_box p.jq_text").hide()
    $("section#skill div.text_box p.ps_text").hide()
    $("section#skill div.text_box p.ai_text").hide()
    $("section#skill div.text_box p.figma_text").hide()
    
    var swiper = new Swiper(".mySwiper", {
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  });
  $(window).on('load', function() {
  setFlowBanner();
  })
  
  function setFlowBanner() {
  const $wrap = $('.flow_banner');
  const $list = $('.flow_banner .list');
  let wrapWidth = $wrap.width();
  let listWidth = $list.width();
  const speed = 30; //1초에 몇픽셀 이동하는지 설정
  
  //리스트 복제
  let $clone = $list.clone();
  $wrap.append($clone);
  flowBannerAct()
  
  //배너 실행 함수
  function flowBannerAct() {
    //무한 반복을 위해 리스트를 복제 후 배너에 추가
    if (listWidth < wrapWidth) {
        const listCount = Math.ceil(wrapWidth * 2 / listWidth);
        for (let i = 2; i < listCount; i++) {
            $clone = $clone.clone();
            $wrap.append($clone);
        }
    }
    $wrap.find('.list').css({
        'animation': `${listWidth / speed}s linear infinite flowRolling`
    });
  }
  
  // 마우스가 요소 위로 진입했을 때 일시정지
  $wrap.on('mouseenter', function () {
    $wrap.find('.list').css('animation-play-state', 'paused');
  });
  
  // 마우스가 요소에서 빠져나갈 때 재생
  $wrap.on('mouseleave', function () {
    $wrap.find('.list').css('animation-play-state', 'running');
  });
  }
  $('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
  {
  breakpoint: 768,
  settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3
  }
  },
  {
  breakpoint: 480,
  settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1
  }
  }
  ]
  });
  
  });

  
  
  