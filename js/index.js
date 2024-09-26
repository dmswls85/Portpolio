
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
// 슬라이드
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
      $('.nav2 div:nth-child(1)').bind('click', function(){
        $('html, body').animate({scrollTop: '0'}, 680);
        e.preventDefault();
      });
      $('.nav2 div:nth-child(2)').bind('click', function(){
        $('html, body').animate({scrollTop: '960'}, 680);
        e.preventDefault();
      });
      $('.nav2 div:nth-child(3)').bind('click', function(){
        $('html, body').animate({scrollTop: '1905'}, 680);
        e.preventDefault();
      });
      $('.nav2 div:nth-child(4)').bind('click', function(){
        $('html, body').animate({scrollTop: '2858'}, 680);
        e.preventDefault();
      });
      $('.nav2 div:nth-child(5)').bind('click', function(){
        $('html, body').animate({scrollTop: '3810'}, 680);
        e.preventDefault();
      });
      $('.nav2 div:nth-child(6)').bind('click', function(){
        $('html, body').animate({scrollTop: '4905'}, 680);
        e.preventDefault();
      });
  });
// 홈에 있는 nav 메뉴 이동
  $(document).ready(function() {
    $('.nav1 ul li').eq(0).bind('click', function(){
      $('html, body').animate({scrollTop: '0'}, 680);
    });
    $('.nav1 ul li').eq(1).bind('click', function(){
      $('html, body').animate({scrollTop: '920'}, 680);
    });
    $('.nav1 ul li').eq(2).bind('click', function(){
      $('html, body').animate({scrollTop: '1905'}, 680);
    });
    $('.nav1 ul li').eq(3).bind('click', function(){
      $('html, body').animate({scrollTop: '2858'}, 680);
    });
    $('.nav1 ul li').eq(4).bind('click', function(){
      $('html, body').animate({scrollTop: '4905'}, 680);
    });
    $('.modal').on('click',function(e){
      //a태그가 가진 이벤트 막기
      e.preventDefault();

      $("#background").fadeIn(200);  //배경 레이어
      $("#front").fadeIn(200);  //이미지 레이어

      let src = $(this).attr('href'); // 클릭한 링크의 href 속성값
      let img = "<img src='" + src +"'/>"; //이미지 태그 구성 
      $('#front').html(img);

  });

  //화면에 표시된 배경 레이어를 클릭한 경우
 $('#background').click(function(){
  $(this).fadeOut(200);
  $("#front").fadeOut(200);
 });

});
document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const navCircles = document.querySelectorAll('.nav2 div');
  const nav = document.querySelector('.nav2'); // nav2 요소 선택
  const body = document.body;
  const html = document.documentElement;

  let current = '';

  // 페이지 로드 시 nav2를 숨김
  nav.classList.add('hidden');

  document.addEventListener('scroll', function() {
    const scrollPos = window.scrollY; // 현재 스크롤 위치
    const scrollHeight = Math.max(body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight);
    const viewportHeight = window.innerHeight;
    const isAtBottom = (scrollHeight - scrollPos - viewportHeight) <= 0;

    // 현재 섹션 확인
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollPos >= sectionTop - sectionHeight / 3 && scrollPos < sectionTop + sectionHeight - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    // 스크롤이 맨 위일 때 nav2 숨기기
    if (window.scrollY === 0) {
      nav.classList.add('hidden'); // 'hidden' 클래스를 추가해 숨기기
    } else {
      nav.classList.remove('hidden'); // 'hidden' 클래스를 제거해 보이게 하기
    }

    // 스크롤이 맨 아래일 때 navcircle6 강조
    navCircles.forEach(circle => {
      circle.style.backgroundColor = ''; // 모든 원의 색 초기화
      circle.style.transform = 'scale(1)'; // 모든 원의 크기 초기화
      if (circle.dataset.target === `#${current}`) {
        circle.style.backgroundColor = '#ffbdbd'; // 원하는 색으로 변경
        circle.style.transform = 'scale(1.5)'; // 크기를 키움
      }
      if (isAtBottom && circle.dataset.target === '#portpolio') { // 마지막 섹션일 때 navcircle6 강조
        circle.style.backgroundColor = '#ffbdbd'; // 원하는 색으로 변경
        circle.style.transform = 'scale(1.5)'; // 크기를 키움
      }
    });
  });
});
