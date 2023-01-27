function myFunction() {
    var x = document.getElementById("try");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function myFunction1() {
    var x1 = document.getElementById("try1");
    if (x1.style.display === "none") {
      x1.style.display = "block";
    } else {
      x1.style.display = "none";
    }
  }
  function myFunction2() {
    var x2 = document.getElementById("try2");
    if (x2.style.display === "none") {
      x2.style.display = "block";
    } else {
      x2.style.display = "none";
    }
  }
  function myFunction3() {
    var x3 = document.getElementById("try3");
    if (x3.style.display === "none") {
      x3.style.display = "block";
    } else {
      x3.style.display = "none";
    }
  }
  function myFunction4() {
    var x4 = document.getElementById("try4");
    if (x4.style.display === "none") {
      x4.style.display = "block";
    } else {
      x4.style.display = "none";
    }
  }
  function myFunction5() {
    var x5 = document.getElementById("try5");
    if (x5.style.display === "none") {
      x5.style.display = "block";
    } else {
      x5.style.display = "none";
    }
  }
  function myFunction6() {
    var x6 = document.getElementById("try6");
    if (x6.style.display === "none") {
      x6.style.display = "block";
    } else {
      x6.style.display = "none";
    }
  }
  function myFunction7() {
    var x7 = document.getElementById("try7");
    if (x7.style.display === "none") {
      x7.style.display = "block";
    } else {
      x7.style.display = "none";
    }
  }
  $(window).load(function(){

    var body = $("body"),
        universe = $("#universe"),
        solarsys = $("#solar-system");
  
    var init = function() {
      body.removeClass('view-2D opening').addClass("view-3D").delay(2000).queue(function() {
        $(this).removeClass('hide-UI').addClass("set-speed");
        $(this).dequeue();
      });
    };
  
    var setView = function(view) { universe.removeClass().addClass(view); };
  
  
  
    $("#data a").click(function(e) {
      var ref = $(this).attr("class");
      solarsys.removeClass().addClass(ref);
      $(this).parent().find('a').removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });
  
    $(".set-view").click(function() { body.toggleClass("view-3D view-2D"); });
  
  
    init();
  
  });
