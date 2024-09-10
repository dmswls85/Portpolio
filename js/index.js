$(document).ready(function(){
  $("section#skill div.text_box p.notion_text").hide()
  $("section#skill div.text_box p.css_text").hide()
  $("section#skill div.text_box p.git_text").hide()
  $("section#skill div.text_box p.jq_text").hide()
  $("section#skill div.text_box p.ps_text").hide()
  $("section#skill div.text_box p.ai_text").hide()
  $("section#skill div.text_box p.figma_text").hide() 
  $("section#skill div.text_box p.js_text").hide() 

  $("section#skill div.flow_banner ul.list li div.git").click(function(){
    $("section#skill div.text_box p.git_text").fadeIn(400)
    $(".notion_text").hide()
    $(".html_text").hide()
    $(".css_text").hide()
    $(".jq_text").hide()
    $(".ps_text").hide()
    $(".ai_text").hide()
    $(".figma_text").hide() 
    $(".js_text").hide()
  })
  $(".css").click(function(){
    $(".css_text").fadeIn(400)
    $(".notion_text").hide()
    $(".html_text").hide()
    $(".git_text").hide()
    $(".jq_text").hide()
    $(".ps_text").hide()
    $(".ai_text").hide()
    $(".figma_text").hide() 
    $(".js_text").hide()
  })
  $(".notion").click(function(){
    $(".notion_text").fadeIn(400)
    $(".css_text").hide()
    $(".html_text").hide()
    $(".git_text").hide()
    $(".jq_text").hide()
    $(".ps_text").hide()
    $(".ai_text").hide()
    $(".figma_text").hide() 
    $(".js_text").hide()
  })
  $(".jquery").click(function(){
    $(".jq_text").fadeIn(400)
    $(".notion_text").hide()
    $(".html_text").hide()
    $(".git_text").hide()
    $(".css_text").hide()
    $(".ps_text").hide()
    $(".ai_text").hide()
    $(".figma_text").hide() 
    $(".js_text").hide()
  })
  $(".ps").click(function(){
    $(".ps_text").fadeIn(400)
    $(".notion_text").hide()
    $(".html_text").hide()
    $(".git_text").hide()
    $(".jq_text").hide()
    $(".css_text").hide()
    $(".ai_text").hide()
    $(".figma_text").hide() 
    $(".js_text").hide()
  })
  $(".ai").click(function(){
    $(".ai_text").fadeIn(400)
    $(".notion_text").hide()
    $(".html_text").hide()
    $(".git_text").hide()
    $(".jq_text").hide()
    $(".ps_text").hide()
    $(".css_text").hide()
    $(".figma_text").hide() 
    $(".js_text").hide()
  })

  $(".figma").click(function(){
    $(".figma_text").fadeIn(400)
    $(".notion_text").hide()
    $(".html_text").hide()
    $(".git_text").hide()
    $(".jq_text").hide()
    $(".ps_text").hide()
    $(".ai_text").hide()
    $(".css_text").hide() 
    $(".js_text").hide()
  })
  $(".javascript").click(function(){
    $(".js_text").fadeIn(400)
    $(".notion_text").hide()
    $("p.html_text").hide()
    $(".git_text").hide()
    $(".jq_text").hide()
    $(".ps_text").hide()
    $(".ai_text").hide()
    $(".figma_text").hide() 
    $(".css_text").hide()
  })
  $(".html").click(function(){
    $(".html_text").fadeIn(400)
    $(".notion_text").hide()
    $(".css_text").hide()
    $(".git_text").hide()
    $(".jq_text").hide()
    $(".ps_text").hide()
    $(".ai_text").hide()
    $(".figma_text").hide() 
    $(".js_text").hide()
  })
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


var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

$(document).ready(function(){
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

});
$(document).ready(function(){
  var swiper = new Swiper(".mySwiper1", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
  });

  $('.swiper-slide').hover(function(){
    swiper.autoplay.stop();
  }, function(){
    swiper.autoplay.start();
  });

  
})
    // 페이지 상단이동
    $(document).ready(function() {
      $('.navcircle').bind('click', function(){
        $('html, body').animate({scrollTop: '0'}, 680);
      });
      $('.navcircle2').bind('click', function(){
        $('html, body').animate({scrollTop: '920'}, 680);
      });
      $('.navcircle3').bind('click', function(){
        $('html, body').animate({scrollTop: '1840'}, 680);
      });
      $('.navcircle4').bind('click', function(){
        $('html, body').animate({scrollTop: '2755'}, 680);
      });
      $('.navcircle5').bind('click', function(){
        $('html, body').animate({scrollTop: '3675'}, 680);
      });
      $('.navcircle6').bind('click', function(){
        $('html, body').animate({scrollTop: '4705'}, 680);
      });
  });


