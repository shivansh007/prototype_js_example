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
    $('.toggle').click(function(){
      $('.collapse').slideToggle();
    });
  },
  transitionsForDiffrentContents:function(){
    $('.transition').first().css('display','block');
    $('.homeLink').click(function(){
      $('.activePage').slideUp('slow').removeClass('activePage');
      $('#home').slideDown('slow').addClass('activePage')
    });
    $('.aboutLink').click(function(){
      $('.activePage').slideUp('slow').removeClass('activePage');
      $('#about').slideDown('slow').addClass('activePage')
    });
    $('.contactLink').click(function(){
      $('.activePage').slideUp('slow').removeClass('activePage');
      $('#contact').slideDown('slow').addClass('activePage')
    });
  },
  lightSwitchToggle:function(){
    $('#switch').click(function(e){
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
    $('.slider').first().css('display','block').addClass('activeSlider');
    setInterval(slideNext,10000);
    $('#next').click(function(e){
      e.preventDefault();
      slideNext();
    });
    function slideNext()
    {
      $('.slider').css('display','none');
      if($('.activeSlider').next().length==0)
      {
        $('.activeSlider').removeClass('activeSlider');
        $('.slider').first().css('display','block').addClass('activeSlider');
      }
      else
        $('.activeSlider').removeClass('activeSlider').next().css('display','block').addClass('activeSlider');
    }

    $('#previous').click(function(e){
      e.preventDefault();
      slidePrevious();
    });
    function slidePrevious()
    {
      $('.slider').css('display','none');
      if($('.activeSlider').prev().length==0)
      {
        $('.activeSlider').removeClass('activeSlider');
        $('.slider').last().css('display','block').addClass('activeSlider');
      }
      else
        $('.activeSlider').removeClass('activeSlider').prev().css('display','block').addClass('activeSlider');
    }
  },
  commentFormActions:function(){
    $("#commentForm").submit(function(e){
      e.preventDefault();
      var name = '<b>' + $("#commentForm #name").val() + '</b>';
      var comment = $("#commentForm #comment").val() + '<br/>';
      $('#comments').append(name + " : " + comment);
      $('#commentForm')[0].reset();
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
