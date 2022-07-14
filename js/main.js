/* DialPad*/
function dialPad(){
  let picked = [];
  $( "#delete" ).click(function() {
    picked.pop();
    $("#input-picked").val(picked.toString().replace(/\,/g,''))
  });
  $(".custom-button-call").click(function() {
    picked.push($(this).val())
    $("#input-picked").val(picked.toString().replace(/\,/g,''))
  });
}
function textAreaAdjust(element) {
  element.style.height = "1px";
  element.style.height = (25+element.scrollHeight)+"px";
}

$(function() {
  dialPad();

  // if(document.getElementById('v-pills-home-tab').classList.contains('active')){
  //   $(".bottom-navbar").removeClass('fixed-bottom');
  // }else{
  //   $(".bottom-navbar").addClass('fixed-bottom');
  // }
    var windowPageHeight = $( window ).height();
    //console.log(windowPageHeight);
    $(".inbox-list-container").css('height',(windowPageHeight - 233)+'px');
    $(".message-container").css('height',(windowPageHeight - 308)+'px');
    $(".recent-list-container").css('height',(windowPageHeight - 222)+'px');
    $(".contacts-list-container").css('height',(windowPageHeight - 222)+'px')
//size condition
  if(window.innerWidth < 992){
    
    //Phone view--------------------------------------------------->
     //$(".box-sent").css('max-width','65vw');
     //$(".box-received").css('max-width','65vw');

    //when phone view home tab active
    $("#v-pills-home-tab").trigger('click');


    //backmessage show
    $(".message-back-btn").removeClass("d-none");
    $(".recents-back-btn").removeClass("d-none");
    $(".contacts-back-btn").removeClass("d-none");
    //$(".recent-list-container").css('max-height','100vh');
    //$(".contacts-list-container").css('max-height','100vh');
    //$(".inbox-list-container").css('max-height','100vh');
    //$(".chat-container").css('max-height','50vh');

    //hide welcome message and status when bottom nav clicked
    $("#v-pills-home-tab").click(function(){
      $(".welcome-message").show();
      $(".mobile-status").show();
      $(".mobile-number-top").addClass("d-none");
    })
    $("#v-pills-inbox-tab").click(function(){
      $(".welcome-message").hide();
      $(".mobile-status").hide();
      $(".mobile-number-top").removeClass("d-none");
    })
    $("#v-pills-keypad-tab").click(function(){
      $(".welcome-message").hide();
      $(".mobile-status").hide();
      $(".mobile-number-top").removeClass("d-none");
    })
    $("#v-pills-recents-tab").click(function(){
      $(".welcome-message").hide();
      $(".mobile-status").hide();
      $(".mobile-number-top").removeClass("d-none");
    })
    $("#v-pills-contacts-tab").click(function(){
      $(".welcome-message").hide();
      $(".mobile-status").hide();
      $(".mobile-number-top").removeClass("d-none");
    })

    //hide welcome message and status when center home nav clicked
    $("#home-nav-inbox").click(function() {
      $("#v-pills-inbox-tab").trigger('click');
      $(".welcome-message").hide();
      $(".mobile-status").hide();
    });
    $("#home-nav-keypad").click(function() {
      $("#v-pills-keypad-tab").trigger('click');
      $(".welcome-message").hide();
      $(".mobile-status").hide();
    });
    $("#home-nav-recents").click(function() {
      $("#v-pills-recents-tab").trigger('click');
      $(".welcome-message").hide();
      $(".mobile-status").hide();
    });
    $("#home-nav-contacts").click(function() {
      $("#v-pills-contacts-tab").trigger('click');
      $(".welcome-message").hide();
      $(".mobile-status").hide();
    });

  }else{
    //Desktop View --------------------------------------------->
    $("#v-pills-inbox-tab").trigger('click');
    $("#side-nav-inbox").trigger('click');
    $(".write-message-btn").hide();
    $(".mobile-number-top").hide();

    //$(".box-sent").css('max-width','40vw');
    //$(".box-received").css('max-width','40vw');
    // $(".inbox-list-container").css('max-height','60vh');
    // $(".recent-list-container").css('max-height','60vh');
    // $(".contacts-list-container").css('max-height','60vh');

    //set ".chat-container" equal to ".inbox-list-container"
    let inboxListContainerHeight = $(".inbox-list-container").height();
    $(".chat-container").css('height',(inboxListContainerHeight - 135)+'px')

    //nav buttons
    $("#side-nav-inbox").click(function() {
      $("#v-pills-inbox-tab").trigger('click');
    });
    $("#side-nav-dialpad").click(function() {
      $("#v-pills-keypad-tab").trigger('click');
    });
    $("#side-nav-recents").click(function() {
      $("#v-pills-recents-tab").trigger('click');
    });
    $("#side-nav-contacts").click(function() {
      $("#v-pills-contacts-tab").trigger('click');
    });
    
  }


});


// if(homeContainer){
    //   $(".mobile-number-top").removeClass("d-none");
    // }

    //inbox content max-height
    /*$(".home-nav-btn").click(function() {
      var homeContainer = document.getElementById('v-pills-home').classList.contains('active');
      console.log(homeContainer)
      if(homeContainer){
        $(".welcome-message").addClass('d-none');
        $(".mobile-status").addClass('d-none');
        console.log(homeContainer)
      }else{
        $(".welcome-message").addClass('d-block');
        $(".mobile-status").addClass('d-block');
      }
    });*/
    /*$(".home-nav-btn").click(function(){
      var homeNavButton = document.getElementById('v-pills-home-tab').classList.contains('active');
      console.log(homeNavButton);
      if(homeNavButton){
        console.log($(".welcome-message"))
        $(".welcome-message").hide();
        $(".mobile-status").hide();
      }
    });*/

    /*$(".nav-link").click(function() {
      var homeContainer = document.getElementById('v-pills-home').classList.contains('active');
        if(!homeContainer){
          $(".welcome-message").hide();
          $(".mobile-status").hide();
         
        }else{
          $(".welcome-message").show();
          $(".mobile-status").show();
        }
    });*/


    //get the active nav
    //var tabButton = document.querySelectorAll(".nav-link");
    //tabButton.forEach((e,i,a) =>{
    //console.log(e.classList);
    //classnames = e.className
    //if(e.classList.contains('active')){
      //console.log(e.attr('id'));
    //}
    //});