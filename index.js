Document
/*
function marioSound(htmlclass){
document.querySelector("." + htmlclass).addEventListener("click", onClick);
}
function onClick(){
    makeSound();
    console.log("wruyyyyyyyy");
}

function makeSound(){
    var mario= new Audio("audio/marioSE.mp3");
    mario.play();
}

marioSound("carousel-control-prev");
marioSound("carousel-control-next")
*/
////////////////viewport///////////////////

function viewPort(htmlClass,cssClass,i){
    console.log(i+ htmlClass + cssClass);
    let prevRatio= 0.0;
    window.addEventListener("load", (event) => {
      contentElement = htmlClass;
      createObserver();
    }, false);
    
    function createObserver() {
        let observer;
        let options = {
          root: null,
          rootMargin: "0px",
          threshold: 0
        };
      
        observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(contentElement);
      }
      function handleIntersect(entries, observer) {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > prevRatio) {
            htmlClass.classList.add(cssClass);
          }
          prevRatio = entry.intersectionRatio;
        });
      }

    }
    document.querySelectorAll(".assignments").forEach(element => {
            viewPort(element,"cards-animation");
    });
///////////////////////////////////////////////


   //Rotating subjects stop mechanism mechanism  
    document.querySelector(".sun").addEventListener("mouseenter", stopRotationF);
    function stopRotationF(){
      document.querySelector(".sun").classList.toggle("stop");
      document.querySelectorAll(".planet").forEach(element => {
        element.classList.toggle("stop");
      });
      document.querySelector(".sun").addEventListener("mouseleave", stopRotationF);
      /*setTimeout(function(){
        document.querySelector(".sun").classList.remove("stop");
        document.querySelectorAll(".planet").forEach(element => {
          element.classList.remove("stop");
        });
      }, 1000);*/
    } /////////////////////////////////
