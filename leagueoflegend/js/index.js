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

    $(function(){
        $(".R_skill").hide()
        $(".Q_skill").hide()
        $(".W_skill").hide()
        $(".E_skill").hide()
    })

    $(document).ready(function(){
        const elm = {
          arrow: document.querySelector(".form-container__arrow"),
          overlay: document.querySelector(".overlay"),
          title: document.querySelector(".title"),
          signUpButton: document.querySelector(".buttons__signup"),
          loginButton: document.querySelector(".buttons__signup--login"),
          loginForm: document.querySelector(".login-form"),
          registerForm: document.querySelector(".login-form--register")
        }
        
      /* ===========================
          Properties Object
      ============================ */
      
        const props = {
          left: "left: 20px;",
          bottom: "bottom: -400px;",
          transition1: "transition: bottom 1s;",
          transition2: "transition: bottom 2s;",
          opacity0: "opacity: 0;",
          opacity1: "opacity: 1;",
          trnsDelay: "transition-delay: 1s;",
          zIndex: "z-index: 6;",
          left0: "left: 0;",
          trnsDelay0: "transition-delay: 0s;",
          zIndex0: "z-index: 0;",
          leftM120: "left: -120px;"
        }
        
      /* ===========================
          Elements Array
      ============================ */
      
        const elms = [elm.arrow, elm.overlay, elm.title, elm.signUpButton, elm.loginButton, elm.loginForm, elm.registerForm]
        
        function transition (elements, props){
          for (let i = 0; i < elements.length; i++){
            elements[i].setAttribute("style", `${props[i]}`)
          }
        } 
      
      /* ===========================
          Events
      ============================ */
      
        document.getElementById("signUp").onclick = function (){
      
          const properties = [props.left, props.opacity0, props.opacity0, `${props.transition1} ${props.bottom}`, `${props.transition2} ${props.bottom}`, props.opacity0, `${props.opacity1} ${props.trnsDelay} ${props.zIndex}`]
        
          transition(elms, properties)
        }
      
        document.getElementById("login").onclick = function (){
      
          const properties = [props.left, props.opacity0, props.opacity0, `${props.transition1} ${props.bottom}`, `${props.transition2} ${props.bottom}`, props.opacity0, `${props.opacity1} ${props.trnsDelay} ${props.zIndex}`]
        
          transition(elms, properties)
        }
      
        document.getElementById("arrowClick").onclick = function (){
      
          const properties = [props.leftM120, props.opacity1, props.opacity1, props.opacity1, props.opacity1, `${props.opacity0} ${props.trnsDelay0} ${props.zIndex0}`, `${props.opacity0} ${props.trnsDelay0} ${props.zIndex0}`]
        
          transition(elms, properties)
        }
      });
