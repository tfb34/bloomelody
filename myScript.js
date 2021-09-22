function toggle(el){
	el.classList.toggle("hide")
}

function scrollTo(hash) {

    location.hash = "#" + hash;
}

function highlight(el){
	el.classList.add("highlight")
}

function unhighlight(el){
	el.classList.remove("highlight")
}

const sliders = document.querySelectorAll(".slide-in")

const appearOptions = {
  threshold: 0.25,
  rootMargin: "0px 0px -250px 0px"
};


const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});