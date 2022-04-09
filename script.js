


const timeline = gsap.timeline({defaults: {duration: 1}})
timeline.from('.header', {y:'-100%', ease: 'bounce' })
.from('.link', { opacity: 0,  stagger: .5})
.from('.right', { x: '-100vw',  ease: "power2.in"}, 1)
.from('.left', { x: '-100vw'}, '<.5')
.to('.footer', { y: 0, ease: 'elastic'})
.fromTo('.button', {opacity: 0, rotate: 720, scale: 0}, {opacity: 1, rotation: 0, scale: 2})

const button = document.querySelector('.button');
button.addEventListener('click', () => {
  //  timeline.timeStamp(3)
    timeline.reverse()
    
})