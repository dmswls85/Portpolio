$(document).ready(function(){
    var sub = $('div.subMenu, div.subMenuBackground');
    sub.hide();     

    $("header div.header nav ul").mouseover(function(){
        $(sub).slideDown(500);
    })

    $("header div.header ").mouseleave(function(){
        sub.hide();
    })
    
});