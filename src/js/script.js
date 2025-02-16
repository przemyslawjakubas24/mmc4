//hamburger menu open close
document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.querySelector('.hamburger')
	const closeMenu = document.querySelector('.close-menu')
	const navMenu = document.querySelector('.nav__links')

	function toggleMenu() {
		navMenu.classList.toggle('open-menu')
	}

	function closeMenuOnClickOutside(event) {
		if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
			navMenu.classList.remove('open-menu')
		}
	}

	hamburger.addEventListener('click', toggleMenu)
	closeMenu.addEventListener('click', toggleMenu)
	document.addEventListener('click', closeMenuOnClickOutside)
})

//scrollspy
let pageItem = document.querySelectorAll('.page-item')
let navLinks = document.querySelectorAll('.nav__item')

window.onscroll = () => {
	pageItem.forEach(sec => {
		let top = window.scrollY
		let offset = sec.offsetTop - 200
		let height = sec.offsetHeight
		let id = sec.getAttribute('id')

		if (top >= offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active')
				document.querySelector('.nav__links__item a[href*=' + id + ']').classList.add('active')
			})
		}
	})
}
