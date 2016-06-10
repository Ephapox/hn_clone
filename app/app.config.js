let configs = [
	'$urlRouterProvider', 
	'$locationProvider', 
	function($urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/');
	}
];

export default configs;
