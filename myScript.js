function toggle(el){
	el.classList.toggle("hide")
}

function scrollTo(hash) {

    location.hash = "#" + hash;
}

function show(el){

  let currElDisplayed = document.querySelector('.gif.show')
  if(currElDisplayed){
    currElDisplayed.classList.remove('show')
  }
  el.classList.add('show')
}

function select(gifEl,iconEl){
  let modal = document.querySelector('.modal')
  modal.classList.add('show')
  let currIconEl = document.querySelector('i.highlight')
  currIconEl.classList.remove("highlight")
  iconEl.classList.add("highlight")

  //display gif
  let currElDisplayed = document.querySelector('.gif.show')
  if(currElDisplayed){
    currElDisplayed.classList.remove('show')
  }
  gifEl.classList.add('show')
}

function highlight(el){
	el.classList.add("highlight")
}

function unhighlight(el){
	el.classList.remove("highlight")
}

const sliders = document.querySelectorAll(".slide-in")

const appearOptions = {
  threshold: 0,
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