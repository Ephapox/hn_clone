import userDisplayCss from './user-display.sass';
import NewsServiceDep from './../../services/NewsService/NewsService';

function userDisplay(NewsService) {
	return {
		restrict: 'E',
		scope: {
			user: "="
		},
		require: "?^newsStories",
		template: require('./user-display.html'),
		controller: ['$scope', function($scope){
		}],
		link: function(scope, el, attrs, parent) {
			NewsService.getUser(parent.selectedUser)
				.then(user => scope.display.user = user.data);
		},
		controllerAs: 'display',
		bindToController: true
	}
}

export default angular.module('directives.userDisplay', [NewsServiceDep])
	.directive('userDisplay', ['NewsService', userDisplay])
	.name;
