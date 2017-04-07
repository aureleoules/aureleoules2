class HomeController {
	constructor() {
		this.name = 'home';
		var hero = document.getElementById('hero');
		var classes = ['is-info', 'is-success', 'is-warning', 'is-danger', 'is-light', 'is-dark', 'is-primary'];
		hero.addEventListener('click', () => {
			var random = Math.floor(Math.random() * classes.length);
			hero.className = "hero is-fullheight " + classes[random];
		});
	}
}

export default HomeController;