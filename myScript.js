document.onreadystatechange = function() {
	if (document.readyState !== "complete") {
		document.querySelector("body").style.visibility = "hidden";
		document.querySelector("#loader").style.visibility = "visible";
	} else {
		document.querySelector("#loader").style.display = "none";
		document.querySelector("body").style.visibility = "visible";
	}
};


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
  
  el.classList.add("sub-highlight")
  
	
}

function unhighlight(el){
	el.classList.remove("sub-highlight")
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




(function() {
  document.getElementById("contact-form").addEventListener("submit", function(event) {
      console.log('form submitted.');
      if (!grecaptcha.getResponse()) {
          console.log('captcha not yet completed.');

          event.preventDefault(); //prevent form submit
          grecaptcha.execute();
      } else {
          console.log('form really submitted.');
      }
    });
})();



onCompleted = function() {
  console.log('captcha completed.');
  $('#contact-form').submit();
  // alert('wait to check for "captcha completed" in the console.');
}