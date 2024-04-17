gsap.to("#title",{
  backgroundColor: "#9B3483",
  height:"90px",
  duration: 0.8,
  scrollTrigger:{
      trigger:"#nav",
      scroller:"body",
      // markers:true,
      start:"top -10%",  
      end: "top -11%",
      scrub:1
  }
})

gsap.to("#main",{
  backgroundColor: "#ffecec",
  scrollTrigger:{
      trigger:"#main",
      scroller:"body",
      // markers:true,
      start:"top -25%",
      end:"top -70%",
      scrub:2,
  }
})
