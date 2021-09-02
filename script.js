var s = skrollr.init()

$(window).scroll(
  function(evt){
    if ($(window).scrollTop()>0){
      $(".navbar").removeClass("change");
    }else{
      $(".navbar").addClass("change");
    }
  }
)