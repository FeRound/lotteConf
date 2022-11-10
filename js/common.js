$(document).ready(function(){
  $(window).scroll(function(){
    let wHeight = $(window).height(); //윈도우 높이
    let thisScrollTop = $(this).scrollTop(); //현재 스크롤높이
    
    $("section").each(function(){ //특정 구간 클래스 추가
    let thisOffset = $(this).offset();      
      console.log(`각 섹션 : ${thisOffset.top}`)
      console.log(`현재 스크롤 높이 : ${thisScrollTop}`);
      if(thisOffset.top <= thisScrollTop + (wHeight / 2)){
        // 현재 스크롤이 섹션을 딱 넘어갈때 && 
        $(this).addClass("active");
      }else{
        $(this).removeClass("active");
      }
    })
    
    let elem = $(".back-to-top"); //최하단 영역 클래스 추가
    if(this.scrollY > 0){
      elem.addClass("on");
    }else{
      elem.removeClass("on");
    }

    
    $("#company-map strong").animate({
      counter : $(this).text()        
    },{
      duration : 1000,      
      step : function(now){
        $(this).text(Math.ceil(now))
      }
    })
    



  })

});
