import newsStories from './../news-stories/news-stories.directive';
import userDisplay from './../user-display/user-display.directive';

function newsWidget() {
	return {
		restrict: 'E',
		scope: {
			type: "@",
			limit: "@"	
		},
		template: require('./news-widget.html'),
		controller: ['$scope', function($scope, el, attrs) {
			this.user = "Bill";
		}],
		controllerAs: 'widgetCtrl',
		bindToController: true
	}
}

export default angular.module('directives.newsWidget', [newsStories, userDisplay])
	.directive('newsWidget', newsWidget)
	.name;
