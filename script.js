
function page1(){
    var tl=gsap.timeline();
tl.from("nav h1, nav button, h4",{
    y:-20,
    opacity:0,
    duration:0.6,
    delay:0.1,
    stagger:0.15
})

tl.from(".center-part1 h1",{
    x:-300,
    opacity:0,
    duration:0.5
},"-=-1")
tl.from(".center-part1 p",{
    y:-50,
    opacity:0,
    duration:0.4
})
tl.from(".center-part1 button",{
    x:-150,
    opacity:0,
    duration:0.4
})
tl.from(".center-part2 img ",{
    x:250,
    opacity:0,
    duration:2
},"-=-0.9")
tl.from(".center-part2 i, i",{
    y:-150,
    opacity:0,
    duration:0.7
})
tl.from("section1-bottom img", {
    rotate: 300,                // Start with a rotation of 300 degrees
    opacity: 0,                 // Start with opacity 0
    duration: 0.5,              // Animation duration
    stagger: 0.1,  // Animation duration
    scrollTrigger: {
      trigger: ".section1-bottom img",  
      scroller: "body",         
      start: "top 90%",         
      end: "top 10%",           
      scrub: true,             
      markers: false          
    }
  });

}

page1();



// Create a ScrollTrigger for the whole page
gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".services h3",  
    scroller: "body",        
    start: "top 90%",  
    end: "top 00%",   
    scrub: true,          
    markers: false      
  }
});

// Animating the service title and paragraph
tl1.from(".services h3", {
  x: -100,        
  opacity: 0,     
  duration: 0.5,  
});

tl1.from(".services p", {
  y: -100,       
  opacity: 0,    
  duration: 0.9, 
});

// Animating left and right elements
tl1.from(".elem.left",{
  x: -300,
  opacity: 0,
  duration: 2,
},"bt");

tl1.from(".elem.right",{
  x: 300,
  opacity: 0,
  duration: 2,
},"bt");

// Animating the box class elements
tl1.from(".box", {
  y: -300,         
  opacity: 1,     
  duration: 1,
  delay :1
   
}, "bt1");

tl1.from(".box", {
  y: 300,          
  opacity: 1,      
  duration: 1,
  delay :1
      
}, "bt1");

///////////////
// Dynamics

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
      nav.style.backgroundColor = '#1a1a1a'; // Darker color when scrolled
  } else {
      nav.style.backgroundColor = '#2f53be'; // Original color
  }
});
