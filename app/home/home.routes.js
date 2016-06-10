export default ['$stateProvider', function($stateProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			template: require('./home.html'),
			controller: 'HomeController',
			controllerAs: 'home'
		});
}]
