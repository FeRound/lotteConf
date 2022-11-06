$(document).ready(function(){
  $("nav ul li a,.back-to-top a,.footer-top a,a.ani-btn").click(function(e){
    var thisElem = $(this.hash);
    $("html,body").stop()
    $("html,body").animate({
      scrollTop: thisElem.offset().top
    },700)
    return false
  })

  $(window).scroll(function(){
    let elem = $(".back-to-top");
    if(this.scrollY > 0){
      elem.addClass("on");
    }else{
      elem.removeClass("on");
    }
    
  });

  // section offsettop 값으로 class 추가
  $(window).scroll(function(){
    let wHeight = $(window).height();
    let thisScrollTop = $(this).scrollTop();
    
    $("section").each(function(){
      let thisOffset = $(this).offset();
      
      console.log(`각 섹션 : ${thisOffset.top}`)
      console.log(`현재 스크롤 높이 : ${thisScrollTop}`);
      // if(thisOffset.top <= thisScrollTop && thisOffset.top + wHeight >= thisScrollTop){
      //   // 현재 스크롤이 섹션을 딱 넘어갈때 && 
      //   $(this).addClass("active");
      // }

      if(thisOffset.top <= thisScrollTop + (wHeight / 2)){
        // 현재 스크롤이 섹션을 딱 넘어갈때 && 
        $(this).addClass("active");
      }else{
        $(this).removeClass("active");
      }
    })
  })

});
