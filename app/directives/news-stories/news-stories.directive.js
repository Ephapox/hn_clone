function newsStories() {
	return {
		restrict: 'E',
		scope: {
			type: "@",
			limit: "@"
		},
		transclude: true,
		template: require('./news-stories.html'),
		controller: ["$scope", 'NewsService', "$attrs", function($scope, NewsService, attrs) {
			$scope.newsCtrl.stories = [];
			$scope.newsCtrl.selectedUser = "";
			$scope.newsCtrl.loading = true;

			$scope.$watch('newsCtrl.type', function(newVal){
				$scope.newsCtrl.loading = true;
				NewsService.getIds(newVal)
					.then(storyIds => NewsService.getStories.call(NewsService, storyIds, $scope.newsCtrl.limit))
					.then(stories => {
						$scope.newsCtrl.stories = stories
						$scope.newsCtrl.loading = false;
					});
			});

			$scope.newsCtrl.selectUser = function(user) {
				if($scope.newsCtrl.selectedUser === user) return $scope.newsCtrl.selectedUser = "";
				$scope.newsCtrl.selectedUser = user;
			}
		}],
		controllerAs: 'newsCtrl',
		bindToController: true
	}
}
export default angular.module('directives.newsStories', [])
	.directive('newsStories', newsStories)
	.name;
