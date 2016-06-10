let configs = function($urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
}

configs.$inject = ['$urlRouterProvider', '$locationProvider'];

export default configs;
