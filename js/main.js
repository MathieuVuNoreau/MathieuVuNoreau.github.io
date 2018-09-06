// ParticlesJS Config.
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 30,
      "density": {
        "enable": true,
        "value_area": 700
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
  }
});

$(".homeNav").on('click',function(){
  $(".bodyWrapper.currentPage").removeClass("currentPage");
  $(".bodyWrapper.homePage").addClass("currentPage");
});

$(".introNav").on('click',function(){
  $(".header")[0].style.animation = "load-left 0.3s";
  $(".header")[1].style.animation = "load-left 0.3s";
  $(".image-wrapper")[0].style.animation = "load-left 0.7s";
  $(".first-intro")[0].style.animation = "load-right 0.3s";
  $(".second-intro")[0].style.animation = "load-right 0.5s";
  $(".third-intro")[0].style.animation = "load-right 0.7s";
  $(".skillIcon")[0].style.animation = "fade-in 0.2s";
  $(".skillIcon")[1].style.animation = "fade-in 0.4s";
  $(".skillIcon")[2].style.animation = "fade-in 0.6s";
  $(".skillIcon")[3].style.animation = "fade-in 0.8s";
  $(".skillIcon")[4].style.animation = "fade-in 1s";
  $(".skillIcon")[5].style.animation = "fade-in 1.2s";
  $(".skillIcon")[6].style.animation = "fade-in 1.4s";
  $(".skillIcon")[7].style.animation = "fade-in 1.6s";
  $(".skillIcon")[8].style.animation = "fade-in 1.8s";
  $(".skillIcon")[9].style.animation = "fade-in 2s";
  $(".bodyWrapper.currentPage").removeClass("currentPage");
  $(".bodyWrapper.IntroPage").addClass("currentPage");
});

$(".ReportNav").on('click',function(){
  $(".bodyWrapper.currentPage").removeClass("currentPage");
  $(".bodyWrapper.reportPage").addClass("currentPage");
});
