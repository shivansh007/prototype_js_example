var JS = JS || {};

JS.scripts = function(){
  this.initialize();
}

JS.scripts.prototype = {
  initialize:function(){
    this.toggleNavbarOnSmallScreen();
    this.transitionsForDiffrentContents();
    this.lightSwitchToggle();
    this.carousalSlider();
    this.scrollEffect();
    this.commentFormActions();
    this.commentModalShow();
  },
  toggleNavbarOnSmallScreen:function(){
    $('.navbar .toggle').click(function(){
      $('.navbar .collapse').slideToggle();
    });
  },
  transitionsForDiffrentContents:function(){
    $('.container .transition').first().css('display','block');
    $('.navbar .homeLink').click(function(){
      $('.container .activePage').slideUp('slow').removeClass('activePage');
      $('.container #home').slideDown('slow').addClass('activePage')
    });
    $('.navbar .aboutLink').click(function(){
      $('.container .activePage').slideUp('slow').removeClass('activePage');
      $('.container #about').slideDown('slow').addClass('activePage')
    });
    $('.navbar .contactLink').click(function(){
      $('.container .activePage').slideUp('slow').removeClass('activePage');
      $('.container #contact').slideDown('slow').addClass('activePage')
    });
  },
  lightSwitchToggle:function(){
    $('.header #switch').click(function(e){
      e.preventDefault();
      var elem = $('#light');
      if (elem.hasClass('on'))
      {
        elem.css("display","none").removeClass('on');
        $('#switch img').attr('src','images/switch-off.jpg')
      }
      else
      {
        elem.css("display","block").addClass('on');
        $('#switch img').attr('src','images/switch-on.jpg')
      }
    });
  },
  carousalSlider:function(){
    var thisObj = this;
    $('.carousal .slider').first().css('display','block').addClass('activeSlider');
    setInterval(thisObj.slideNext,10000);
    $('.buttons #next').click(function(e){
      e.preventDefault();
      thisObj.slideNext();
    });
    $('#previous').click(function(e){
      e.preventDefault();
      thisObj.slidePrevious();
    });
  },
  slideNext:function()
  {
    $('.carousal .slider').css('display','none');
    if($('.carousal .activeSlider').next().length==0)
    {
      $('.carousal .activeSlider').removeClass('activeSlider');
      $('.carousal .slider').first().css('display','block').addClass('activeSlider');
    }
    else
      $('.carousal .activeSlider').removeClass('activeSlider').next().css('display','block').addClass('activeSlider');
  },
  slidePrevious:function()
  {
    $('.carousal .slider').css('display','none');
    if($('.carousal .activeSlider').prev().length==0)
    {
      $('.carousal .activeSlider').removeClass('activeSlider');
      $('.carousal .slider').last().css('display','block').addClass('activeSlider');
    }
    else
      $('.carousal .activeSlider').removeClass('activeSlider').prev().css('display','block').addClass('activeSlider');
  },
  commentFormActions:function(){
    $("#commentModal #commentForm").submit(function(e){
      e.preventDefault();
      var name = '<b>' + $("#commentForm #name").val() + '</b>';
      var comment = $("#commentForm #comment").val() + '<br/>';
      $('#commentModal #comments').append(name + " : " + comment);
      $('#commentModal #commentForm')[0].reset();
    });
  },
  scrollEffect:function(){
    $(document).scroll(function()
    {
      $(".fadein").each(function() 
      {
        if(isScrolledIntoView(this) && $(this).css('display')!='none')
        {
          $(this).css('opacity', '0');
          $(this).fadeTo(1500,1);
        }
      })
    })
    function isScrolledIntoView(elem)
    {
      var docViewTop = $(document).scrollTop();
      var docViewBottom = docViewTop + $(document).height();
      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();
      return (elemTop <= docViewBottom-elemBottom+500)
    }
  },
  commentModalShow:function(){
    $('#commentModalButton').click(function(){
      var modal = document.getElementById('commentModal');
      var span = document.getElementsByClassName("close")[0];
      modal.style.display = "block";
      span.onclick = function() 
      {
        modal.style.display = "none";
      }
      window.onclick = function(event) 
      {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    });
  }
}
