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

