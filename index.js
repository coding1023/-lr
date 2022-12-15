const tl = gsap.timeline({defaults: {ease: 'power1.out'}});


tl.to('.text', {y:'0%', duration:1, stagger:0.25});
tl.to('.slider',{y:'-100%', duration:1.5, delay:0.5});
 tl.to('.intro',{y: '-100%', duration:1}, "-=1"); //-=1 start 1 s faster
 tl.fromTo('nav',{opacity:0}, {opacity:1, duration:2});
 tl.fromTo('.big-text',{opacity:0}, {opacity:1, duration:2},'-=1');












/* Latest compiled and minified JavaScript included as External Resource */var elem = document.getElementById("progress-bar");
var bars = document.getElementsByClassName("progress-bar");

for (let i = 0; i < bars.length; i++) {
    const bar = bars[i];
  
    var progress = 90;



    bar.style.background = "#1B264F";
  




}








//reveal

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  // To check the scroll position on page load
  reveal();
  
  
  
  
  //LOADER
  
  const loader = document.getElementById('loader');
  const main = document.getElementById('main-section');
  
  function init() {
    setTimeout(() => {
  
      loader.style.display= 'none';
      loader.style.opacity= 0;
      setTimeout(()=> (main.style.opacity= 1), 50);
    }, 4000)
  
    
  }
  
  
  window.addEventListener('load', (event) => {
    init()
    console.log('page is fully loaded');
  });
  