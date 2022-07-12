/* DialPad*/
function dialPad(){
  let inputPicked = document.getElementById('input-picked');
  let btns = document.getElementById("btns");
  let showPicked = document.getElementById("showPicked");
  let buttonNumbers = [
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
    ["*"],
    [0],
    ["#"]
  ];
  let picked = [];
  let deleteNums = document.getElementById("delete");
  let call = document.getElementById("call");
  let end = document.getElementById("end");
  
  buttonNumbers.forEach(numbers => {
    btns.innerHTML += `
      <button onclick="addNumbers(this.value)"
      class="btn btn-light custom-button"
      type="button"
      value="${numbers[0]}">${numbers[0]}</button>`;
  });
  
  function addNumbers(numbers) {
    picked.push(numbers);
    numPicked = picked.toString().replace(/\,/g,'');
    inputPicked.value = numPicked;
  }
  
  deleteNums.addEventListener("click", () => {
    picked.pop();
    numPicked = picked.toString().replace(/\,/g,'');
    inputPicked.value = numPicked;
  });
}


$(document).ready(function() {
  dialPad();
//size condition
  if(window.innerWidth < 992){
    
    //Phone view--------------------------------------------------->
     $(".box-sent").css('max-width','65vw');
     $(".box-received").css('max-width','65vw');

    //when phone view home tab active
    $("#v-pills-home-tab").trigger('click');
    //var homeContainer = document.getElementById('v-pills-home').classList.contains('active');

    //backmessage show
    $(".message-back-btn").removeClass("d-none");
    $(".recents-back-btn").removeClass("d-none");
    $(".contacts-back-btn").removeClass("d-none");
    $(".recent-list-container").css('max-height','100vh');
    $(".contacts-list-container").css('max-height','100vh');
    $(".inbox-list-container").css('max-height','100vh');
    $(".chat-container").css('max-height','50vh');

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

    $(".box-sent").css('max-width','40vw');
    $(".box-received").css('max-width','40vw');
    $(".inbox-list-container").css('max-height','60vh');
    $(".recent-list-container").css('max-height','60vh');
    $(".contacts-list-container").css('max-height','60vh');

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