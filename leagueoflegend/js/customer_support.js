// 헤더
$(function(){
    var sub = $('div.subMenu, div.subMenuBackground');
    sub.hide();     

    $("header div.header nav ul").mouseover(function(){
        $(sub).slideDown(500);
    })

    $("header div.header ").mouseleave(function(){
        sub.hide();
    })
});

$(function(){
    var menu = $('div#mobileHeader').hide()
    $('div#slide-open').click(function(){
        menu.slideToggle(600);
    });
});

// <!-- 언어선택박스 스크립트 -->
$(function(){
    /* 일반함수 */
    const label = document.querySelector('.label');
    const options = document.querySelectorAll('.optionItem');
    // 클릭한 옵션의 텍스트를 라벨 안에 넣음
    const handleSelect = function(item) {
    label.innerHTML = item.textContent;
    label.parentNode.classList.remove('active');
    }
    // 옵션 클릭시 클릭한 옵션을 넘김
    options.forEach(function(option){
    option.addEventListener('click', function(){handleSelect(option)})
    })
    // 라벨을 클릭시 옵션 목록이 열림/닫힘
    label.addEventListener('click', function(){
    if(label.parentNode.classList.contains('active')) {
        label.parentNode.classList.remove('active');
    } else {
        label.parentNode.classList.add('active');
    }
    });
});
$(function(){
    const label1 = document.querySelector('.label1');
    const options1 = document.querySelectorAll('.optionItem1');
    // 클릭한 옵션의 텍스트를 라벨 안에 넣음
    const handleSelect1 = function(item) {
    label1.innerHTML = item.textContent;
    label1.parentNode.classList.remove('active');
    }
    // 옵션 클릭시 클릭한 옵션을 넘김
    options1.forEach(function(option1){
    option1.addEventListener('click', function(){handleSelect1(option1)})
    })
    // 라벨을 클릭시 옵션 목록이 열림/닫힘
    label1.addEventListener('click', function(){
    if(label1.parentNode.classList.contains('active')) {
        label1.parentNode.classList.remove('active');
    } else {
        label1.parentNode.classList.add('active');
    }
    });
});

// 페이지 상단이동
$(document).ready(function() {
    $('.topbutton').bind('click', function(){
      $('html, body').animate({scrollTop: '0'}, 680);
    });
});

// 모바일 메뉴 버튼
$(function(){
    $("#slide-open").click(function(){
    if($("#burgur").hasClass('on')){
        $("#burgur").removeClass('on');
        $("#mobileHeader").removeClass('on');
        
    } else{
        $("#burgur").addClass('on');
        $("#mobileHeader").addClass('on'); 
    }
    });
    // 페이지 리사이징시 초기화
    // $(window).resize(function(){document.location.reload();
        
    // })
});


$(function(){
    var m_sub = $('.mobile_menu>ul>li ul').hide();
    $(".mobile_menu>ul>li>.menu_T>a").click(function(){
       $(this).parent().next().slideToggle(400);
    // $('div.menu_T>i.fa-caret-right').animate({rotate:'-90deg'}) 
    });
});

