function addSnapping(){
    document.querySelectorAll('.snappable').forEach(doSnapper =>{
        doSnapper.classList.add('do-snap');
      });
      document.getElementById("internal-container").classList.add('blot-scrollbar');
      
    document.getElementById("almost").scrollIntoView({behavior: "instant"});
}

function killSnapping(){
    
    document.querySelectorAll('.snappable').forEach(doSnapper =>{
        doSnapper.classList.remove('do-snap');
      });
    document.getElementById("internal-container").classList.remove('blot-scrollbar');
    document.getElementById("ending").scrollIntoView({behavior: "instant"});
    
}

const intersectionCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        
        killSnapping();
        
      }
    });
  };  

const intersectionOptions = {rootMargin: "0px 0px -90% 0px",};
const observer = new IntersectionObserver(intersectionCallback, intersectionOptions);

observer.observe(document.querySelector('#ending'));
