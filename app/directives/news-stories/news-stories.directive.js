import angular from 'angular';

function newsStories() {
	return {
		restrict: 'E',
		scope: {
			type: "@",
			limit: "@"
		},
		template: require('./news-stories.html'),
		link: function(scope, el, attrs){
				
		},
		controller: ["$scope", 'NewsService', "$attrs", function($scope, NewsService, attrs) {
			const type = attrs.type;
			const limit = attrs.limit;

			NewsService[type]()
				.then(storyIds => NewsService.getStories.call(NewsService, storyIds, limit))
				.then(stories => $scope.news.stories = stories);
		}],
		controllerAs: 'news'
	}
}
export default angular.module('directives.newsStories', [])
	.directive('newsStories', newsStories)
	.name;
