window.onload = () => {
    let body = document.querySelector('body');
    body.className += "visible"
}

function openMenu() {
    let headerButton = document.querySelector("header .header__button-mobile");
    let headerLinks = document.querySelector("header .header__links");
    
    if (headerButton.className == 'header__button-mobile' && headerLinks.className == 'header__links') {
        headerButton.className += ' header__button-mobile_opened';
        headerLinks.className += ' header__links_opened';
    } else {
        headerButton.className = 'header__button-mobile';
        headerLinks.className = 'header__links';
    }
}

let header = document.querySelector('header');
let progressOfScroll = document.documentElement.scrollTop;

function scrolling() {
	let newScroll = document.documentElement.scrollTop;
	if (newScroll > progressOfScroll) {
		header.classList.add('header_hidden');
	}
	else {
        header.classList.remove('header_hidden');
    }
	progressOfScroll = newScroll;
}