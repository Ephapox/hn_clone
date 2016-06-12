import newsStories from './../news-stories/news-stories.directive';
import userDisplay from './../user-display/user-display.directive';
import styles from './news-widget.sass';

const widgetData = [
	{
		name: "Top",
		id: "top-stories",
		value: "top"
	},
	{
		name: "Ask HN",
		id: "ask-stories",
		value: "ask"
	},
	{
		name: "New",
		id: "new-stories",
		value: "new"
	},
	{
		name: "Best",
		id: "best-stories",
		value: "best"
	},
	{
		name: "HN Jobs",
		id: "hn-jobs",
		value: "job"
	},
	{
		name: "Show HN",
		id: "show-stories",
		value: "show"
	},
];

function newsWidget() {
	return {
		restrict: 'E',
		scope: {
			type: "@",
			limit: "@"	
		},
		template: require('./news-widget.html'),
		controller: ['$scope', function($scope, el, attrs) {
			this.currentUser = {};
			this.storyMode = 'top';
			this.selections = widgetData;
			this.selectMode = function(val) {
				this.storyMode = val;	
			}
		}],
		controllerAs: 'widgetCtrl',
		bindToController: true
	}
}

export default angular.module('directives.newsWidget', [newsStories, userDisplay])
	.directive('newsWidget', newsWidget)
	.name;
