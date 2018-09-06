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
$(document).ready(function(){
  $(".homePage .headerContent")[0].style.animation = "fade-in 2s";
  $(".homePage .backgroundGradient")[0].style.animation = "grow 8s";
  $(".homePage .backgroundGradient")[1].style.animation = "grow 8s";
});

$(".homeNav").on('click',function(){
  $(".homePage .headerContent")[0].style.animation = "fade-in 2s";
  $(".homePage .backgroundGradient")[0].style.animation = "grow 8s";
  $(".homePage .backgroundGradient")[1].style.animation = "grow 8s";
  $(".bodyWrapper.currentPage").removeClass("currentPage");
  $(".bodyWrapper.homePage").addClass("currentPage");
});

$(".introNav").on('click',function(){
  $(".IntroPage .header")[0].style.animation = "fade-in 0.3s";
  $(".IntroPage .header")[1].style.animation = "fade-in 0.3s";
  $(".IntroPage .image-wrapper")[0].style.animation = "load-left 0.7s";
  $(".IntroPage .first-intro")[0].style.animation = "load-right 0.3s";
  $(".IntroPage .second-intro")[0].style.animation = "load-right 0.5s";
  $(".IntroPage .third-intro")[0].style.animation = "load-right 0.7s";
  $(".IntroPage .skillIcon")[0].style.animation = "fade-in 0.2s";
  $(".IntroPage .skillIcon")[1].style.animation = "fade-in 0.4s";
  $(".IntroPage .skillIcon")[2].style.animation = "fade-in 0.6s";
  $(".IntroPage .skillIcon")[3].style.animation = "fade-in 0.8s";
  $(".IntroPage .skillIcon")[4].style.animation = "fade-in 1s";
  $(".IntroPage .skillIcon")[5].style.animation = "fade-in 1.2s";
  $(".IntroPage .skillIcon")[6].style.animation = "fade-in 1.4s";
  $(".IntroPage .skillIcon")[7].style.animation = "fade-in 1.6s";
  $(".IntroPage .skillIcon")[8].style.animation = "fade-in 1.8s";
  $(".IntroPage .skillIcon")[9].style.animation = "fade-in 2s";
  $(".IntroPage .backgroundGradient")[0].style.animation = "grow 5s";
  $(".IntroPage .backgroundGradient")[1].style.animation = "grow 5s";
  $(".bodyWrapper.currentPage").removeClass("currentPage");
  $(".bodyWrapper.IntroPage").addClass("currentPage");
});

$(".ReportNav").on('click',function(){
  $(".bodyWrapper.currentPage").removeClass("currentPage");
  $(".bodyWrapper.reportPage").addClass("currentPage");
});
