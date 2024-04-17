
const contactBtn = document.getElementById("contactme");

contactBtn.onclick = () => {
    // window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
    window.scrollTo(0, document.body.scrollHeight);
}

const backToTopBtn = document.getElementById("back_to_top");
const sticky = backToTopBtn.offsetTop;

const 

window.onscroll = () => {
	if (window.scrollY >= sticky) {
		backToTopBtn.style.display = "block";
		backToTopBtn.classList.add("sticky");
	} else {
		backToTopBtn.classList.remove("sticky");
	}
};

// backToTopBtn.on

const anime = require("animejs");

anime({
	targets: "div",
	translateX: 250,
	rotate: "1turn",
	backgroundColor: "#FFF",
	duration: 800,
});


