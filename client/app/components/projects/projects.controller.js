const moment = require('moment');
function ProjectsController($scope, $http) {
	$scope.moment = moment;
	this.name = 'projects';

	getRepos(1);
	let repos = [];

	function parseRepos(data) {
		let finalRepos = [];
		data.forEach(repo => {
			if(!repo.fork) {
				finalRepos.push(repo);
			}
		});
		$scope.repos = finalRepos;
	}

	function getRepos(i) {
		$http
		.get(`https://api.github.com/users/aureleoules/repos?page=${i}`)
		.then((response, err) => {
			response.data.forEach(repo => {
				repos.push(repo);
			});
			if(response.data.length === 30) {
				getRepos(i + 1);
			} else {
				parseRepos(repos);
			}
		});
	}
}

export default ProjectsController;
